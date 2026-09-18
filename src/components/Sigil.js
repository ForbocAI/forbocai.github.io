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

/** A small deterministic hash so a name always grows the same seal. */
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

export const Sigil = ({ name, size = 56, tone = 'honey' }) => {
    const rand = rngOf(seedOf(name));
    const rings = 2 + Math.floor(rand() * 2);
    const paths = [];

    for (let i = 0; i < rings; i += 1) {
        const radius = 42 - i * (9 + rand() * 5);
        paths.push(`<path d="${cell(rand, 50, 50, radius, 6 + Math.floor(rand() * 4))}" class="sigil-ring" style="--i:${i}"/>`);
    }

    // The nucleus: off-centre, because a grown thing is not concentric.
    const nx = 50 + (rand() - 0.5) * 14;
    const ny = 50 + (rand() - 0.5) * 14;
    paths.push(`<path d="${cell(rand, nx, ny, 9 + rand() * 5, 5 + Math.floor(rand() * 3))}" class="sigil-core"/>`);

    // Filaments reaching out of the membrane — what the character is bound to.
    const strands = 2 + Math.floor(rand() * 3);
    for (let i = 0; i < strands; i += 1) {
        const a = rand() * Math.PI * 2;
        const r1 = 18 + rand() * 10;
        const r2 = 44 + rand() * 6;
        paths.push(`<path d="M${(50 + Math.cos(a) * r1).toFixed(1)} ${(50 + Math.sin(a) * r1).toFixed(1)}L${(50 + Math.cos(a) * r2).toFixed(1)} ${(50 + Math.sin(a) * r2).toFixed(1)}" class="sigil-strand"/>`);
    }

    return `<svg class="sigil sigil-${tone}" viewBox="0 0 100 100" width="${size}" height="${size}" aria-hidden="true" focusable="false">${paths.join('')}</svg>`;
};
