/**
 * Sigil
 *
 * Urbit's real idea is not its typography, it is that every identity carries a
 * generated seal — a glyph you could not have drawn, derived from the name
 * itself. Borrowed here because it is not decoration on this site, it is the
 * thesis: a character has an identity, that identity is hers, and it travels
 * with her when a player carries her into somebody else's world.
 *
 * So the sigil is derived from the persona document, deterministically. Change
 * a name and you get a different seal; carry the same character into a second
 * world and the seal is the one that arrived. It is the same argument the
 * crossing scene makes, made in a form you can see before you read.
 *
 * Biomorphic rather than heraldic: the cells are grown from a wandering radius
 * rather than stamped from a grid, so no two are the same shape and none of
 * them is a circle. This is also the answer to the warm-cream-and-serif smell —
 * a procedural mark is the one thing on a page that cannot have been picked
 * from a template.
 */

/**
 * Two sources of randomness, on purpose.
 *
 * Identity seeds the STRUCTURE — how many membranes, how many lobes on each,
 * how far off-centre the nucleus sits, how many filaments reach out. That part
 * is derived from the persona document and never changes, so a character is
 * recognisably the same organism wherever she appears, including after she has
 * crossed into a world that never made her.
 *
 * The GROWTH is fresh every render. A living thing is never the same shape
 * twice — a cell photographed an hour apart is the same cell and a different
 * picture — so the wander that fleshes out each membrane is drawn from an
 * unseeded source. No two sigils on this site are ever identical, including
 * two of the same character, and that is the biologically honest version of
 * what an identity mark is.
 */

/** A small deterministic hash, so a name always seeds the same structure. */
const seedOf = (text) => {
    let h = 2166136261;
    for (let i = 0; i < text.length; i += 1) {
        h ^= text.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
};

/** Mulberry32 — tiny, seedable, and good enough for a glyph. */
const rngOf = (seed) => () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

/**
 * One membrane: a closed loop whose radius wanders, so it reads as something
 * that grew into its shape rather than something struck from a die.
 */
const cell = (rand, cx, cy, radius, lobes) => {
    const points = [];
    for (let i = 0; i < lobes; i += 1) {
        const angle = (i / lobes) * Math.PI * 2;
        const r = radius * (0.68 + rand() * 0.46);
        points.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
    }
    // Catmull-Rom through the points, closed, so the wander stays smooth.
    const d = points.map((p, i) => {
        const p0 = points[(i - 1 + points.length) % points.length];
        const p1 = p;
        const p2 = points[(i + 1) % points.length];
        const p3 = points[(i + 2) % points.length];
        const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
        const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        const head = i === 0 ? `M${p1[0].toFixed(1)} ${p1[1].toFixed(1)}` : '';
        return `${head}C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }).join('');
    return `${d}Z`;
};

/**
 * A chapter's mark, in the same system.
 *
 * The rune was sitting in a perfect circle with a hairline border — the
 * constructed version of the exact form the sigil grows. One mark system now,
 * two contents: a chapter's membrane holds its rune, a character's holds her
 * own nucleus. Each chapter's membrane is seeded by its own rune, so no two
 * chapters carry the same shape, the way no two characters do.
 */
export const ChapterMark = ({ rune }) => {
    const form = rngOf(seedOf(`chapter:${rune}`));
    const grow = Math.random;
    const outer = cell(grow, 50, 50, 44, 7 + Math.floor(form() * 3));
    const inner = cell(grow, 50, 50, 33, 6 + Math.floor(form() * 3));
    return `<span class="chapter-mark" aria-hidden="true">
        <svg class="sigil chapter-mark-cell" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><path d="${outer}" class="sigil-ring" style="--i:0"/><path d="${inner}" class="sigil-ring" style="--i:1"/></svg>
        <span class="chapter-mark-rune">${rune}</span>
    </span>`;
};

export const Sigil = ({ name, size = 56, tone = 'honey' }) => {
    const form = rngOf(seedOf(name));   // who she is
    const grow = Math.random;           // this particular growth of her
    const rings = 2 + Math.floor(form() * 2);
    const paths = [];

    for (let i = 0; i < rings; i += 1) {
        const radius = 42 - i * (9 + form() * 5);
        paths.push(`<path d="${cell(grow, 50, 50, radius, 6 + Math.floor(form() * 4))}" class="sigil-ring" style="--i:${i}"/>`);
    }

    // The nucleus: off-centre, because a grown thing is not concentric. Where
    // it sits is hers; the shape it takes is this morning's.
    const nx = 50 + (form() - 0.5) * 14;
    const ny = 50 + (form() - 0.5) * 14;
    paths.push(`<path d="${cell(grow, nx, ny, 9 + form() * 5, 5 + Math.floor(form() * 3))}" class="sigil-core"/>`);

    // Filaments reaching out of the membrane — what the character is bound to.
    const strands = 2 + Math.floor(form() * 3);
    for (let i = 0; i < strands; i += 1) {
        const a = form() * Math.PI * 2;
        const r1 = 18 + grow() * 10;
        const r2 = 44 + grow() * 6;
        paths.push(`<path d="M${(50 + Math.cos(a) * r1).toFixed(1)} ${(50 + Math.sin(a) * r1).toFixed(1)}L${(50 + Math.cos(a) * r2).toFixed(1)} ${(50 + Math.sin(a) * r2).toFixed(1)}" class="sigil-strand"/>`);
    }

    return `<svg class="sigil sigil-${tone}" viewBox="0 0 100 100" width="${size}" height="${size}" aria-hidden="true" focusable="false">${paths.join('')}</svg>`;
};
