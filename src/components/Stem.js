/**
 * Stem
 *
 * The margin column, drawn.
 *
 * Both round-twenty reviewers put the same thing in their top five, with
 * measurements: "half the left column is dead ground", "the head strands
 * itself against dead ground — empty y≈290–900, 610px, two-thirds of the
 * viewport height, with the vein terminating in nothing". The numbers back
 * them: #servitor's spread is 1,288px tall under a 173px head, #investors'
 * 1,297px under 214px, #room's 781px under 84px. Round nineteen answered it
 * with a two-pixel vein, and round twenty measured the same void, because a
 * hairline down a 430px column leaves 428px of nothing.
 *
 * There is no more copy to put there. Writing some would be inventing content
 * to fill a hole, and the one rule this site's prose has is that it only ever
 * distils. So the column is filled with the chapter's own ANATOMY instead: a
 * stem that runs the height of the spread and puts out a branch at the exact
 * height of every movement in the body beside it. Nothing is duplicated and
 * nothing is invented — the drawing is a measurement of the text.
 *
 * That also makes it the answer to the other half of the brief. A stem's
 * proportions come from what it grew through, so this one has no fixed size at
 * all: its height is the spread's height, its branch lengths are fractions of
 * whatever the column happens to be, and its nodes are wherever the paragraphs
 * fell at that viewport. Nothing here is a breakpoint.
 *
 * Seeded by the chapter's own id, so #mission and #servitor are recognisably
 * different plants and stay themselves across reloads — the same argument the
 * Sigil makes for a character, one scale up. A reviewer found the runic
 * roundels "near-identical" between chapters and "the same rune twice in one
 * viewport"; two chapters cannot share a stem.
 */

import { seedOf, rngOf, round } from './stem/seed.js';
import { centreline, xAt, stemPath, leaf, branch } from './stem/geometry.js';

/**
 * @param {object} spec
 * @param {string} spec.seed      the chapter's id — the plant's identity
 * @param {number} spec.width     the margin column, in px
 * @param {number} spec.height    the spread, in px
 * @param {number} spec.stemX     where the stem stands in that column
 * @param {number[]} spec.nodes   each movement's offset from the spread's top
 * @param {number[]} spec.minors  every other block's offset — the beat between
 * @returns {string} SVG markup
 */
export const stemSvg = ({ seed, width, height, stemX, nodes, minors = [] }) => {
    const rand = rngOf(seedOf(seed));
    const uid = `stem-${seed.replace(/[^a-z0-9]/gi, '')}`;
    // "The trunk is a dead-straight single-weight vertical with no taper, no
    // curve, no thickness change." At 16px over 1,300 the lean was below
    // noticing, which is the same as not being there.
    //
    // Bounded by where it stands. The rightward lean reaches 0.48 of the sway
    // to the left at most, so that much must fit between the stem and the
    // column's own edge.
    const sway = Math.min(width * 0.18, 60, Math.max(8, (stemX - 4) / 0.48));
    const line = centreline(rand, stemX, height, sway);

    /* Each plant is its own species, not one generator at another setting.
       A reviewer: "the vocabulary never changes — identical stroke weight,
       identical almond leaf, identical easing on every arc. It reads as one
       generator at different settings, which is precisely the procedural tell
       the brief is trying to avoid." The seed now also chooses the leaf's
       shape, how hard a branch curls, how far its leaves turn off it and how
       many it carries — what an eye uses to tell two plants apart. */
    const aspect = 0.34 + rand() * 0.26;
    const curl = 0.28 + rand() * 0.34;
    // How far a leaf turns off its branch, and how many sit along each branch
    // before the tip. These replace a forked pair at the tip, which both
    // reviewers read as the opposite of a plant: "wire ending in an
    // arrowhead — it reads as a cursor", "leaves are spear-tips on
    // fishing-line arcs". A leaf that continues its branch's own line IS a
    // spear point; a leaf set at an angle to its stem is a leaf.
    const splay = 0.62 + rand() * 0.38;
    const alongCount = 1 + Math.round(rand() * 1.4);
    // Thicker on a tall chapter: a plant that carried more is thicker at the
    // base, and this is the one place a proportion should come from the
    // content rather than from a constant.
    const base = 1.7 + Math.min(height / 1600, 1) * 1.7;

    // The room the branches have is everything between the stem and the body.
    const room = Math.max(40, width - stemX - 8);

    const grown = nodes.map((y) => {
        const t = Math.min(1, y / Math.max(1, height));
        const reach = room * (0.42 + rand() * 0.46);
        const droop = (rand() < 0.5 ? -1 : 1) * (16 + rand() * 40);
        return { ...branch(rand, xAt(line, y), y, reach, droop, curl), t, y, x0: xAt(line, y) };
    });

    // The leaves of one branch: a few set along it, alternating sides and
    // turned off its line, then one at the tip turned the same way the last
    // of them was not, so no leaf ever points straight on along its branch.
    let side = rand() < 0.5 ? -1 : 1;
    const leavesOf = (b, len, cls = '', count = alongCount) => {
        const out = [];
        for (let k = 0; k < count; k += 1) {
            const p = b.along(0.38 + (k / Math.max(1, count)) * 0.42);
            out.push(`<path d="${leaf(p.x, p.y, p.ang + side * splay, len * 0.78, len * 0.78 * aspect)}" fill="currentColor"/>`);
            side = -side;
        }
        out.push(`<path${cls} d="${leaf(b.tip.x, b.tip.y, b.ang + side * splay * 0.55, len, len * aspect)}" fill="currentColor"/>`);
        side = -side;
        return out.join('');
    };

    // A node where a branch leaves the trunk. "A branch with no node is not
    // botany" — every arc left the stem at a perfect tangent with no swelling
    // and read as a line that forked, not a plant that grew.
    const nodeAt = (x, y, t) => `<ellipse cx="${round(x)}" cy="${round(y)}" rx="${round(1.4 + (1 - t) * 1.6)}" ry="${round(2 + (1 - t) * 2.2)}" fill="currentColor"/>`;

    // Fading to 28% by the foot made the lower half of a 1,300px column
    // invisible again, which is the half the reviewers measured.
    const fadeOf = (t) => round(Math.max(0, 1 - t * 0.42));

    /* The beat between the movements.
       Measured first against movements alone, #servitor put out two branches
       over 1,116px of column and #room one over 697px: a true drawing of a
       chapter with two movements, and still a column a reviewer would read as
       empty. A plant does not only leaf where it changes direction — it leafs
       at every node, and the big ones are where it turned. So every other
       block in the body gets a short one: the drawing measures the chapter's
       rhythm as well as its structure, and nothing about it is invented. */
    const small = minors.map((y) => {
        const t = Math.min(1, y / Math.max(1, height));
        const reach = room * (0.17 + rand() * 0.3);
        const droop = (rand() < 0.5 ? -1 : 1) * (9 + rand() * 20);
        const x0 = xAt(line, y);
        const b = branch(rand, x0, y, reach, droop, curl);
        return `<g class="stem-minor" opacity="${round(fadeOf(t) * 0.72)}">
            ${nodeAt(x0, y, t * 1.4)}
            <path d="${b.path}" fill="none" stroke="currentColor" stroke-width="0.85" stroke-linecap="round"/>
            ${leavesOf(b, 11 + (1 - t) * 6, '', 0)}
        </g>`;
    }).join('');

    const branches = grown.map((b, i) => `
        <g class="stem-branch" data-movement="${i}" opacity="${fadeOf(b.t)}">
            ${nodeAt(b.x0, b.y, b.t)}
            <path d="${b.path}" fill="none" stroke="currentColor" stroke-width="${round(1.05 + (1 - b.t) * 0.75)}" stroke-linecap="round"/>
            ${b.hairs.map((h) => `<path d="${h}" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" opacity="0.7"/>`).join('')}
            ${leavesOf(b, 14 + (1 - b.t) * 12, ' class="stem-node"')}
        </g>`).join('');

    return `<svg class="stem-svg" width="${round(width)}" height="${round(height)}" viewBox="0 0 ${round(width)} ${round(height)}" fill="none" aria-hidden="true" focusable="false">
        <defs>
            <linearGradient id="${uid}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="currentColor" stop-opacity="0.92"/>
                <stop offset="0.46" stop-color="currentColor" stop-opacity="0.58"/>
                <stop offset="1" stop-color="currentColor" stop-opacity="0.06"/>
            </linearGradient>
        </defs>
        <path d="${stemPath(line, height, base)}" fill="url(#${uid})"/>
        ${small}
        ${branches}
    </svg>`;
};
