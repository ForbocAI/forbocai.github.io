/**
 * Sprites
 *
 * Fairies live in shrubs, and here the shrubs are the typography. These ride
 * the rendered line boxes of the text itself, so the light is always among
 * letters and never in an empty margin — a light with nothing around it is a
 * dead pixel, which is what every earlier attempt looked like.
 *
 * GEOMETRY. A Range over an ELEMENT returns block rects: full column width,
 * trailing whitespace included, so a sprite walks to the edge of the paragraph
 * box rather than the edge of the words. A Range over a TEXT NODE returns one
 * rect per rendered line, tight to the ink. Text nodes only, below. That
 * distinction is the whole feature.
 *
 * PACE. Reading runs at 238 wpm (Brysbaert 2019) ≈ 4 words/sec; a word is ~5.5
 * characters; a character is ~0.5em. So horizontal speed is fontSize × 10.9
 * px/sec and it scales with type size on its own — you read a headline at the
 * same word rate, so a sprite crosses big glyphs faster. The ~13 px/sec of
 * vertical descent then EMERGES from hopping line to line rather than being
 * dialled in.
 *
 * WHY THIS IS NOT A LOOP. The previous version ran one behaviour — land, rest,
 * run right — on three sprites sharing a CSS flicker keyframe and a pure sine
 * bob, and it read as a pattern because it was one: jitter inside a loop is
 * still a loop. Three things fix that here, and none of them is a tweak:
 *
 *   1. A REPERTOIRE, not a cycle. Five behaviours chosen by weighted draw, so
 *      what happens next is genuinely unknown. Repeating a behaviour is damped,
 *      which is what stops a run of one thing reading as a rhythm.
 *   2. TEMPERAMENT. Each sprite draws restlessness, pace and shyness once and
 *      keeps them, so the three are not interchangeable instances — one dawdles,
 *      one darts, and you can tell them apart by watching.
 *   3. VALUE NOISE, not sines. Brightness and bob are sampled from a per-sprite
 *      noise table at incommensurable rates. A sine has a period and the eye
 *      finds it; noise does not repeat.
 *
 * ANCHORED TO THE TEXT, NOT THE SCREEN. Line rects come back in viewport
 * coordinates, and writing those straight into a fixed layer means that between
 * re-measures the page scrolls away underneath while the sprite holds its
 * screen position — it follows the camera instead of the shrubs. So every line
 * and every sprite is stored in DOCUMENT space here, and scroll is subtracted
 * only at the moment of drawing. A sprite is then glued to its word on every
 * frame, for free, whether or not the geometry has been re-measured.
 *
 * And the population breathes: a sprite goes dormant for a while and comes back
 * somewhere else, so even "how many are there" has no steady answer.
 */

const COUNT = 3;
const HUES = ['creek', 'sage', 'lantern'];

export const Sprites = () => `
    <div class="sprites" aria-hidden="true">
        ${Array.from({ length: COUNT }, (_, i) =>
            `<span class="sprite sprite-${HUES[i % HUES.length]}"><span class="sprite-core"></span></span>`
        ).join('')}
    </div>
`;

/** Smooth 1D value noise. Cheap, and unlike a sine it has no period to find. */
const makeNoise = () => {
    const table = Array.from({ length: 256 }, () => Math.random() * 2 - 1);
    return (t) => {
        const i = Math.floor(t);
        const f = t - i;
        const a = table[i & 255];
        const b = table[(i + 1) & 255];
        return a + (b - a) * (f * f * (3 - 2 * f));   // smoothstep
    };
};

export const wakeSprites = () => {
    const root = document.querySelector('.sprites');
    if (!root) return () => {};
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { root.remove(); return () => {}; }
    if (window.innerWidth < 900) { root.remove(); return () => {}; }

    const els = [...root.querySelectorAll('.sprite')];

    /**
     * Every rendered LINE of body copy on screen, tight to the ink.
     * Text nodes only — see the note above about element ranges.
     */
    const SKIP = /^(SCRIPT|STYLE|SVG|CODE|PRE|BUTTON|NAV)$/;
    const branches = () => {
        const out = [];
        const sx = window.scrollX, sy = window.scrollY;
        const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: (n) => {
                if (!n.nodeValue || n.nodeValue.trim().length < 12) return NodeFilter.FILTER_REJECT;
                const el = n.parentElement;
                if (!el || SKIP.test(el.tagName)) return NodeFilter.FILTER_REJECT;
                if (el.closest('details:not([open])') || el.closest('.sprites')) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            },
        });
        const range = document.createRange();
        for (let n = walk.nextNode(); n; n = walk.nextNode()) {
            const style = getComputedStyle(n.parentElement);
            if (style.visibility === 'hidden' || style.opacity === '0') continue;
            const font = parseFloat(style.fontSize) || 16;
            range.selectNodeContents(n);
            for (const r of range.getClientRects()) {
                if (r.width < font * 6 || r.height < 6) continue;
                if (r.bottom < 24 || r.top > window.innerHeight - 24) continue;
                // DOCUMENT space, so scrolling cannot shear a sprite off its word.
                out.push({ left: r.left + sx, right: r.right + sx, top: r.top + sy, height: r.height, font });
            }
        }
        return out.sort((a, b) => a.top - b.top);
    };

    const rand = (lo, hi) => lo + Math.random() * (hi - lo);

    const state = els.map((el, i) => ({
        el, hue: i, line: null, x: 0, y: 0, fade: 0,
        // Temperament: drawn once, kept for the life of the sprite.
        restless: rand(0.1, 0.95),
        pace: rand(0.72, 1.35),
        shy: rand(0.25, 0.85),
        glow: makeNoise(),
        sway: makeNoise(),
        glowRate: rand(0.32, 0.78),
        swayRate: rand(0.17, 0.44),
        act: 'linger', left: rand(0.4, 2.2) + i * 2.4, dir: 1, speed: 0,
        prev: '', dormant: 0,
    }));

    /**
     * Pick what to do next. Weighted draw, damped for whatever just happened —
     * that damping is what keeps a run of one behaviour from becoming a beat.
     */
    const choose = (s) => {
        const w = {
            linger: 2.6 - s.restless * 1.7,        // sit on a word and flicker
            drift: 2.0,                             // travel the line at reading pace
            dart: 0.35 + s.restless * 2.3,          // short fast burst, then stop
            hop: 0.7 + s.restless * 1.3,            // jump to a nearby line
            descend: 1.2,                           // drop down the page: the guiding move
        };
        if (s.prev) w[s.prev] *= 0.3;
        const total = Object.values(w).reduce((a, b) => a + b, 0);
        let r = Math.random() * total;
        const act = Object.keys(w).find((k) => (r -= w[k]) <= 0) ?? 'drift';
        s.prev = act;
        s.act = act;

        if (act === 'linger') s.left = rand(1.6, 6.5) * (0.5 + s.shy);
        if (act === 'drift') { s.left = rand(1.4, 4.0); s.speed = s.pace; s.dir = Math.random() < 0.14 ? -1 : 1; }
        if (act === 'dart') { s.left = rand(0.18, 0.46); s.speed = s.pace * rand(5, 9); s.dir = Math.random() < 0.2 ? -1 : 1; }
        if (act === 'hop' || act === 'descend') s.left = rand(0.1, 0.35);
    };

    /** Land on a line. `reach` says how far down to look for one. */
    const settle = (s, pool, reach) => {
        // On the FIRST landing there is no current line, so seed each sprite
        // into its own band of the screen — otherwise all three take the
        // topmost line and arrive as a clump, which is a flock, not a hedge.
        const floor = s.line
            ? s.line.top + 4
            : window.scrollY + window.innerHeight * (s.hue / (COUNT + 0.6)) - 1;
        let pick = pool.filter((l) => l.top > floor);
        if (reach === 'near' && s.line) {
            // A hop goes to a neighbour, up or down — readers regress too.
            const near = pool.filter((l) => Math.abs(l.top - s.line.top) < s.line.height * 4.5 && l !== s.line);
            if (near.length) pick = near;
        }
        if (!pick.length) pick = pool;
        const span = reach === 'far' ? Math.min(7, pick.length) : Math.min(3, pick.length);
        s.line = pick[Math.floor(Math.random() * span)];
        s.x = s.line.left + Math.random() * (s.line.right - s.line.left) * 0.66;
        choose(s);
    };

    let frame = 0, alive = true, last = performance.now(), lines = [], recount = 0;

    const tick = (now) => {
        if (!alive) return;
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        const t = now / 1000;
        const sx = window.scrollX, sy = window.scrollY;

        recount -= dt;
        if (recount <= 0) { lines = branches(); recount = 0.25; }

        state.forEach((s) => {
            // Dormancy: the population itself should not be a constant.
            if (s.dormant > 0) {
                s.dormant -= dt;
                s.fade = Math.max(0, s.fade - dt * 1.6);
                s.el.style.opacity = s.fade.toFixed(3);
                if (s.dormant <= 0) { s.line = null; s.fade = 0; }
                return;
            }
            if (!lines.length) { s.fade = Math.max(0, s.fade - dt * 2); s.el.style.opacity = s.fade.toFixed(3); return; }

            const vTop = s.line ? s.line.top - sy : 0;
            const lost = !s.line || vTop < 24 || vTop > window.innerHeight - 24;
            if (lost) {
                s.fade = Math.max(0, s.fade - dt * 2.4);
                if (s.fade <= 0.01) settle(s, lines, 'near');
            } else {
                s.fade = Math.min(1, s.fade + dt * 1.1);
            }

            s.left -= dt;
            if (s.act === 'drift' || s.act === 'dart') {
                s.x += s.line.font * 10.9 * s.speed * s.dir * dt;
                if (s.x > s.line.right || s.x < s.line.left) { s.fade = 0; settle(s, lines, 'near'); }
            }
            if (s.left <= 0) {
                if (s.act === 'hop') { s.fade = 0; settle(s, lines, 'near'); }
                else if (s.act === 'descend') { s.fade = 0; settle(s, lines, 'far'); }
                else choose(s);
                // Now and then it simply leaves for a while.
                if (Math.random() < 0.05 * s.shy) s.dormant = rand(4, 14);
            }

            // Bob and brightness from noise, at rates that share no common
            // period, so neither one ever comes back around.
            const bob = s.sway(t * s.swayRate + s.hue * 17) * s.line.height * 0.2;
            s.y = s.line.top + s.line.height * 0.46 + bob;
            const bright = 0.4 + (s.glow(t * s.glowRate + s.hue * 31) * 0.5 + 0.5) * 0.6;

            s.el.style.transform = `translate3d(${(s.x - sx).toFixed(1)}px, ${(s.y - sy).toFixed(1)}px, 0)`;
            s.el.style.opacity = (s.fade * bright * 0.62).toFixed(3);
            s.el.style.setProperty('--sprite-scale', (0.72 + bright * 0.5).toFixed(3));
        });

        frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    const onScroll = () => { recount = 0; };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
        alive = false; cancelAnimationFrame(frame);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
    };
};
