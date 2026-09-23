/**
 * Settlement
 *
 * The houses in the sunset's clearing. Round twenty-seven read the lamps drawn
 * as loose panes on the ridge as "three blurry blobs — no walls, roofs or
 * chimneys", with "a dead dark slab" of ground under the trees. So the houses
 * stand on that ground, in a clearing the nearest ridge leaves them: walls,
 * pitched roofs with eaves, a chimney, now and then a lean-to, all in the
 * ground's own dusk colour so they read as silhouettes against the misted
 * ridge behind. The panes are cut into the walls, and the light they give
 * falls on the ground in front, which is where the slab gets its depth.
 */
import { round } from '../stem/seed.js';

/* One house: the wall, the roof's two slopes overhanging it, a chimney on
   one slope, and sometimes a lower wing on one side. */
const house = (rand, x, g, w) => {
    const wh = w * (0.5 + rand() * 0.16);
    const rh = w * (0.4 + rand() * 0.2);
    const eave = w * 0.08;
    const top = g - wh;
    const apex = top - rh;
    const xm = x + w * (0.44 + rand() * 0.12);
    // The chimney rises from whichever slope it stands on, to just past the ridge.
    const left = rand() < 0.5;
    const cw = w * 0.1;
    const cxs = left ? x + w * 0.2 : x + w * 0.7;
    const slope = left ? (cxs - (x - eave)) / (xm - (x - eave)) : 1 - (cxs + cw - xm) / (x + w + eave - xm);
    const cy = top - rh * slope;
    const chimney = `M${round(cxs)},${round(cy + rh * 0.12)}L${round(cxs)},${round(apex + rh * 0.18)}`
        + `L${round(cxs + cw)},${round(apex + rh * 0.18)}L${round(cxs + cw)},${round(cy + rh * 0.12)}Z`;
    const body = `M${round(x)},${round(g + 2)}L${round(x)},${round(top)}L${round(x - eave)},${round(top)}`
        + `L${round(xm)},${round(apex)}L${round(x + w + eave)},${round(top)}L${round(x + w)},${round(top)}`
        + `L${round(x + w)},${round(g + 2)}Z`;
    // A lean-to against one wall: a lower roof, one slope only.
    const wing = rand() < 0.4 ? (() => {
        const ww = w * (0.35 + rand() * 0.2);
        const wx = rand() < 0.5 ? x - ww : x + w;
        const high = top + wh * 0.25;
        const low = top + wh * 0.5;
        const [hx, lx] = wx < x ? [x, wx] : [x + w, wx + ww];
        return `M${round(Math.min(hx, lx))},${round(g + 2)}L${round(lx)},${round(g + 2)}L${round(lx)},${round(low)}`
            + `L${round(hx)},${round(high)}L${round(hx)},${round(g + 2)}Z`;
    })() : '';
    // One or two lit panes low in the wall, sometimes one in the gable.
    const pw = Math.max(2.4, w * 0.13);
    const ph = pw * 1.25;
    const count = 1 + (rand() < 0.5 ? 1 : 0);
    const panes = Array.from({ length: count }, (_, k) => ({
        x: x + w * (count === 1 ? 0.3 + rand() * 0.35 : 0.22 + k * 0.42),
        y: top + wh * (0.3 + rand() * 0.1),
        w: pw,
        h: ph,
    }));
    if (rand() < 0.35) panes.push({ x: xm - pw * 0.4, y: top - rh * 0.45, w: pw * 0.8, h: pw * 0.8 });
    return { d: body + chimney + wing, panes };
};

/**
 * @param {() => number} rand the treeline's own stream
 * @param {{ at: (x: number) => number }} near the ridge the houses stand on
 * @param {object} spec
 * @param {number} spec.cx     the clearing's centre
 * @param {number} spec.homes  how many houses; 0 draws nothing
 * @param {number} spec.span   the treeline's crown size, which sizes the houses
 * @param {number} spec.height the band's height
 * @param {string} spec.uid    the band's gradient prefix
 * @returns {string} SVG markup
 */
export const settlement = (rand, near, { cx, homes, span, height, uid }) => {
    if (!homes) return '';
    const sizes = Array.from({ length: homes }, () => span * (1.05 + rand() * 0.6));
    const gaps = sizes.map(() => span * (0.25 + rand() * 0.45));
    const total = sizes.reduce((a, w, i) => a + w + (i ? gaps[i] : 0), 0);
    let x = cx - total / 2;
    const built = sizes.map((w, i) => {
        if (i) x += gaps[i];
        // Sunk a little into the ground, and not all on one line.
        const g = near.at(x + w / 2) + height * (0.008 + rand() * 0.02);
        const h = house(rand, x, g, w);
        x += w;
        return { ...h, g };
    });
    const floor = built.reduce((a, h) => a + h.g, 0) / built.length;
    const pool = `<ellipse cx="${round(cx)}" cy="${round(floor + height * 0.05)}" rx="${round(total * 0.75)}" ry="${round(height * 0.09)}" fill="url(#${uid}-pool)"/>`;
    const shapes = built.map((h) => `<path d="${h.d}" fill="var(--hz-near)"/>`).join('');
    const panes = built.flatMap((h) => h.panes).map((p) =>
        `<circle cx="${round(p.x + p.w / 2)}" cy="${round(p.y + p.h / 2)}" r="${round(span * 0.28)}" fill="url(#${uid}-glow)"/>`
        + `<rect x="${round(p.x)}" y="${round(p.y)}" width="${round(p.w)}" height="${round(p.h)}" rx="0.4" fill="var(--honey)"/>`).join('');
    return pool + shapes + panes;
};
