/**
 * Horizon
 *
 * The sunset, with something in it.
 *
 * Round twenty-five framed the sunset in a review shot for the first time,
 * and the judge's reading was exact: "a CSS linear-gradient with nothing in
 * it — no horizon, no sun, no silhouette, no rim light; the terracotta-to-green
 * step passes through a brown that reads as dirty water". Two retunings of
 * the middle stops had already failed from opposite sides (mud, then plum),
 * and this is why: a dusk SKY never turns green. The green of night rises out
 * of the forest. The sky keeps its warm stops, and the moss arrives as the
 * treeline coming up to meet the dark, so there is no muddy middle band to
 * tune at all.
 *
 * Three ridges, far to near, each a line of crowns and the odd pine, grown
 * from a seed like the chapter plants — so the treeline is the same each visit
 * and has no fixed size: it is drawn at whatever width the page is. The
 * nearest ridge is filled with the night's own opening colour and runs to the
 * bottom edge, so it becomes the ground the night chapters stand on without a
 * seam. And in the middle ridge, a few lit windows: the made light, switched
 * on as the grown dark comes up. That is the site's two-source model, drawn
 * once, at the one moment the page is about.
 */
import { seedOf, rngOf, round } from './stem/seed.js';

/* One ridge: a rolling baseline, and on it a crown per few pixels — mostly
   round-topped, some pointed — so the edge is a silhouette of trees rather
   than a hill. `rise` is how tall a crown stands above the baseline, as a
   fraction of the band, so a taller sunset grows taller trees. */
const ridge = (rand, width, height, { base, roll, rise, span, pines }) => {
    // Two frequencies of hill, so the land swells and settles rather than
    // tracing one even wave. The first render was a straight band of crowns:
    // "a picket fence", which is what trees on a level line are.
    const phase = rand() * Math.PI * 2;
    const phase2 = rand() * Math.PI * 2;
    const hills = 0.7 + rand() * 1.2;
    const at = (x) => height * base
        + Math.sin(phase + (x / width) * Math.PI * hills) * height * roll
        + Math.sin(phase2 + (x / width) * Math.PI * hills * 3.1) * height * roll * 0.35;
    let x = -span * rand();
    let d = `M0,${round(height)}L0,${round(at(0))}`;
    while (x < width + span) {
        const w = span * (0.55 + rand() * 1.1);
        // A clearing now and then — the ground shows between the crowns —
        // and now and then one tree standing well above the rest.
        const clearing = rand() < 0.07;
        const emergent = rand() < 0.1 ? 1.7 + rand() * 0.6 : 1;
        const h = clearing ? 0 : height * rise * (0.45 + rand() * 0.85) * emergent;
        const y0 = at(x);
        const y1 = at(x + w);
        if (clearing) {
            d += `L${round(x + w)},${round(y1)}`;
        } else if (rand() < pines) {
            d += `L${round(x + w * 0.5)},${round(Math.min(y0, y1) - h * 1.3)}L${round(x + w)},${round(y1)}`;
        } else {
            d += `C${round(x + w * 0.02)},${round(y0 - h)} ${round(x + w * 0.98)},${round(y1 - h)} ${round(x + w)},${round(y1)}`;
        }
        x += w * (0.55 + rand() * 0.35);
    }
    return { d: `${d}L${round(width)},${round(height)}Z`, at };
};

/**
 * @param {object} spec
 * @param {string} spec.seed    the treeline's identity
 * @param {number} spec.width   the page's width, in px
 * @param {number} spec.height  the band's height, in px
 * @param {boolean} [spec.lights] lit windows in the middle ridge — evening only
 * @returns {string} SVG markup
 */
export const horizonSvg = ({ seed, width, height, lights = true }) => {
    const rand = rngOf(seedOf(seed));
    // Crowns scale with the band, not the page: a phone's third-of-a-screen
    // sunset gets smaller trees rather than three giant ones.
    const span = Math.max(18, Math.min(46, height * 0.09));

    const far = ridge(rand, width, height, { base: 0.66, roll: 0.09, rise: 0.06, span: span * 0.8, pines: 0.14 });
    const mid = ridge(rand, width, height, { base: 0.79, roll: 0.08, rise: 0.09, span, pines: 0.1 });
    const near = ridge(rand, width, height, { base: 0.91, roll: 0.05, rise: 0.11, span: span * 1.3, pines: 0.06 });

    /* Lit windows in the middle ridge: made light, small and few. Placed on
       the ridge's own baseline and kept clear of the page's outer tenth, so
       they read as a settlement in the trees rather than stars. */
    const count = 3 + Math.round(rand() * 3);
    // The ridges consume the seed before this line, so the forest itself is
    // the same morning and evening; only whether anyone has lit a lamp differs.
    const windows = !lights ? '' : Array.from({ length: count }, () => {
        const x = width * (0.12 + rand() * 0.76);
        const y = mid.at(x) + height * (0.015 + rand() * 0.03);
        return `<circle cx="${round(x)}" cy="${round(y)}" r="${round(span * 0.34)}" fill="url(#hz-glow)"/>`
            + `<circle cx="${round(x)}" cy="${round(y)}" r="1.5" fill="var(--lantern)"/>`;
    }).join('');

    return `<svg class="horizon-svg" width="${round(width)}" height="${round(height)}" viewBox="0 0 ${round(width)} ${round(height)}" aria-hidden="true" focusable="false">
        <defs>
            <radialGradient id="hz-glow">
                <stop offset="0" stop-color="var(--lantern)" stop-opacity="0.5"/>
                <stop offset="1" stop-color="var(--lantern)" stop-opacity="0"/>
            </radialGradient>
        </defs>
        <path class="horizon-far" d="${far.d}"/>
        <path class="horizon-mid" d="${mid.d}"/>
        ${windows}
        <path class="horizon-near" d="${near.d}"/>
    </svg>`;
};
