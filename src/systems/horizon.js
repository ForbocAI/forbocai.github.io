// Growing the treeline into the sunset.
//
// The drawing is in components/Horizon.js and is pure. This places it in the
// sunset band at the band's own measured size, and regrows it when the window
// changes, because the band's height follows the viewport and a treeline drawn
// for one width is the wrong treeline at another.
import { horizonSvg } from '../components/Horizon.js';

let horizonResize = null;
let idle = 0;

// The same forest twice: at dawn under the hero, with no lamps lit yet, and at
// dusk in the sunset, with a few windows lit. One seed, so it is one place,
// and the page between them is one day.
// The sun rises on the left and sets on the right.
const PLACES = [
    ['.hero-horizon', false, 0.22],
    ['.nightfall-edge', true, 0.68],
];

const grow = () => {
    PLACES.forEach(([sel, lights, sun]) => {
        const el = document.querySelector(sel);
        if (!el) return;
        const box = el.getBoundingClientRect();
        if (box.width < 40 || box.height < 40) return;
        el.innerHTML = horizonSvg({ seed: 'lanternbough', width: box.width, height: box.height, lights, sun });
    });
};

export const setupHorizon = () => {
    if (horizonResize) window.removeEventListener('resize', horizonResize);
    grow();
    horizonResize = () => {
        clearTimeout(idle);
        idle = setTimeout(grow, 180);
    };
    window.addEventListener('resize', horizonResize, { passive: true });
};
