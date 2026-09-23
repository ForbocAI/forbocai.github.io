// Growing the colonies' fungus.
//
// Each night chapter's grown light sits at one edge of the page, at a height
// colonies.css sets per chapter (--colony-x, --colony-ty). This grows the
// fungus that light comes from, at that edge and that height, drawn by
// components/Fungus.js. Only where the gutter beside the text is wide enough
// to hold it: on a narrower screen it would grow under a sentence, and the
// night there is night.
import { fungusSvg } from '../components/Fungus.js';

const GUTTER_MIN = 150;
let fungusResize = null;
let idle = 0;

const grow = () => {
    document.querySelectorAll('.night-fungus').forEach((el) => el.remove());
    document.querySelectorAll('.nightfall .chapter').forEach((chapter) => {
        const inner = chapter.querySelector(':scope > .container');
        if (!inner) return;
        const cs = getComputedStyle(chapter);
        const right = cs.getPropertyValue('--colony-x').trim() === '100%';
        // To the content's edge, not the container's: its padding is gutter too.
        const box = inner.getBoundingClientRect();
        const ics = getComputedStyle(inner);
        const gutter = right
            ? window.innerWidth - box.right + parseFloat(ics.paddingRight)
            : box.left + parseFloat(ics.paddingLeft);
        if (gutter < GUTTER_MIN) return;
        const ty = parseFloat(cs.getPropertyValue('--colony-ty')) || 470;
        const width = Math.min(gutter * 0.62, 150);
        const height = width * 2.1;
        if (ty + height / 2 > chapter.offsetHeight) return;
        const el = document.createElement('div');
        el.className = `night-fungus${right ? ' is-right' : ''}`;
        el.setAttribute('aria-hidden', 'true');
        el.style.top = `${Math.round(ty - height / 2)}px`;
        el.style.width = `${Math.round(width)}px`;
        el.style.height = `${Math.round(height)}px`;
        el.innerHTML = fungusSvg({ seed: chapter.id || 'night', width, height });
        chapter.appendChild(el);
    });
};

export const setupNightFungus = () => {
    if (fungusResize) window.removeEventListener('resize', fungusResize);
    grow();
    fungusResize = () => {
        clearTimeout(idle);
        idle = setTimeout(grow, 180);
    };
    window.addEventListener('resize', fungusResize, { passive: true });
};
