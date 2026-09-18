/**
 * Sprites
 *
 * Researched before rebuilt, because the first version was built first and it
 * showed: three hard-edged squares in the margins, running one-to-five second
 * cycles and tracking scroll velocity. They read as dead pixels — and by the
 * governing rule of motion UX, if a reader notices the animation itself it is
 * already too much, so being noticed at all was the failure.
 *
 * Two sources, converging on the same number.
 *
 * Brysbaert's 2019 meta-analysis (190 studies, 18,573 readers) puts adult
 * silent reading at 238 words per minute for non-fiction. A five-hundred word
 * chapter is about two minutes of reading.
 *
 * AAA ambient practice — the dust and ember layers on game sites — runs soft
 * glowing motes on durations of one hundred to four hundred SECONDS, sparse
 * enough that only a handful are ever visible, drifting slowly and never
 * pulling attention off the thing you came for.
 *
 * A sprite descending a chapter at reading pace IS a two-minute drift. The
 * brief and the practice are the same instruction, and the first version was
 * roughly fifty times too fast.
 *
 * So they fall beside the line you are reading, at the speed you read it, and
 * they are light rather than objects: blurred, dim, soft-edged. A crisp dot at
 * this size is a rendering artifact; a blurred one is a firefly across a room.
 *
 * No scroll reactivity at all. Reacting is what made the last set demand
 * attention, and ambient means indifferent to you.
 */

const SPRITES = [
    // fall: seconds to cross one viewport. Reading pace for a 900px screen of
    // body copy is about a minute; the slower ones read as further away, which
    // is how parallax separates ambient from immediate.
    // 81s is not a taste call. A sprite crosses 1,044px of viewport, and at
    // 238 wpm on this page's measure the reader's eye travels 12.9 px/sec —
    // 1044 / 12.9 = 81. The lead sprite keeps exact reading pace; the rest run
    // slower, which is how parallax says "further away, less important".
    { hue: 'creek',   x: 6,  fall: 81,  size: 9, drift: 26, delay: 0 },
    { hue: 'sage',    x: 94, fall: 112, size: 7, drift: 18, delay: 27 },
    { hue: 'lantern', x: 11, fall: 168, size: 6, drift: 38, delay: 58 },
    { hue: 'sage',    x: 89, fall: 140, size: 6, drift: 30, delay: 86 },
    { hue: 'creek',   x: 3,  fall: 205, size: 5, drift: 44, delay: 117 },
];

export const Sprites = () => `
    <div class="sprites" aria-hidden="true">
        ${SPRITES.map((s) => `
        <span class="sprite sprite-${s.hue}" style="--x:${s.x}%; --fall:${s.fall}s; --sprite-size:${s.size}px; --drift:${s.drift}px; --delay:-${s.delay}s"></span>`).join('')}
    </div>
`;
