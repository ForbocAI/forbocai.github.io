// Growing the stem into the margin column.
//
// The drawing is in components/Stem.js and is pure. This is the part that has
// to touch the page: where the margin column actually is at this viewport, how
// tall the spread came out, and which paragraph fell at which height — none of
// which is knowable until the text has laid itself out, and all of which
// changes when the window does. That is the point rather than a nuisance; the
// brief asks for nothing on this page to have a rigid size, and a stem whose
// every proportion is read back off the rendered text has none.
//
// Below 960px there is no margin column, so there is no stem. The spread is
// two inert divs there and the chapter stacks.
import { stemSvg } from '../components/Stem.js';

const SPREAD_MIN = 960;

// A movement is a paragraph that opens with its own takeaway, or a subheading.
// Those are already the chapter's skim layer — typography.css promotes them to
// their own line — so the branches mark the divisions the reader can already
// see rather than a structure invented for the drawing.
const MOVEMENTS = ':scope > p:has(> strong:first-child), :scope > h3, :scope > * > h3';

// Everything else the body is made of. These get a short branchlet rather than
// a branch, so the column carries the chapter's rhythm as well as its
// structure — a plant leafs at every node and turns at only a few.
//
// Descendants, not children. Measured against direct children only, #servitor
// produced three branchlets, because its six numbered cells live inside an
// ordered list and its body has five children in total; a reader scrolling
// past six cells is passing six beats whatever the markup nests them in.
const BEATS = 'p, li, figure, pre, h4, blockquote';

let stemObserver = null;
let stemResize = null;
let raf = 0;

const clearStems = () => {
    document.querySelectorAll('.chapter-stem').forEach((el) => el.remove());
};

const growOne = (spread) => {
    const head = spread.querySelector(':scope > .chapter-head');
    const body = spread.querySelector(':scope > .chapter-body');
    if (!head || !body) return null;

    const spreadBox = spread.getBoundingClientRect();
    const headBox = head.getBoundingClientRect();
    // The head IS the margin column's grid item, so its box is the column —
    // no need to read the template back or keep a copy of the measure here.
    const width = headBox.width;
    const height = spreadBox.height;
    if (width < 140 || height < 220) return null;

    const rail = parseFloat(getComputedStyle(spread).getPropertyValue('--rail')) || 24;
    const movements = [...body.querySelectorAll(MOVEMENTS)];

    // Offsets from the spread's own top, which is what the SVG is drawn in.
    // A sticky head has already left the top of the spread by the time a
    // reader is deep in a chapter, so nothing here can be measured against
    // the viewport.
    const inSpread = (y) => y > 12 && y < height - 12;
    const offsetOf = (el) => el.getBoundingClientRect().top - spreadBox.top;

    const nodes = movements.map(offsetOf).filter(inSpread);

    // A movement's own paragraph already has a branch, so it must not also get
    // a branchlet at the same height — two marks on one node.
    const owned = new Set(movements.map((el) => el.closest('p') ?? el));
    const taken = nodes.map(Math.round);
    const minors = [...body.querySelectorAll(BEATS)]
        .filter((el) => !owned.has(el))
        .map(offsetOf)
        .filter(inSpread)
        // A paragraph inside a list item is one beat, not two, and a branchlet
        // within a few pixels of a branch is a second mark on one node.
        .filter((y, i, all) => all.findIndex((o) => Math.abs(o - y) < 14) === i
            && !taken.some((t) => Math.abs(t - y) < 14));

    const seed = spread.closest('section')?.id ?? 'chapter';
    const stem = document.createElement('div');
    stem.className = 'chapter-stem';
    stem.setAttribute('aria-hidden', 'true');
    stem.style.left = `${headBox.left - spreadBox.left}px`;
    stem.style.width = `${width}px`;
    stem.style.height = `${height}px`;
    // Two chapters share the id #souls, so the seed alone would grow the same
    // plant twice on one page.
    const twin = document.querySelectorAll(`.chapter-stem[data-seed^="${seed}"]`).length;
    stem.dataset.seed = twin ? `${seed}-${twin}` : seed;
    stem.innerHTML = stemSvg({ seed: stem.dataset.seed, width, height, stemX: rail / 2, nodes, minors });

    spread.appendChild(stem);
    return { stem, movements: movements.filter((el) => {
        const y = el.getBoundingClientRect().top - spreadBox.top;
        return y > 12 && y < height - 12;
    }) };
};

// Which movement is being read. The branch at that height lights, so the
// column answers "where am I inside this chapter" — the question the header
// answers for the page, one scale down, and the one a reviewer found
// unanswered across "roughly fifteen phone-screens of scrolling".
const watch = (grown) => {
    if (typeof IntersectionObserver === 'undefined') return;
    const groupFor = new Map();
    grown.forEach(({ stem, movements }) => {
        const groups = [...stem.querySelectorAll('.stem-branch')];
        movements.forEach((el, i) => {
            if (groups[i]) groupFor.set(el, groups[i]);
        });
    });
    if (!groupFor.size) return;

    const visible = new Set();
    const mark = () => {
        const current = [...groupFor.keys()]
            .filter((el) => visible.has(el))
            .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];
        groupFor.forEach((g) => g.classList.remove('is-current'));
        if (current) groupFor.get(current).classList.add('is-current');
    };

    stemObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
            mark();
        },
        { rootMargin: '-28% 0px -55% 0px', threshold: 0 },
    );
    groupFor.forEach((_g, el) => stemObserver.observe(el));
};

const grow = () => {
    stemObserver?.disconnect();
    stemObserver = null;
    clearStems();
    if (window.innerWidth < SPREAD_MIN) return;

    const grown = [...document.querySelectorAll('.chapter-spread')]
        .map(growOne)
        .filter(Boolean);
    if (grown.length) watch(grown);
};

export const setupChapterStem = () => {
    if (stemResize) window.removeEventListener('resize', stemResize);

    // After layout, not during it. Fonts land after first paint and move every
    // paragraph down the page, so a stem measured at render time marks the
    // wrong heights by a line or two per movement.
    const settle = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => requestAnimationFrame(grow));
    };

    settle();
    document.fonts?.ready.then(settle).catch(() => {});

    // A resize changes the column, the spread's height and every movement's
    // position at once, so the plant is regrown rather than rescaled — the
    // same chapter at a different width is a different specimen, which is
    // what the seeded structure is for.
    let idle = 0;
    stemResize = () => {
        clearTimeout(idle);
        idle = setTimeout(settle, 180);
    };
    window.addEventListener('resize', stemResize, { passive: true });
};
