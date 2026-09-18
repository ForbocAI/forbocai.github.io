/**
 * Sprites — fairies and salamanders playing in the shrubs.
 *
 * The shrubs are the typography. Text nodes give real line boxes, and ranging
 * over character offsets inside them gives real WORD boxes, so a word is a
 * thing a creature can sit on top of, slide along, duck behind and peek around.
 *
 * What took four rewrites to get: PLAYING IS SOCIAL. Every previous version
 * moved each sprite independently, so no matter how much noise went in it read
 * as particles. Creatures play WITH each other — they chase, they get chased,
 * they circle one another, they hide and pop out. That is the whole difference
 * between motion and play, and it is why this one finally has a mood.
 *
 * Paths are eased on a bell curve (10t³ − 15t⁴ + 6t⁵), so every move starts
 * from rest, builds, and arrives softly — never a constant slide. Distances are
 * drawn from a heavy tail, so most moves are small and a rare one crosses the
 * screen; that spread is what stops them all looking the same speed.
 */

const COUNT = 3;

/* One dial for the whole tempo. Every duration is multiplied by it, so the
   spread between a dawdle and a dash is preserved exactly — the point was never
   that they were fast, it was that they were all the SAME speed. */
const SLOW = 2;
const HUES = ['creek', 'sage', 'lantern'];

export const Sprites = () => `
    <div class="sprites" aria-hidden="true">
        ${Array.from({ length: COUNT }, (_, i) =>
            `<span class="sprite sprite-${HUES[i % HUES.length]}"><span class="sprite-halo"></span><span class="sprite-core"></span><span class="sprite-glint"></span></span>`
        ).join('')}
    </div>
`;

const rand = (lo, hi) => lo + Math.random() * (hi - lo);
const pick = (a) => a[Math.floor(Math.random() * a.length)];
/** Bell-curve easing: leaves at rest, peaks mid-flight, arrives soft. */
const ease = (t) => t * t * t * (10 - 15 * t + 6 * t * t);
/** Heavy tail: mostly small hops, occasionally a long one. Never one speed. */
const tail = (min, max) => Math.min(max, min * Math.pow(Math.random() || 1e-6, -0.55));

export const wakeSprites = () => {
    const root = document.querySelector('.sprites');
    if (!root) return () => {};
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { root.remove(); return () => {}; }
    if (window.innerWidth < 900) { root.remove(); return () => {}; }

    const els = [...root.querySelectorAll('.sprite')];
    const SKIP = /^(SCRIPT|STYLE|SVG|CODE|PRE|BUTTON|NAV)$/;

    /** Every word on screen, in document space — one perch each. */
    const shrubs = () => {
        const out = [];
        const sx = window.scrollX, sy = window.scrollY;
        const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: (n) => {
                if (!n.nodeValue || n.nodeValue.trim().length < 12) return NodeFilter.FILTER_REJECT;
                const el = n.parentElement;
                if (!el || SKIP.test(el.tagName)) return NodeFilter.FILTER_REJECT;
                if (el.closest('details:not([open])') || el.closest('.sprites')) return NodeFilter.FILTER_REJECT;
                const box = el.getBoundingClientRect();
                if (box.bottom < -60 || box.top > window.innerHeight + 60) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            },
        });
        const range = document.createRange();
        for (let n = walk.nextNode(); n && out.length < 520; n = walk.nextNode()) {
            const style = getComputedStyle(n.parentElement);
            if (style.visibility === 'hidden' || style.opacity === '0') continue;
            const font = parseFloat(style.fontSize) || 16;
            const text = n.nodeValue;
            const re = /\S+/g;
            let m;
            while ((m = re.exec(text)) && out.length < 520) {
                range.setStart(n, m.index);
                range.setEnd(n, m.index + m[0].length);
                const r = range.getBoundingClientRect();
                if (r.width < 4 || r.height < 6) continue;
                if (r.bottom < 20 || r.top > window.innerHeight - 20) continue;
                out.push({ x: r.left + sx, y: r.top + sy, w: r.width, h: r.height, font });
            }
        }
        return out;
    };

    const state = els.map((el, i) => ({
        el, hue: i,
        x: 0, y: 0, fx: 0, fy: 0, tx: 0, ty: 0, cx: 0, cy: 0,
        t: 1, dur: 1, wait: rand(0.3, 1.2) + i * 1.9,
        move: 'hover', perch: null, spin: 0, radius: 0, flat: 0.55,
        fade: 0, born: false,
        flare: 0, night: null,
        zip: rand(0.75, 1.5),          // how quick this one is
        bold: rand(0.2, 0.95),         // how far it will range
        coy: rand(0.15, 0.8),          // how much it hides
    }));

    /** Nearest word to a wished-for point. Every flight ends on a shrub —
        without this, fleeing picked an arbitrary point and put creatures 200px
        out in bare margin, which is the one place they must never be. */
    const snap = (pool, wx, wy) => {
        let best = null, bd = 1e9;
        for (const p of pool) {
            const d = Math.hypot(p.x + p.w * 0.5 - wx, p.y + p.h * 0.5 - wy);
            if (d < bd) { bd = d; best = p; }
        }
        return best;
    };

    /** Aim a flight from here to a target, curving it so nothing travels straight. */
    const fly = (s, tx, ty, speed) => {
        s.fx = s.x; s.fy = s.y; s.tx = tx; s.ty = ty;
        const dx = tx - s.x, dy = ty - s.y;
        const d = Math.hypot(dx, dy) || 1;
        // Control point pushed off to the side: every flight is an arc, and the
        // side flips at random so they never all bow the same way.
        const bow = rand(0.18, 0.62) * d * (Math.random() < 0.5 ? 1 : -1);
        s.cx = s.x + dx * 0.5 - (dy / d) * bow;
        s.cy = s.y + dy * 0.5 + (dx / d) * bow;
        s.t = 0;
        s.dur = Math.max(0.6, Math.pow(d, 0.62) / (46 * speed * s.zip)) * SLOW;
    };

    /** What to do next. Half of these need somebody else to play with. */
    const decide = (s, all, pool) => {
        if (!pool.length) return;
        const others = all.filter((o) => o !== s && o.born && o.fade > 0.2);
        const mate = others.length ? pick(others) : null;
        const near = pool.filter((p) => Math.abs(p.y - s.y) < 260 && Math.abs(p.x - s.x) < 620);
        const field = near.length > 6 ? near : pool;

        const moves = ['hover', 'slide', 'flit', 'tumble', 'hide', 'ring'];
        if (mate) moves.push('chase', 'chase', 'circle', 'shy');
        s.move = pick(moves);

        if (s.move === 'chase') {                     // go bother somebody
            const at = snap(pool, mate.x + rand(-26, 26), mate.y + rand(-18, 18)) ?? pick(field);
            fly(s, at.x + at.w * rand(0, 1), at.y + at.h * 0.5, rand(1.5, 2.8));
        } else if (s.move === 'shy') {                // and bolt when noticed
            const away = Math.atan2(s.y - mate.y, s.x - mate.x) + rand(-0.7, 0.7);
            const d = tail(40, 300) * (0.5 + s.bold);
            const to = snap(pool, s.x + Math.cos(away) * d, s.y + Math.sin(away) * d) ?? pick(field);
            fly(s, to.x + to.w * rand(0, 1), to.y + to.h * 0.5, rand(1.7, 2.9));
        } else if (s.move === 'circle') {             // dance around each other
            s.perch = { x: mate.x, y: mate.y, w: 0, h: 14, font: 14 };
            s.radius = rand(14, 34); s.spin = rand(1.6, 3.4) * (Math.random() < 0.5 ? 1 : -1);
            s.flat = rand(0.4, 0.9); s.t = 0; s.dur = rand(1.1, 2.6) * SLOW;
        } else if (s.move === 'ring') {               // dance around a word
            const p = pick(field);
            s.perch = p; s.radius = Math.max(11, p.w * rand(0.5, 0.9));
            s.spin = rand(1.4, 3.0) * (Math.random() < 0.5 ? 1 : -1);
            s.flat = rand(0.35, 0.8); s.t = 0; s.dur = rand(0.9, 2.4) * SLOW;
        } else if (s.move === 'hide') {               // duck behind a word, pop out
            const p = pick(field);
            s.perch = p; s.t = 0; s.dur = rand(0.7, 1.9) * (0.6 + s.coy);
            fly(s, p.x + p.w * rand(0.2, 0.8), p.y + p.h * 0.55, rand(1.1, 2.0));
            s.move = 'hide';
        } else if (s.move === 'slide') {              // salamander along a branch
            const p = pick(field);
            fly(s, p.x + p.w * (Math.random() < 0.5 ? -0.3 : 1.3), p.y + p.h * 0.5, rand(0.5, 1.1));
        } else if (s.move === 'tumble') {             // loop for the sake of it
            const p = pick(field);
            s.perch = p; s.radius = rand(18, 46);
            s.spin = rand(3.0, 5.5) * (Math.random() < 0.5 ? 1 : -1);
            s.flat = rand(0.2, 0.5); s.t = 0; s.dur = rand(0.5, 1.2) * SLOW;
            s.move = 'ring';
        } else if (s.move === 'flit') {               // a proper leap somewhere new
            const d = tail(50, 520) * (0.4 + s.bold);
            const a = rand(-0.9, 0.9) + (Math.random() < 0.62 ? Math.PI / 2 : 0);  // often downward
            const best = snap(pool, s.x + Math.cos(a) * d, s.y + Math.sin(a) * d) ?? pick(field);
            fly(s, best.x + best.w * rand(0, 1), best.y + best.h * 0.5, rand(0.9, 2.2));
        } else {                                      // hang about
            const p = pick(field);
            s.perch = p; s.t = 0; s.dur = rand(0.8, 3.2) * (0.5 + s.coy);
            fly(s, p.x + p.w * rand(0.1, 0.9), p.y - p.h * rand(0.05, 0.3), rand(0.6, 1.3));
            s.move = 'hover';
        }
    };

    /* The sprite layer is position:fixed at body level, a sibling of <main>, so
       it sits OUTSIDE .daylight and .nightfall — which means descendant rules
       like `.daylight .sprite` never matched and every sprite wore the night
       palette on both halves. A creature lights itself from where it actually
       is, so each one carries its own half as a class. They cross the boundary
       independently, so this cannot be a flag on the container. */
    let nightTop = Infinity;
    const findDusk = () => {
        const n = document.querySelector('.nightfall');
        nightTop = n ? n.getBoundingClientRect().top + window.scrollY : Infinity;
    };

    let frame = 0, alive = true, last = performance.now(), pool = [], recount = 0;

    const tick = (now) => {
        if (!alive) return;
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        const sx = window.scrollX, sy = window.scrollY;

        recount -= dt;
        if (recount <= 0) { pool = shrubs(); findDusk(); recount = 0.3; }

        state.forEach((s) => {
            if (s.wait > 0) { s.wait -= dt; s.el.style.opacity = '0'; return; }
            if (!pool.length) { s.fade = Math.max(0, s.fade - dt * 2); s.el.style.opacity = s.fade.toFixed(3); return; }
            if (!s.born) {
                const p = pick(pool);
                s.x = p.x + p.w * 0.5; s.y = p.y + p.h * 0.5; s.born = true;
                decide(s, state, pool);
            }

            s.t += dt / s.dur;

            if (s.move === 'ring' || s.move === 'circle') {
                if (s.move === 'circle') {
                    const mate = state.find((o) => o !== s && o.born);
                    if (mate) { s.perch.x = mate.x; s.perch.y = mate.y; }
                }
                const a = s.spin * s.t * Math.PI * 2;
                const cx = s.perch.x + (s.perch.w || 0) * 0.5;
                const cy = s.perch.y + (s.perch.h || 0) * 0.5;
                s.x = cx + Math.cos(a) * s.radius;
                s.y = cy + Math.sin(a) * s.radius * s.flat;
            } else {
                const e = ease(Math.min(1, s.t));
                const u = 1 - e;
                s.x = u * u * s.fx + 2 * u * e * s.cx + e * e * s.tx;
                s.y = u * u * s.fy + 2 * u * e * s.cy + e * e * s.ty;
            }

            // Gone off screen? Slip away and come back somewhere in view.
            const vy = s.y - sy;
            if (vy < -30 || vy > window.innerHeight + 30) { s.fade = 0; s.born = false; return; }

            if (s.t >= 1) decide(s, state, pool);

            // Behind a word it dims to almost nothing, then pops back out.
            const lurk = s.move === 'hide' ? 0.16 : 1;
            const T = now / 1000;

            // Three light behaviours at once, none of them in step with another.
            // Slow breath, fast shimmer, and a rare flare that fires the glint —
            // a light that only pulses reads as a blinking LED.
            const breath = 0.74 + Math.sin(T * (1.1 + s.hue * 0.37) + s.hue * 2.1) * 0.26;
            const shimmer = 0.86 + Math.sin(T * (7.3 + s.hue * 1.9) + s.hue) * Math.sin(T * (3.1 + s.hue)) * 0.14;
            if (s.flare > 0) s.flare = Math.max(0, s.flare - dt * rand(1.1, 2.4));
            else if (Math.random() < dt * 0.22) s.flare = rand(0.55, 1);

            const lit = breath * shimmer * (1 + s.flare * 1.25);
            s.fade = Math.min(1, s.fade + dt * 1.6);

            const night = s.y >= nightTop;
            if (s.night !== night) { s.night = night; s.el.classList.toggle('is-night', night); s.el.classList.toggle('is-day', !night); }

            s.el.style.transform = `translate3d(${(s.x - sx).toFixed(1)}px, ${(s.y - sy).toFixed(1)}px, 0)`;
            s.el.style.opacity = Math.min(1, s.fade * lit * lurk * 0.36).toFixed(3);   // half again: they tease, they do not announce
            s.el.style.setProperty('--sprite-scale', (0.66 + lit * 0.52).toFixed(3));
            s.el.style.setProperty('--flare', s.flare.toFixed(3));
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
