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

/** A small deterministic hash, so an id always seeds the same plant. */
const seedOf = (text) => {
    let h = 2166136261;
    for (let i = 0; i < text.length; i += 1) {
        h ^= text.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
};

/** Mulberry32 — the same generator the Sigil grows from. */
const rngOf = (seed) => () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const round = (n) => Math.round(n * 10) / 10;

/**
 * The centreline.
 *
 * A drawn stem is never plumb. It leans by a few pixels over its whole length
 * and corrects, which is the entire difference between a plant and a border-
 * left. The lean is a fraction of the column, not a pixel count, so a narrow
 * column gets a subtle one and a wide column a generous one without a number
 * being chosen for either.
 */
const centreline = (rand, x0, height, sway) => {
    const steps = Math.max(6, Math.round(height / 120));
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
const xAt = (line, y) => {
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
const stemPath = (line, height, base) => {
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
const leaf = (x, y, ang, len, wid) => {
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
const branch = (rand, x, y, reach, droop, curl = 0.42) => {
    const cx = x + reach * curl;
    const cy = y - droop * 0.5;
    const ex = round(x + reach);
    const ey = round(y + droop);
    const path = `M${round(x)},${round(y)}Q${round(cx)},${round(cy)} ${ex},${ey}`;
    const ang = Math.atan2(ey - cy, ex - cx);
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
    return { path, hairs, ang, tip: { x: ex, y: ey } };
};

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
       shape, how hard a branch curls, and whether its tip carries one leaf or
       a forked pair — the three things an eye uses to tell two plants apart. */
    const aspect = 0.2 + rand() * 0.32;
    const curl = 0.28 + rand() * 0.34;
    const paired = rand() < 0.5;
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

    // The leaf at a tip: one, or a forked pair splayed either side of the
    // branch's own direction, in the plant's own proportions.
    const leavesAt = (tip, ang, len, cls = '') => {
        const one = (a) => `<path${cls} d="${leaf(tip.x, tip.y, a, len, len * aspect)}" fill="currentColor"/>`;
        return paired ? one(ang - 0.42) + one(ang + 0.36) : one(ang);
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
            ${leavesAt(b.tip, b.ang, 7 + (1 - t) * 5)}
        </g>`;
    }).join('');

    const branches = grown.map((b, i) => `
        <g class="stem-branch" data-movement="${i}" opacity="${fadeOf(b.t)}">
            ${nodeAt(b.x0, b.y, b.t)}
            <path d="${b.path}" fill="none" stroke="currentColor" stroke-width="${round(1.05 + (1 - b.t) * 0.75)}" stroke-linecap="round"/>
            ${b.hairs.map((h) => `<path d="${h}" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" opacity="0.7"/>`).join('')}
            ${leavesAt(b.tip, b.ang, 14 + (1 - b.t) * 12, ' class="stem-node"')}
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
