/**
 * A plant's identity: the same chapter always grows the same plant.
 * Split out of Stem.js, which had reached the 300-line ceiling.
 */

/** A small deterministic hash, so an id always seeds the same plant. */
export const seedOf = (text) => {
    let h = 2166136261;
    for (let i = 0; i < text.length; i += 1) {
        h ^= text.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
};

/** Mulberry32 — the same generator the Sigil grows from. */
export const rngOf = (seed) => () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

export const round = (n) => Math.round(n * 10) / 10;
