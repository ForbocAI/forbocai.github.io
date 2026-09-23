// Growing a sprig from each chapter's seal, where there is no margin to fill.
//
// Below 960px the margin plant has no column (chapterStem.js grows nothing
// there), and the seal stands alone on its own line above the heading. This
// grows a tendril along that line from the seal's right edge — every chapter
// with a seal, not only the ones with a spread, because on a phone every
// chapter's seal was bare. At 960px and wider it removes itself; the margin
// plant is the chapter's plant there.
import { sprigSvg } from '../components/Sprig.js';

const SPREAD_MIN = 960;
const SEALS = '.chapter-head > .chapter-mark, .chapter-head > .sigil';

let sprigResize = null;
let idle = 0;

const clear = () => document.querySelectorAll('.chapter-sprig').forEach((el) => el.remove());

const grow = () => {
    clear();
    if (window.innerWidth >= SPREAD_MIN) return;
    document.querySelectorAll(SEALS).forEach((seal) => {
        const head = seal.parentElement;
        const hb = head.getBoundingClientRect();
        const sb = seal.getBoundingClientRect();
        // Only where the seal has its line to itself: if the title stands
        // beside it, a tendril would run under the words.
        const title = head.querySelector('h1, h2, h3');
        if (title && title.getBoundingClientRect().top < sb.bottom - 4) return;
        const length = Math.min(hb.right - sb.right - 10, 280);
        if (length < 60) return;
        const sprig = document.createElement('span');
        sprig.className = 'chapter-sprig';
        sprig.setAttribute('aria-hidden', 'true');
        sprig.style.left = `${Math.round(sb.right - hb.left + 4)}px`;
        sprig.style.top = `${Math.round(sb.top - hb.top)}px`;
        sprig.style.height = `${Math.round(sb.height)}px`;
        sprig.style.width = `${Math.round(length)}px`;
        const seed = head.closest('section')?.id || 'chapter';
        sprig.innerHTML = sprigSvg({ seed, length, height: sb.height });
        head.appendChild(sprig);
    });
};

export const setupChapterSprig = () => {
    if (sprigResize) window.removeEventListener('resize', sprigResize);
    // After the fonts, for the same reason as the margin plant: a sprig
    // measured before the reflow is placed against a layout that moves.
    const settle = () => requestAnimationFrame(() => requestAnimationFrame(grow));
    if (document.fonts && document.fonts.status !== 'loaded') document.fonts.ready.then(settle).catch(settle);
    else settle();
    sprigResize = () => {
        clearTimeout(idle);
        idle = setTimeout(settle, 180);
    };
    window.addEventListener('resize', sprigResize, { passive: true });
};
