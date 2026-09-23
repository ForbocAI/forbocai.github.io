// Growing the treeline into the sunset.
//
// The drawing is in components/Horizon.js and is pure. This places it in the
// sunset band at the band's own measured size, and regrows it when the window
// changes, because the band's height follows the viewport and a treeline drawn
// for one width is the wrong treeline at another.
import { horizonSvg } from '../components/Horizon.js';

let horizonResize = null;
let idle = 0;

const grow = () => {
    const edge = document.querySelector('.nightfall-edge');
    if (!edge) return;
    const box = edge.getBoundingClientRect();
    if (box.width < 40 || box.height < 40) return;
    edge.innerHTML = horizonSvg({ seed: 'lanternbough', width: box.width, height: box.height });
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
