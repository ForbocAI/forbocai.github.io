/**
 * Read vine
 *
 * How far down the descent a reader is, grown along the header's lower edge.
 * It was a 2px rule that filled, and at night a design judge read it as "a
 * full-width 1px light line — a hard mechanical edge on an organic page" and
 * "a thin line, not a vein". So it is a tendril: tapering from its root at the
 * left, wandering a little, and putting out a leaf at the start of each
 * chapter, so the chapters passed are leaves already grown. navCurrent.js
 * reveals it to the reader's depth; this only draws it at full length.
 */
import { round } from './stem/seed.js';
import { leaf } from './stem/geometry.js';

/**
 * @param {object} spec
 * @param {number} spec.width   the header's width, in px
 * @param {number} spec.height  the band it grows in, in px
 * @param {number[]} spec.nodes where each chapter starts, as fractions of the run
 * @returns {string} SVG markup
 */
export const vineSvg = ({ width, height, nodes }) => {
    const mid = height / 2;
    const steps = Math.max(24, Math.round(width / 24));
    // Two slow waves, so it wanders rather than oscillates.
    const y = (t) => mid + Math.sin(t * Math.PI * 7.3) * height * 0.09 + Math.sin(1.7 + t * Math.PI * 17.9) * height * 0.04;
    const half = (t) => 1.15 * (1 - t) + 0.35;
    const pts = Array.from({ length: steps + 1 }, (_, i) => i / steps);
    const down = pts.map((t) => `${round(t * width)},${round(y(t) - half(t))}`);
    const up = [...pts].reverse().map((t) => `${round(t * width)},${round(y(t) + half(t))}`);
    const stem = `M${down.join('L')}L${up.join('L')}Z`;
    // A leaf at each chapter, turned alternately into the bar and out of it,
    // lying along the stem rather than across it (across, they read as a
    // ruler's ticks), and shrinking a little along the run as a shoot's do.
    const leaves = nodes.map((f, k) => {
        const x = f * width;
        const side = k % 2 ? 1 : -1;
        const len = height * (0.62 - f * 0.14);
        return `<path d="${leaf(x, y(f), side * 0.62, len, len * 0.34)}" fill="url(#read-vine)"/>`;
    }).join('');
    return `<svg width="${round(width)}" height="${round(height)}" viewBox="0 0 ${round(width)} ${round(height)}" aria-hidden="true" focusable="false">
        <defs>
            <linearGradient id="read-vine" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${round(width)}" y2="0">
                <stop offset="0" stop-color="var(--vine-root)"/>
                <stop offset="0.62" stop-color="var(--vine-mid)"/>
                <stop offset="1" stop-color="var(--vine-tip)"/>
            </linearGradient>
        </defs>
        <path d="${stem}" fill="url(#read-vine)"/>
        ${leaves}
    </svg>`;
};
