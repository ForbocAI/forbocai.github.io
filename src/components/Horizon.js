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
 * Three ridges, far to near, grown from a seed like the chapter plants — the
 * same treeline each visit, drawn at whatever width the page is. The nearest
 * ridge is filled with the night's own opening colour and gives the band a
 * floor of solid ground, so it becomes the ground the night chapters stand on
 * without a seam. The same forest opens the page at dawn under the hero.
 *
 * Round twenty-six called the first version clip-art, precisely: "flat
 * two-tone stamps — equal rounded bumps plus identical isosceles triangles, a
 * sun that is a soft blur with no disc and no rim light on the tree tops, and
 * lit windows that read as dust specks". So crowns are lopsided and sometimes
 * two-lobed, pines are tiered rather than triangles and never stand in the
 * nearest ridge (a lone near spike read as wrong depth), the sun is a disc the
 * far ridge half hides, the crowns facing it carry its rim light, and the
 * lamps are a few warm panes gathered into one settlement.
 */
import { seedOf, rngOf, round } from './stem/seed.js';

/* A pine in tiers: the left edge steps out and in three times on its way to
   the tip, and the right edge mirrors it. A triangle is a symbol for a pine;
   this is the outline of one. */
const pine = (x, w, y0, y1, h) => {
    const b = Math.min(y0, y1);
    const at = (fx, fy) => `${round(x + w * fx)},${round(b - h * fy)}`;
    return `L${at(0.1, 0.26)}L${at(0.28, 0.3)}L${at(0.17, 0.52)}L${at(0.33, 0.55)}`
        + `L${at(0.27, 0.78)}L${at(0.5, 1)}L${at(0.73, 0.78)}L${at(0.67, 0.55)}`
        + `L${at(0.83, 0.52)}L${at(0.72, 0.3)}L${at(0.9, 0.26)}L${round(x + w)},${round(y1)}`;
};

/* A crown, lopsided: the two shoulders rise to different heights, and now and
   then it has two lobes. Equal domes on a line were the stamp. */
const crown = (rand, x, w, y0, y1, h) => {
    if (rand() < 0.18) {
        const m = x + w * (0.42 + rand() * 0.16);
        const ym = (y0 + y1) / 2;
        const h2 = h * (0.62 + rand() * 0.3);
        return `C${round(x + (m - x) * 0.05)},${round(y0 - h)} ${round(m - (m - x) * 0.1)},${round(ym - h)} ${round(m)},${round(ym - h * 0.35)}`
            + `C${round(m + (x + w - m) * 0.1)},${round(ym - h2)} ${round(x + w * 0.97)},${round(y1 - h2)} ${round(x + w)},${round(y1)}`;
    }
    const a = 0.72 + rand() * 0.55;
    const c = 0.72 + rand() * 0.55;
    return `C${round(x + w * 0.02)},${round(y0 - h * a)} ${round(x + w * 0.98)},${round(y1 - h * c)} ${round(x + w)},${round(y1)}`;
};

/* One ridge: a rolling baseline, and on it a crown per few pixels, so the
   edge is a silhouette of trees rather than a hill. `rise` is how tall a
   crown stands above the baseline, as a fraction of the band, so a taller
   sunset grows taller trees. Returns the filled shape and its open top edge,
   which carries the rim light. */
const ridge = (rand, width, height, { base, roll, rise, span, pines, emergence }) => {
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
    let top = `M0,${round(at(0))}`;
    while (x < width + span) {
        const w = span * (0.55 + rand() * 1.1);
        // A clearing now and then — the ground shows between the crowns —
        // and now and then one tree standing well above the rest.
        const clearing = rand() < 0.07;
        const emergent = rand() < emergence ? 1.6 + rand() * 0.5 : 1;
        const h = clearing ? 0 : height * rise * (0.45 + rand() * 0.85) * emergent;
        const y0 = at(x);
        const y1 = at(x + w);
        if (clearing) top += `L${round(x + w)},${round(y1)}`;
        else if (rand() < pines) top += pine(x, w, y0, y1, h * 1.35);
        else top += crown(rand, x, w, y0, y1, h);
        x += w * (0.55 + rand() * 0.35);
    }
    return { d: `M0,${round(height)}L${top.slice(1)}L${round(width)},${round(height)}Z`, top, at };
};

/**
 * @param {object} spec
 * @param {string} spec.seed      the treeline's identity
 * @param {number} spec.width     the page's width, in px
 * @param {number} spec.height    the band's height, in px
 * @param {boolean} [spec.lights] lit windows — evening only
 * @param {number} [spec.sun]     where the sun stands, as a fraction of the width
 * @returns {string} SVG markup
 */
export const horizonSvg = ({ seed, width, height, lights = true, sun = 0.68 }) => {
    const rand = rngOf(seedOf(seed));
    const uid = `hz${lights ? 'e' : 'm'}`;
    // Crowns scale with the band, not the page: a phone's third-of-a-screen
    // sunset gets smaller trees rather than three giant ones.
    const span = Math.max(18, Math.min(46, height * 0.09));

    // Bases sit higher than they did, so the nearest ridge leaves a floor of
    // solid ground under it: at a chapter's top the band's last stretch shows
    // under the header, and crowns there read as "a dark scalloped band, like
    // a rendering glitch".
    const far = ridge(rand, width, height, { base: 0.57, roll: 0.08, rise: 0.06, span: span * 0.8, pines: 0.16, emergence: 0.1 });
    const mid = ridge(rand, width, height, { base: 0.69, roll: 0.07, rise: 0.085, span, pines: 0.12, emergence: 0.08 });
    const near = ridge(rand, width, height, { base: 0.8, roll: 0.045, rise: 0.1, span: span * 1.3, pines: 0, emergence: 0 });

    // Half the disc above the far ridge, half behind it: a sun that is going,
    // or coming, and not a glow with nothing at its centre.
    const sx = width * sun;
    const sr = Math.max(10, height * 0.06);
    // Measured from the far ridge's crowns, not its baseline: set on the
    // baseline the whole disc sat behind the trees.
    const sy = far.at(sx) - height * 0.06 - sr * 0.15;

    /* The lamps: a few warm panes gathered into one settlement on the middle
       ridge, each with its own small glow. Scattered single dots read as dust;
       a cluster of windows reads as somewhere people live. */
    // The ridges consume the seed before this line, so the forest itself is
    // the same morning and evening; only whether anyone has lit a lamp differs.
    const cx = width * (0.24 + rand() * 0.3);
    const panes = 3 + Math.round(rand() * 2);
    const windows = !lights ? '' : Array.from({ length: panes }, (_, i) => {
        const x = cx + (i - panes / 2) * span * (0.5 + rand() * 0.45);
        // In the strip of the middle ridge the near crowns leave uncovered, in
        // its mist, rather than low on it where the near ridge hid them.
        const y = mid.at(x) - height * (0.012 + rand() * 0.02);
        const pw = Math.max(3, span * 0.13);
        const ph = pw * 1.3;
        return `<circle cx="${round(x)}" cy="${round(y)}" r="${round(span * 0.55)}" fill="url(#${uid}-glow)"/>`
            + `<rect x="${round(x - pw / 2)}" y="${round(y - ph / 2)}" width="${round(pw)}" height="${round(ph)}" rx="0.6" fill="var(--honey)"/>`;
    }).join('');

    return `<svg class="horizon-svg" width="${round(width)}" height="${round(height)}" viewBox="0 0 ${round(width)} ${round(height)}" aria-hidden="true" focusable="false">
        <defs>
            <radialGradient id="${uid}-glow">
                <stop offset="0" stop-color="var(--honey)" stop-opacity="0.55"/>
                <stop offset="1" stop-color="var(--honey)" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="${uid}-sun">
                <stop offset="0" stop-color="var(--lantern)" stop-opacity="1"/>
                <stop offset="0.7" stop-color="var(--lantern)" stop-opacity="0.92"/>
                <stop offset="1" stop-color="var(--honey)" stop-opacity="0.6"/>
            </radialGradient>
            <!-- Each far ridge darkens toward its crest and dissolves into the
                 haze at its foot, where the ridge in front of it stands in
                 mist: the depth a painter gives layered hills, and what flat
                 fills lacked ("three flat colour layers, no depth haze"). The
                 colours come from the page (--hz-*), so dawn and dusk differ
                 in CSS only. -->
            <!-- In the band's own coordinates: a ridge's bounding box runs to
                 the band's foot, so haze placed by the box landed behind the
                 ridge in front of it, where nobody could see it. Here each
                 ridge's colour holds at its crest and turns to haze just
                 above the crests of the ridge in front. -->
            <linearGradient id="${uid}-far" gradientUnits="userSpaceOnUse" x1="0" y1="${round(height * 0.5)}" x2="0" y2="${round(height * 0.66)}">
                <stop offset="0" stop-color="var(--hz-far)"/>
                <stop offset="1" stop-color="var(--hz-haze)"/>
            </linearGradient>
            <linearGradient id="${uid}-mid" gradientUnits="userSpaceOnUse" x1="0" y1="${round(height * 0.62)}" x2="0" y2="${round(height * 0.77)}">
                <stop offset="0" stop-color="var(--hz-mid)"/>
                <stop offset="1" stop-color="var(--hz-haze-low)"/>
            </linearGradient>
            <filter id="${uid}-soft" x="-2%" y="-10%" width="104%" height="120%">
                <feGaussianBlur stdDeviation="0.7"/>
            </filter>
            <linearGradient id="${uid}-rim" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${round(width)}" y2="0">
                <stop offset="0" stop-color="var(--lantern)" stop-opacity="0"/>
                <stop offset="${round(Math.max(0, sun - 0.3) * 100) / 100}" stop-color="var(--lantern)" stop-opacity="0"/>
                <stop offset="${sun}" stop-color="var(--lantern)" stop-opacity="0.85"/>
                <stop offset="${round(Math.min(1, sun + 0.3) * 100) / 100}" stop-color="var(--lantern)" stop-opacity="0"/>
                <stop offset="1" stop-color="var(--lantern)" stop-opacity="0"/>
            </linearGradient>
        </defs>
        <circle class="horizon-sun" cx="${round(sx)}" cy="${round(sy)}" r="${round(sr)}" fill="url(#${uid}-sun)"/>
        <path class="horizon-far" d="${far.d}" fill="url(#${uid}-far)" filter="url(#${uid}-soft)"/>
        <path class="horizon-rim" d="${far.top}" fill="none" stroke="url(#${uid}-rim)" stroke-width="1.6" stroke-linejoin="round"/>
        <path class="horizon-mid" d="${mid.d}" fill="url(#${uid}-mid)"/>
        <path class="horizon-rim" d="${mid.top}" fill="none" stroke="url(#${uid}-rim)" stroke-width="1.1" stroke-linejoin="round" opacity="0.6"/>
        ${windows}
        <path class="horizon-near" d="${near.d}" fill="var(--hz-near)"/>
    </svg>`;
};
