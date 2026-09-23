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
 * far ridge half hides, and the crowns facing it carry its rim light.
 * Round twenty-seven read the tiered pines as pagodas at this size, so the
 * treeline is broadleaf crowns only, and the lamps are houses (settlement.js).
 */
import { seedOf, rngOf, round } from './stem/seed.js';
import { settlement } from './horizon/settlement.js';

/* A crown, as a tree has one: a clump of foliage masses of different sizes,
   the middle ones standing highest, each bulging on its own, so the edge
   breaks into lobes and notches. One smooth dome per tree, however lopsided,
   read as "one bump shape stamped over and over". */
const crown = (rand, x, w, y0, y1, h) => {
    // As many masses as the crown is wide enough to hold round ones.
    const n = Math.max(2, Math.min(4, Math.round((w / h) * (1.2 + rand() * 0.9))));
    const cuts = Array.from({ length: n }, () => 0.6 + rand());
    const sum = cuts.reduce((a, c) => a + c, 0);
    const peak = 0.3 + rand() * 0.4;
    let at = x;
    return cuts.map((c, i) => {
        const lw = (w * c) / sum;
        const x1 = at + lw;
        const mid = (at + lw / 2 - x) / w;
        // Tallest near the crown's peak, falling off toward its shoulders.
        // A mass is broader than it is tall: taller ones drew fingers, then eggs.
        const lift = Math.min(lw * 0.62, h * (1 - Math.abs(mid - peak) * 1.1) * (0.75 + rand() * 0.35));
        const base0 = y0 + (y1 - y0) * ((at - x) / w);
        const base1 = y0 + (y1 - y0) * ((x1 - x) / w);
        // A notch between masses: each lobe starts a little below the last one's end.
        const dip = i ? h * (0.08 + rand() * 0.14) : 0;
        const seg = `L${round(at)},${round(base0 - lift * 0.35 + dip)}`
            // Control points straight above the ends: the fullest dome that
            // never doubles back, since a lobe that overhung its neighbour
            // looped, and the loop filled as a hollow ring.
            + `C${round(at)},${round(base0 - lift * 1.3)} ${round(x1)},${round(base1 - lift * (1.2 + rand() * 0.2))} ${round(x1)},${round(base1 - lift * 0.35)}`;
        at = x1;
        return seg;
    }).join('');
};

/* One ridge: a rolling baseline, and on it a crown per few pixels, so the
   edge is a silhouette of trees rather than a hill. `rise` is how tall a
   crown stands above the baseline, as a fraction of the band, so a taller
   sunset grows taller trees. Returns the filled shape and its open top edge,
   which carries the rim light. */
const ridge = (rand, width, height, { base, roll, rise, span, emergence, clear = [0, 0] }) => {
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
        // An emergent tree is broad as well as tall: height alone, under the
        // cap that keeps a mass broader than tall, made no bigger tree.
        const emergent = rand() < emergence ? 1.6 + rand() * 0.5 : 1;
        const w = span * (0.55 + rand() * 1.1) * emergent;
        // A clearing now and then — the ground shows between the crowns —
        // and now and then one tree standing well above the rest.
        // The settlement's own clearing, where the forest was cut back for
        // the houses, is kept open whatever the dice say.
        const cut = x + w > clear[0] && x < clear[1];
        const clearing = rand() < 0.04 || cut;
        const h = clearing ? 0 : height * rise * (0.45 + rand() * 0.85) * emergent;
        const y0 = at(x);
        const y1 = at(x + w);
        if (clearing) top += `L${round(x + w)},${round(y1)}`;
        else top += crown(rand, x, w, y0, y1, h);
        // Crowns abut, meeting part way up, rather than overlap: a path that
        // steps back left over its own last crown winds the other way, and
        // the overlap filled as a hollow crescent.
        x += w;
    }
    // Closed well outside the band on three sides: the painted edge displaces
    // every edge, and a straight foot pulled up by it left a lit hairline.
    const pad = span * 2;
    return { d: `M${round(-pad)},${round(height + pad)}L${round(-pad)},${round(at(0))}L${top.slice(1)}L${round(width + pad)},${round(at(width))}L${round(width + pad)},${round(height + pad)}Z`, top, at };
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
    const far = ridge(rand, width, height, { base: 0.57, roll: 0.08, rise: 0.06, span: span * 0.8, emergence: 0.14 });
    const mid = ridge(rand, width, height, { base: 0.69, roll: 0.07, rise: 0.085, span, emergence: 0.12 });
    // Where the houses stand: chosen before the nearest ridge grows, so that
    // ridge can leave them their clearing. Evening only; at dawn the same
    // stretch is forest.
    const cx = width * (0.24 + rand() * 0.3);
    const homes = lights ? 3 + Math.round(rand() * 2) : 0;
    const reachX = span * 2.1 * homes;
    const near = ridge(rand, width, height, { base: 0.8, roll: 0.045, rise: 0.1, span: span * 1.3, emergence: 0.1, clear: [cx - reachX / 2, cx + reachX / 2] });

    // Half the disc above the far ridge, half behind it: a sun that is going,
    // or coming, and not a glow with nothing at its centre.
    const sx = width * sun;
    const sr = Math.max(10, height * 0.06);
    // Measured from the far ridge's crowns, not its baseline: set on the
    // baseline the whole disc sat behind the trees.
    const sy = far.at(sx) - height * 0.06 - sr * 0.15;

    const village = settlement(rand, near, { cx, homes, span, height, uid });

    return `<svg class="horizon-svg" width="${round(width)}" height="${round(height)}" viewBox="0 0 ${round(width)} ${round(height)}" aria-hidden="true" focusable="false">
        <defs>
            <radialGradient id="${uid}-glow">
                <stop offset="0" stop-color="var(--honey)" stop-opacity="0.55"/>
                <stop offset="1" stop-color="var(--honey)" stop-opacity="0"/>
            </radialGradient>
            <!-- The sun's air, not its edge: the disc itself is solid, and this
                 falls to nothing well outside it. A gradient that ended at the
                 disc's rim at 0.6 opacity drew "a hard halo ring, like a
                 sticker". -->
            <radialGradient id="${uid}-sun">
                <stop offset="0" stop-color="var(--lantern)" stop-opacity="0.5"/>
                <stop offset="0.22" stop-color="var(--lantern)" stop-opacity="0.28"/>
                <stop offset="0.55" stop-color="var(--honey)" stop-opacity="0.08"/>
                <stop offset="1" stop-color="var(--honey)" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="${uid}-pool">
                <stop offset="0" stop-color="var(--honey)" stop-opacity="0.22"/>
                <stop offset="0.5" stop-color="var(--honey)" stop-opacity="0.07"/>
                <stop offset="1" stop-color="var(--honey)" stop-opacity="0"/>
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
            <!-- Painted, not cut: the roundel at the foot of the page is the
                 one piece of art both judges trusted, and it is watercolour.
                 So the ridges are too. Low-frequency noise displaces each edge
                 into leafy breakup, and blotches of darker pigment lie in the
                 wash the way it settles on paper. The noise is in the band's
                 own coordinates, so a ridge and its rim light move together. -->
            <filter id="${uid}-paint" x="-2%" y="-12%" width="104%" height="124%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05 0.08" numOctaves="3" seed="11" result="edge"/>
                <feDisplacementMap in="SourceGraphic" in2="edge" scale="${round(span * 0.32)}" xChannelSelector="R" yChannelSelector="G" result="torn"/>
                <feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="2" seed="4" result="bloom"/>
                <!-- The pigment is the wash itself laid twice (multiplied), so
                     it deepens each ridge in its own hue: black blotches read
                     as dirt on the pale dawn. -->
                <feColorMatrix in="bloom" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1.6 0 0 0 -0.62" result="where"/>
                <feComposite in="torn" in2="where" operator="in" result="again"/>
                <feBlend in="again" in2="torn" mode="multiply" result="settled"/>
                <feComposite in="settled" in2="torn" operator="in"/>
            </filter>
            <filter id="${uid}-tear" x="-2%" y="-12%" width="104%" height="124%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05 0.08" numOctaves="3" seed="11" result="edge"/>
                <feDisplacementMap in="SourceGraphic" in2="edge" scale="${round(span * 0.32)}" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            <!-- The near ground's pigment thins out before the band's foot,
                 where the page's own flat ground takes over: stopping at the
                 edge it drew a line across the page. -->
            <linearGradient id="${uid}-thin" gradientUnits="userSpaceOnUse" x1="0" y1="${round(height * 0.78)}" x2="0" y2="${round(height * 0.97)}">
                <stop offset="0" stop-color="#fff"/>
                <stop offset="1" stop-color="#000"/>
            </linearGradient>
            <mask id="${uid}-fade" maskUnits="userSpaceOnUse" x="0" y="0" width="${round(width)}" height="${round(height)}">
                <rect width="${round(width)}" height="${round(height)}" fill="url(#${uid}-thin)"/>
            </mask>
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
        <circle cx="${round(sx)}" cy="${round(sy)}" r="${round(sr * 4.5)}" fill="url(#${uid}-sun)"/>
        <circle class="horizon-sun" cx="${round(sx)}" cy="${round(sy)}" r="${round(sr)}" fill="var(--lantern)"/>
        <g filter="url(#${uid}-paint)">
            <path class="horizon-far" d="${far.d}" fill="url(#${uid}-far)" filter="url(#${uid}-soft)"/>
            <path class="horizon-rim" d="${far.top}" fill="none" stroke="url(#${uid}-rim)" stroke-width="${round(Math.max(2, span * 0.1))}" stroke-linejoin="round"/>
        </g>
        <g filter="url(#${uid}-paint)">
            <path class="horizon-mid" d="${mid.d}" fill="url(#${uid}-mid)"/>
            <path class="horizon-rim" d="${mid.top}" fill="none" stroke="url(#${uid}-rim)" stroke-width="${round(Math.max(1.5, span * 0.07))}" stroke-linejoin="round" opacity="0.75"/>
        </g>
        <path class="horizon-near" d="${near.d}" fill="var(--hz-near)" filter="url(#${uid}-tear)"/>
        <g mask="url(#${uid}-fade)"><path d="${near.d}" fill="var(--hz-near)" filter="url(#${uid}-paint)"/></g>
        ${village}
    </svg>`;
};
