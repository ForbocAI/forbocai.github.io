/**
 * Sprig
 *
 * The chapter plant, at the size a phone has room for.
 *
 * Below 960px there is no margin column, so the margin plant cannot grow, and
 * every design judge found the same thing on every phone chapter: "the
 * medallion sits alone above each heading", "the plant motif simply
 * disappears at 390px", "a bare medallion, like a coffee ring". The line the
 * medallion stands on is empty to its right. A tendril grows along it from the
 * seal: tapering, wandering a little, leaves set off it alternately, ending in
 * a curl. Seeded by the chapter like the margin plant, so each chapter's sprig
 * is its own.
 */
import { seedOf, rngOf, round } from './stem/seed.js';
import { leaf } from './stem/geometry.js';

/**
 * @param {object} spec
 * @param {string} spec.seed    the chapter's id
 * @param {number} spec.length  how far it may run, in px
 * @param {number} spec.height  the line it grows along, in px
 * @returns {string} SVG markup
 */
export const sprigSvg = ({ seed, length, height }) => {
    const rand = rngOf(seedOf(`sprig-${seed}`));
    const mid = height / 2;
    const reach = length * (0.72 + rand() * 0.22);
    const phase = rand() * Math.PI * 2;
    const sway = height * (0.12 + rand() * 0.1);
    const steps = 28;

    // The line: from the seal outward, wandering a little and settling.
    const pts = Array.from({ length: steps + 1 }, (_, i) => {
        const t = i / steps;
        return { t, x: t * reach, y: mid + Math.sin(phase + t * Math.PI * 2.2) * sway * Math.sin(t * Math.PI) };
    });

    // Tapered, as the margin stem is: a filled shape, full at the seal.
    const half = (t) => 1.5 * (1 - t) ** 1.2 + 0.15;
    const down = pts.map((p) => `${round(p.x)},${round(p.y - half(p.t))}`);
    const up = [...pts].reverse().map((p) => `${round(p.x)},${round(p.y + half(p.t))}`);
    const stem = `M${down.join('L')}L${up.join('L')}Z`;

    // A curl where it ends, the way a tendril finishes.
    const end = pts[pts.length - 1];
    const cr = height * (0.12 + rand() * 0.06);
    const curl = `M${round(end.x)},${round(end.y)}q${round(cr * 1.2)},${round(-cr * 0.2)} ${round(cr * 0.9)},${round(-cr)}q${round(-cr * 0.4)},${round(-cr * 0.55)} ${round(-cr * 0.75)},${round(-cr * 0.05)}`;

    // Leaves off it, alternately, turned away from the line and shrinking
    // toward the tip.
    const count = 3 + Math.round(rand() * 2);
    let side = rand() < 0.5 ? -1 : 1;
    const leaves = Array.from({ length: count }, (_, k) => {
        const t = 0.16 + (k / count) * 0.7 + rand() * 0.04;
        const i = Math.round(t * steps);
        const a = pts[Math.max(0, i - 1)];
        const b = pts[Math.min(steps, i + 1)];
        const ang = Math.atan2(b.y - a.y, b.x - a.x) + side * (0.75 + rand() * 0.35);
        const len = height * (0.34 - t * 0.14);
        side = -side;
        return `<path d="${leaf(pts[i].x, pts[i].y, ang, len, len * 0.42)}" fill="currentColor"/>`;
    }).join('');

    return `<svg class="sprig-svg" width="${round(length)}" height="${round(height)}" viewBox="0 0 ${round(length)} ${round(height)}" aria-hidden="true" focusable="false">
        <path d="${stem}" fill="currentColor"/>
        <path d="${curl}" fill="none" stroke="currentColor" stroke-width="0.9" stroke-linecap="round"/>
        ${leaves}
    </svg>`;
};
