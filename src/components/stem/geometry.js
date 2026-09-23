/**
 * The shapes a plant is drawn from: its leaning centreline, the tapered stem
 * built on it, a branch and a leaf. Pure functions of their arguments.
 * Split out of Stem.js, which had reached the 300-line ceiling.
 */
import { round } from './seed.js';

/**
 * The centreline.
 *
 * A drawn stem is never plumb. It leans by a few pixels over its whole length
 * and corrects, which is the entire difference between a plant and a border-
 * left. The lean is a fraction of the column, not a pixel count, so a narrow
 * column gets a subtle one and a wide column a generous one without a number
 * being chosen for either.
 */
export const centreline = (rand, x0, height, sway) => {
    // Fine enough to be a curve. At one segment per 120px a short chapter's
    // stem was six straight pieces, and the joints read as kinks: "a straight,
    // kinked polyline that reads as a crack", "the stem zigzags into an L like
    // a snapped wire". A stem bends continuously; so does this, at every 26px.
    const steps = Math.max(24, Math.round(height / 26));
    const phase = rand() * Math.PI * 2;
    const turns = 1.1 + rand() * 1.4;
    return Array.from({ length: steps + 1 }, (_, i) => {
        const t = i / steps;
        return {
            t,
            y: round(t * height),
            // Damped, so the stem is at its most wayward in the middle and
            // arrives straight — a stem is held at the base and tapers to
            // nothing, so it cannot swing at either end.
            //
            // And it leans RIGHT, into the empty column, twice as far as it
            // leans left. Symmetric, a 52px swing carried the trunk 40px left
            // of its own column: a reviewer measured it riding a card's border
            // at x=169 and running to within 8px of the screen edge on a
            // tablet. Left of the stem is the page's edge; right of it is the
            // ground the plant is there to fill.
            x: round(x0 + ((Math.sin(phase + t * Math.PI * turns) + 0.35) / 1.35) * sway * Math.sin(t * Math.PI)),
        };
    });
};

/** The x of the centreline at an arbitrary height, by linear interpolation. */
export const xAt = (line, y) => {
    const after = line.findIndex((p) => p.y >= y);
    if (after <= 0) return line[0].x;
    const a = line[after - 1];
    const b = line[after];
    const k = (y - a.y) / Math.max(1, b.y - a.y);
    return a.x + (b.x - a.x) * k;
};

/**
 * The stem as a filled shape rather than a stroked line, because a stroke
 * cannot taper. Down one side at a falling half-width and back up the other:
 * full weight where the chapter starts, nothing where it ends, which is the
 * venation rule the rest of the page already keeps.
 */
export const stemPath = (line, height, base) => {
    const halfAt = (t) => base * (1 - t) ** 1.35 + 0.12;
    const down = line.map((p) => `${round(p.x - halfAt(p.t))},${p.y}`);
    const up = [...line].reverse().map((p) => `${round(p.x + halfAt(p.t))},${p.y}`);
    return `M${down.join('L')}L${up.join('L')}Z`;
};

/**
 * A leaf, drawn along a direction.
 *
 * The first version ended every branch in a filled dot, and a reviewer read the
 * whole drawing correctly for what that grammar is: "a near-horizontal
 * single-weight hairline terminating in a solid filled dot — that is the visual
 * grammar of a leader line, so my eye follows each one looking for the thing it
 * points at, and there is nothing there". Two of the dots landed inside words
 * and were read as an interpunct in the product's own name. A leaf points at
 * nothing and asks to be followed nowhere.
 */
export const leaf = (x, y, ang, len, wid) => {
    const dx = Math.cos(ang);
    const dy = Math.sin(ang);
    const px = -dy;
    const py = dx;
    const tx = round(x + dx * len);
    const ty = round(y + dy * len);
    const m = 0.38;
    const a = `${round(x + dx * len * m + px * wid)},${round(y + dy * len * m + py * wid)}`;
    const b = `${round(x + dx * len * m - px * wid)},${round(y + dy * len * m - py * wid)}`;
    return `M${round(x)},${round(y)}Q${a} ${tx},${ty}Q${b} ${round(x)},${round(y)}Z`;
};

/**
 * A branch, reaching toward the text it marks.
 *
 * It reaches RIGHT — across the empty column, toward the body — because that
 * is the direction the thing it annotates is in, and because that is where the
 * dead ground is. Length varies per branch so the column's right edge is
 * ragged; a set of equal branches would be a bar chart.
 *
 * It also RISES or FALLS by a real amount rather than running level. Level
 * hairlines across a column of text are struck-through text, which is exactly
 * what a reviewer saw: "a hairline runs horizontally through the second line of
 * the title", "a strikethrough through a clickable accordion label".
 */
export const branch = (rand, x, y, reach, droop, curl = 0.42) => {
    // A rising branch climbs as it leaves the stem and eases outward toward
    // its tip, the control above its end; with the control below, it dipped
    // first and hooked up, a swag rather than a shoot. A falling one arches
    // over, as a weeping branch does.
    const rising = droop < 0;
    const cx = x + reach * curl * (rising ? 0.55 : 1);
    const cy = rising ? y + droop * 1.25 : y - droop * 0.5;
    const ex = round(x + reach);
    const ey = round(y + droop);
    const path = `M${round(x)},${round(y)}Q${round(cx)},${round(cy)} ${ex},${ey}`;
    const ang = Math.atan2(ey - cy, ex - cx);
    // A point and its heading along the curve, for leaves set along it.
    const along = (t) => {
        const u = 1 - t;
        return {
            x: u * u * x + 2 * u * t * cx + t * t * ex,
            y: u * u * y + 2 * u * t * cy + t * t * ey,
            ang: Math.atan2(2 * u * (cy - y) + 2 * t * (ey - cy), 2 * u * (cx - x) + 2 * t * (ex - cx)),
        };
    };
    // One or two filaments off the branch, which is what makes it read as
    // something grown rather than a leader line on a diagram.
    const hairs = Array.from({ length: 1 + Math.round(rand()) }, () => {
        const t = 0.45 + rand() * 0.4;
        const hx = round(x + reach * t);
        const hy = round(y + droop * t - 1);
        const len = round(reach * (0.06 + rand() * 0.1));
        const lift = round(-3 - rand() * 7);
        return `M${hx},${hy}q${round(len * 0.5)},${round(lift * 0.7)} ${len},${lift}`;
    });
    return { path, hairs, ang, along, tip: { x: ex, y: ey } };
};

/**
 * A branch as a tapered shape rather than a stroke of one weight: full where
 * it leaves the trunk and thinning to its tip, the way the trunk itself does.
 * One weight end to end was what made each branch "a wire ending in a leaf".
 */
export const taper = (b, w0, w1 = 0.25) => {
    const n = 14;
    const pts = Array.from({ length: n + 1 }, (_, i) => {
        const t = i / n;
        const p = b.along(t);
        const hw = (w0 * (1 - t) + w1 * t) / 2;
        return { p, nx: -Math.sin(p.ang) * hw, ny: Math.cos(p.ang) * hw };
    });
    const a = pts.map(({ p, nx, ny }) => `${round(p.x + nx)},${round(p.y + ny)}`);
    const z = [...pts].reverse().map(({ p, nx, ny }) => `${round(p.x - nx)},${round(p.y - ny)}`);
    return `M${a.join('L')}L${z.join('L')}Z`;
};

/**
 * A tendril: the tip of a shoot that found nothing to hold, winding into a
 * loose spiral turned the way it was already bending.
 */
export const tendril = (x, y, ang, r, dir) => {
    const turns = 1.4;
    const n = 20;
    const pts = Array.from({ length: n + 1 }, (_, i) => {
        const t = i / n;
        const a = ang + dir * t * turns * Math.PI * 2;
        const rr = r * (1 - t * 0.8);
        return `${round(x + Math.cos(ang) * r * t * 1.2 + Math.cos(a + dir * Math.PI / 2) * rr - Math.cos(ang + dir * Math.PI / 2) * r)},${round(y + Math.sin(ang) * r * t * 1.2 + Math.sin(a + dir * Math.PI / 2) * rr - Math.sin(ang + dir * Math.PI / 2) * r)}`;
    });
    return `M${round(x)},${round(y)}L${pts.join('L')}`;
};
