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
let stemScroll = null;
let raf = 0;
let shadeRaf = 0;

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

    /* The plant grows OUT OF the chapter's seal, below the chapter's picture.
       It used to start at the spread's own top, and a spread with a lead
       figure puts that figure first, so the stem ran straight down over the
       illustration: a reviewer measured it "35px inside the picture, drawn over
       the serving-girl's apron and the lantern post — lighter than the wood it
       crosses, so it reads as a scratch on the print". It also passed through
       the medallion in every chapter that has one, and "a line through a
       closed glyph reads as a mistake", and it began in a blunt square cut —
       "the stem doesn't begin, it just starts".
       One change answers all three: the seal is the seed. The head's natural
       top is the body's top, since they share a grid row and only the head is
       sticky; the seal's offset inside the head is fixed however far the head
       has ridden. */
    const bodyTop = body.getBoundingClientRect().top - spreadBox.top;
    // The seal is the chapter's rune, or — in the crossing — the character's
    // own sigil standing in the rail where a rune would.
    const mark = head.querySelector(':scope > .chapter-mark, :scope > .sigil');
    const markBox = mark?.getBoundingClientRect();
    const rootY = markBox ? bodyTop + (markBox.bottom - headBox.top) + 4 : bodyTop;
    const stemX = markBox ? markBox.left + markBox.width / 2 - headBox.left : rail / 2;
    const tall = height - rootY;
    if (tall < 160) return null;

    // Offsets from the STEM's own top, which is what the SVG is drawn in.
    // A sticky head has already left the top of the spread by the time a
    // reader is deep in a chapter, so nothing here can be measured against
    // the viewport.
    const inSpread = (y) => y > 12 && y < tall - 12;
    const offsetOf = (el) => el.getBoundingClientRect().top - spreadBox.top - rootY;

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
    stem.style.top = `${rootY}px`;
    stem.style.width = `${width}px`;
    stem.style.height = `${tall}px`;
    // Two chapters share the id #souls, so the seed alone would grow the same
    // plant twice on one page.
    const twin = document.querySelectorAll(`.chapter-stem[data-seed^="${seed}"]`).length;
    stem.dataset.seed = twin ? `${seed}-${twin}` : seed;
    stem.innerHTML = stemSvg({ seed: stem.dataset.seed, width, height: tall, stemX, nodes, minors });

    spread.appendChild(stem);
    return {
        stem,
        spread,
        head,
        movements: movements.filter((el) => inSpread(offsetOf(el))),
        // Every drawn group with the extent it actually OCCUPIES, measured
        // once from the SVG rather than taken from the height it grew at.
        //
        // Shading by the origin y was not enough and a reviewer found where:
        // "a leaf lands on the word 'in'", "a blade lying across 'one i'",
        // on the 1024 and 1440x700 shapes while 1440x900 was clean. A branch
        // rises or falls by up to 56px from its node and then ends in a leaf
        // up to 26px long, so its drawn shape reaches some 80px away from the
        // point it was filed under — far enough to be inside a head that the
        // origin sat clear of. getBBox gives the shape, which is the thing
        // that can touch a word.
        parts: [...stem.querySelectorAll('.stem-branch, .stem-minor')].map((el) => {
            const box = el.getBBox();
            return { el, top: box.y, bottom: box.y + box.height };
        }),
    };
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

/* The drawing gives way to the words.
   Both round-twenty-one reviewers led with the same defect, and it was mine:
   "a line running through the words 'room was' in the chapter title, ending in
   a dot inside 'was' — a strikethrough on an H2", found in seven shots across
   three shapes, and "the title renders as 'Meet•The ForbocAI NPC LM
   Servitor™'". The cause is structural rather than a matter of degree: the
   head is STICKY and its text spans the whole margin column, so it rides down
   over every branch in turn and there is no height at which a branch is safe.

   So the plant is shaded out wherever the head is standing, and comes back
   when the head has passed. That is also what the thing it is drawn as would
   do — a leaf behind a sign is not a leaf across a sign. */
const shade = (grown) => {
    cancelAnimationFrame(shadeRaf);
    shadeRaf = requestAnimationFrame(() => {
        grown.forEach(({ stem, head, parts }) => {
            // In the STEM's coordinates, which is what the SVG is drawn in and
            // no longer the spread's, now that the plant starts at the seal.
            const sb = stem.getBoundingClientRect();
            const hb = head.getBoundingClientRect();
            const top = hb.top - sb.top - 10;
            const bottom = hb.bottom - sb.top + 10;
            parts.forEach(({ el, top: t, bottom: bt }) => {
                // Overlap, not containment: a branch that merely reaches into
                // the head is the one that crosses a line of it.
                el.classList.toggle('is-shaded', bt >= top && t <= bottom);
            });
            // And the TRUNK, which the class above cannot reach: it is one
            // path the whole height of the chapter, so it is cut out of view
            // by a band on the layer's own mask, feathered either side. Without
            // it the stem ran straight through the medallion and the title as
            // the head rode down over it.
            stem.style.setProperty('--cut-a', `${Math.round(top)}px`);
            stem.style.setProperty('--cut-b', `${Math.round(bottom)}px`);

            /* But not in the rail. The band above hid the whole head's height,
               including the strip directly under the seal, so at a chapter's
               start the plant appeared 170px below the medallion it grows
               from: "not attached to the medallion anywhere", with branches
               showing as "orphaned arcs, no stem" wherever the trunk above them
               was hidden. The rail is the strip left of the title's own text;
               nothing is written there, so the trunk can stay visible in it
               from wherever the medallion currently is, downward. */
            const mark = head.querySelector(':scope > .chapter-mark, :scope > .sigil');
            const title = head.querySelector('h2, h1, h3');
            if (mark && title) {
                const railW = Math.max(0, title.getBoundingClientRect().left - sb.left - 6);
                const medB = mark.getBoundingClientRect().bottom - sb.top + 3;
                stem.style.setProperty('--rail-w', `${Math.round(railW)}px`);
                stem.style.setProperty('--med-b', `${Math.round(medB)}px`);
            }
        });
    });
};

const grow = () => {
    stemObserver?.disconnect();
    stemObserver = null;
    clearStems();
    if (window.innerWidth < SPREAD_MIN) return;

    if (stemScroll) window.removeEventListener('scroll', stemScroll);
    stemScroll = null;

    const grown = [...document.querySelectorAll('.chapter-spread')]
        .map(growOne)
        .filter(Boolean);
    if (!grown.length) return;

    watch(grown);
    stemScroll = () => shade(grown);
    window.addEventListener('scroll', stemScroll, { passive: true });
    shade(grown);
};

export const setupChapterStem = () => {
    if (stemResize) window.removeEventListener('resize', stemResize);
    if (stemScroll) window.removeEventListener('scroll', stemScroll);
    stemScroll = null;

    // After layout, not during it. Fonts land after first paint and move every
    // paragraph down the page, so a stem measured at render time marks the
    // wrong heights by a line or two per movement.
    const settle = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => requestAnimationFrame(grow));
    };

    // Only once the fonts are in, when they are still arriving. Growing first
    // and regrowing on arrival left a window where the text had reflowed under
    // a plant measured against the old layout: a branch could cross a title
    // for the frames before the regrow, which stemtouch caught at the first
    // scroll position on a different screen shape each run. A plant grown
    // after the reflow has nothing stale to show.
    if (document.fonts && document.fonts.status !== 'loaded') {
        document.fonts.ready.then(settle).catch(settle);
    } else {
        settle();
    }

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
