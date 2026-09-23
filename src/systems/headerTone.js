// The page descends from parchment through a sunset into moss. A header with
// one daylight colour reads as a bar pasted over it, and a two-state day/night
// toggle only moves the problem: it goes putty over the dark turn band and
// stays cream across the best 200px of the sunset.
//
// So the bar takes its colour from the zone it is standing in. The stops are
// read from the stylesheet's own custom properties rather than copied here —
// written out twice they had already drifted apart at the 90% stop.
const readStops = (names) => {
    const root = getComputedStyle(document.documentElement);
    return names.map((name, i) => [i / (names.length - 1), root.getPropertyValue(name).trim()]);
};

const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));

// Relative luminance, to decide whether the header needs light ink or dark.
const luminance = ([r, g, b]) => {
    const f = (v) => {
        const c = v / 255;
        return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};

const sampleStops = (stops, t) => {
    for (let i = 1; i < stops.length; i += 1) {
        const [pos, hex] = stops[i];
        if (t > pos) continue;
        const [prevPos, prevHex] = stops[i - 1];
        const span = pos - prevPos || 1;
        return mix(rgb(prevHex), rgb(hex), (t - prevPos) / span);
    }
    return rgb(stops[stops.length - 1][1]);
};

// Document-space top of an element, independent of offsetParent.
const docTop = (el) => el.getBoundingClientRect().top + window.scrollY;

let headerTicking = false;
let headerTeardown = null;

export const setupHeaderTone = () => {
    headerTeardown?.();
    headerTeardown = null;

    const header = document.querySelector('.site-header');
    if (!header) return;

    // Not a night page. /#scenes is `page-inner page-night`, so it matched
    // this selector and BECAME the day ramp element: at scroll 0 the sample
    // sits above the element's top, the branch below reads that as full
    // morning, and the bar painted #faf3e5 — the brightest parchment on the
    // site, with dark ink — over a page that is moss from its first pixel.
    // It self-corrected after ~38px of scroll, so every arrival and every
    // scroll-to-top was a cream-to-moss flinch through the 0.35s transition.
    const day = document.querySelector('.daylight, .page-inner:not(.page-night)');

    const ramp = readStops(['--day-0', '--day-1', '--day-2', '--day-3', '--day-4', '--day-5']);
    const crossing = readStops(['--dusk-0', '--dusk-1', '--dusk-2', '--dusk-3', '--dusk-4', '--dusk-5', '--dusk-6']);
    const night = rgb(crossing[crossing.length - 1][1]);

    if (!day) {
        // A page that is night from its first pixel has no ramp to track, and
        // returning here left the bar at its stylesheet default: a reviewer
        // found "/#scenes — a parchment header sitting on a night page, with
        // the transition crushed into 20 rows. The one place the site visibly
        // forgets its own rule." There is nothing to interpolate, but there is
        // still an answer, and it is the end of the crossing.
        header.style.backgroundColor = `rgb(${night.join(', ')})`;
        header.classList.add('is-night');
        headerTeardown = () => {
            header.style.backgroundColor = '';
            header.classList.remove('is-night');
        };
        return;
    }

    const bandEls = [...document.querySelectorAll('.turn-band')];
    const edgeEl = document.querySelector('.nightfall-edge');
    const footer = document.querySelector('.site-footer');
    const nightEl = document.querySelector('.nightfall');

    /* The night keeps falling, and so does the bar.
       Once past the crossing the bar settled on one colour for the whole
       night, while the ground under it went on descending to its floor: a
       reviewer measured the header at a constant (38,49,39) over a page falling
       to (23,33,17) — "the one surface in the essay that refuses to fall". It
       reads the SAME stops at the SAME positions as the ramp in
       styles/nightfall/ground.css, from the stylesheet's own properties, so the
       two cannot drift apart the way the day stops once did. */
    const root = getComputedStyle(document.documentElement);
    const nightStops = [
        [0, root.getPropertyValue('--dusk-6').trim()],
        [0.14, root.getPropertyValue('--night-bg').trim()],
        [0.52, root.getPropertyValue('--night-mid').trim()],
        [1, root.getPropertyValue('--night-floor').trim()],
    ];
    const floor = rgb(nightStops[nightStops.length - 1][1]);
    const nightAt = (docY) => {
        if (!nightEl) return night;
        const top = docTop(nightEl);
        const t = (docY - top) / Math.max(1, nightEl.offsetHeight);
        if (t >= 1) return floor;
        return sampleStops(nightStops, Math.max(0, t));
    };

    // Measured per frame, not cached at setup: a web font swapping in moves
    // every section below it, and a set of boundaries captured before that
    // left the bar cream over a moss footer for the rest of the session.
    const zones = () => {
        const bands = bandEls.map((el) => ({ top: docTop(el), bottom: docTop(el) + el.offsetHeight }));

        // The crossing is .nightfall-edge where there is one, and otherwise the
        // footer's own top margin, which is where its ::before paints.
        let edgeTop = Infinity;
        let edgeBottom = Infinity;
        if (edgeEl) {
            edgeTop = docTop(edgeEl);
            edgeBottom = edgeTop + edgeEl.offsetHeight;
        } else if (footer) {
            edgeBottom = docTop(footer);
            edgeTop = edgeBottom - (parseFloat(getComputedStyle(footer).marginTop) || 0);
        }

        return { bands, edgeTop, edgeBottom };
    };

    const groundAt = (docY) => {
        const { bands, edgeTop, edgeBottom } = zones();
        for (const band of bands) {
            if (docY >= band.top && docY < band.bottom) return nightAt(docY);
        }

        if (docY >= edgeBottom) return nightAt(docY);

        if (docY >= edgeTop) {
            const span = edgeBottom - edgeTop || 1;
            const t = (docY - edgeTop) / span;
            // Clay through copper carries neither dark ink nor light ink above
            // 3:1, so the bar never rests there: it tracks while that is
            // readable, then crosses in one CSS-transitioned move.
            //
            // But it need not go flat. Snapping to #263127 and holding it for
            // the remaining 88% of the ramp put one dark tone against the
            // sunset's clay, copper, plum and slate in turn, on a ruled
            // full-width line. A quarter of the ground mixed into the night
            // keeps the bar under the luminance the light ink needs while
            // letting it carry the hue of whatever it is standing on, so the
            // crossing reads as one event instead of two.
            if (t < 0.12) return sampleStops(crossing, t);
            return mix(night, sampleStops(crossing, t), 0.25);
        }

        const dayTop = docTop(day);
        const dayBottom = dayTop + day.offsetHeight;
        if (docY <= dayTop) return rgb(ramp[0][1]);
        if (docY >= dayBottom) return rgb(ramp[ramp.length - 1][1]);
        return sampleStops(ramp, (docY - dayTop) / (dayBottom - dayTop));
    };

    const paint = () => {
        headerTicking = false;
        // Sample under the header's own midline, not the top of the viewport.
        const ground = groundAt(window.scrollY + header.offsetHeight / 2);
        header.style.backgroundColor = `rgb(${ground.join(', ')})`;
        header.classList.toggle('is-night', luminance(ground) < 0.22);
    };

    const onScroll = () => {
        if (headerTicking) return;
        headerTicking = true;
        requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    headerTeardown = () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        header.style.backgroundColor = '';
    };
};
