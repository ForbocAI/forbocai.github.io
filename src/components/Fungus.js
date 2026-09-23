/**
 * Fungus
 *
 * The grown light's source. Each night chapter carries a colony — an emerald
 * tint at one edge of the page (colonies.css) — and both design judges found
 * what that is without anything to cast it: "night is only a gradient; the
 * only glows are sourceless", "moss light never shows as a light source". A
 * glow at the edge of a forest at night is foxfire: bracket fungus on a trunk,
 * lit from its own gills. So the page's edge is the trunk, and the fungus
 * grows out of it where the colony is, shelves stacked and overlapping, each
 * with a lit underside and a faint pool of its own light.
 *
 * Seeded by the chapter, like the plants, so each colony is its own growth.
 * Drawn growing rightward from x=0; the right-hand colonies are mirrored in CSS.
 */
import { seedOf, rngOf, round } from './stem/seed.js';

/* One shelf: a cap bulging out from the trunk, its underside a flatter arc,
   and the gills along that underside lit. */
const shelf = (x, y, w, h, rings = [0.72, 0.46]) => {
    const cap = `M${round(x)},${round(y - h * 0.62)}`
        + `C${round(x + w * 0.5)},${round(y - h * 1.18)} ${round(x + w * 1.06)},${round(y - h * 0.62)} ${round(x + w)},${round(y)}`
        + `C${round(x + w * 0.74)},${round(y + h * 0.14)} ${round(x + w * 0.3)},${round(y + h * 0.2)} ${round(x)},${round(y + h * 0.14)}Z`;
    const gills = `M${round(x + w)},${round(y)}C${round(x + w * 0.74)},${round(y + h * 0.14)} ${round(x + w * 0.3)},${round(y + h * 0.2)} ${round(x)},${round(y + h * 0.14)}`;
    // Growth bands: the cap's own outline at earlier sizes, drawn from where
    // it meets the bark, the rings a bracket lays down as it grows.
    const bands = rings.map((f) => `M${round(x)},${round(y - h * 0.62 * f)}`
        + `C${round(x + w * 0.5 * f)},${round(y - h * 1.18 * f)} ${round(x + w * 1.06 * f)},${round(y - h * 0.62 * f)} ${round(x + w * f)},${round(y)}`).join('');
    return { cap, gills, bands };
};

/* The bark it grows from: a ragged sliver at the page's edge, so the shelves
   stand on a trunk and do not float. */
const bark = (rand, height) => {
    const n = 16;
    const pts = Array.from({ length: n + 1 }, (_, i) => `${round(4 + rand() * 6)},${round((i / n) * height)}`);
    return `M-2,${round(height * 0.04)}L${pts.slice(1, -1).join('L')}L-2,${round(height * 0.96)}Z`;
};

/**
 * @param {object} spec
 * @param {string} spec.seed   the chapter's id
 * @param {number} spec.width  how far from the edge it may grow, in px
 * @param {number} spec.height the stretch of edge it grows along, in px
 * @returns {string} SVG markup
 */
export const fungusSvg = ({ seed, width, height }) => {
    const rand = rngOf(seedOf(`fungus-${seed}`));
    const uid = `fg-${seed.replace(/[^a-z0-9]/gi, '')}`;
    const count = 3 + Math.floor(rand() * 4);
    // Shelves climb the trunk in a loose tier, the largest low, each smaller
    // one above it and reaching less far.
    // Tiers overlap closely, as brackets do, and each sits a little out from
    // or in to the bark rather than in one column.
    let y = height * (0.74 + rand() * 0.1);
    const shelves = Array.from({ length: count }, (_, i) => {
        const k = 1 - i / (count + 1);
        // Now and then a young shelf, much smaller, between the grown ones:
        // a clump of equals was "five near-identical half-discs".
        const young = rand() < 0.3 ? 0.35 + rand() * 0.2 : 1;
        const w = width * (0.4 + rand() * 0.5) * (0.55 + k * 0.45) * young;
        const h = w * (0.44 + rand() * 0.26);
        const x = 2 + rand() * width * 0.08;
        const rings = Array.from({ length: 1 + Math.floor(rand() * 3) }, (_, r) => 0.82 - r * 0.22 - rand() * 0.08);
        // Each tilts a little on its attachment, up or down.
        const tilt = (rand() - 0.5) * 16;
        const s = { ...shelf(x, y, w, h, rings), w, h, y, x, tilt };
        y -= h * (0.38 + rand() * 0.5);
        return s;
    }).filter((s) => s.y > s.h).reverse();
    const pools = shelves.map((s) => `<ellipse cx="${round(s.x + s.w * 0.45)}" cy="${round(s.y + s.h * 0.55)}" rx="${round(s.w * 0.9)}" ry="${round(s.h * 1.1)}" fill="url(#${uid}-pool)"/>`).join('');
    // Drawn top down, so each lower, larger shelf overlaps the one above it.
    const caps = shelves.map((s) => `<g transform="rotate(${round(s.tilt)} ${round(s.x)} ${round(s.y)})"><path d="${s.cap}" fill="url(#${uid}-cap)"/>`
        + `<path d="${s.bands}" fill="none" stroke="var(--fungus-band)" stroke-width="0.9" opacity="0.5"/>`
        + `<path d="${s.gills}" fill="none" stroke="var(--fungus-lit)" stroke-width="${round(Math.max(1, s.h * 0.07))}" stroke-linecap="round"/></g>`).join('');
    // Moss where the shelves meet the bark, and a few spores in their light.
    const moss = Array.from({ length: 5 + Math.floor(rand() * 5) }, () => {
        const my = height * (0.2 + rand() * 0.75);
        const r = 2 + rand() * 5;
        return `<ellipse cx="${round(r * 0.4)}" cy="${round(my)}" rx="${round(r)}" ry="${round(r * (1.3 + rand()))}" fill="var(--fungus-moss)"/>`;
    }).join('');
    const spores = Array.from({ length: 4 + Math.floor(rand() * 5) }, () => {
        const s = shelves[Math.floor(rand() * shelves.length)];
        return s ? `<circle cx="${round(s.x + s.w * (0.2 + rand() * 0.9))}" cy="${round(s.y + s.h * (0.5 + rand() * 1.4))}" r="${round(0.6 + rand() * 0.9)}" fill="var(--fungus-lit)" opacity="${round(0.35 + rand() * 0.45)}"/>` : '';
    }).join('');
    return `<svg class="fungus-svg" width="${round(width)}" height="${round(height)}" viewBox="0 0 ${round(width)} ${round(height)}" aria-hidden="true" focusable="false">
        <defs>
            <radialGradient id="${uid}-pool">
                <stop offset="0" stop-color="var(--fungus-lit)" stop-opacity="0.2"/>
                <stop offset="0.5" stop-color="var(--fungus-lit)" stop-opacity="0.06"/>
                <stop offset="1" stop-color="var(--fungus-lit)" stop-opacity="0"/>
            </radialGradient>
            <!-- Dark above, where nothing lights the cap, and warming to the
                 lit edge below. -->
            <linearGradient id="${uid}-cap" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="var(--fungus-cap)"/>
                <stop offset="0.8" stop-color="var(--fungus-cap-lit)"/>
            </linearGradient>
            <!-- The trunk's edge, darkening into the page's edge and fading
                 out along it: solid, it read as "a black bar with a
                 ruler-straight edge". -->
            <linearGradient id="${uid}-bark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="var(--fungus-bark)" stop-opacity="0"/>
                <stop offset="0.3" stop-color="var(--fungus-bark)" stop-opacity="0.75"/>
                <stop offset="0.7" stop-color="var(--fungus-bark)" stop-opacity="0.75"/>
                <stop offset="1" stop-color="var(--fungus-bark)" stop-opacity="0"/>
            </linearGradient>
        </defs>
        ${pools}
        <path d="${bark(rand, height)}" fill="url(#${uid}-bark)"/>
        ${moss}
        ${caps}
        ${spores}
    </svg>`;
};
