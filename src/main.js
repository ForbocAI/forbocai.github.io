import { wakeSprites } from './components/Sprites.js';
let stopSprites = null;
let lastPage = '';

/**
 * Main Entry Point
 * Bootstraps the functional application.
 * 
 *        .-.
 *     .-(   )-.
 *    (___.-.___)
 *       /_|_\
 */
import { createStore } from './domains/store.js';
import { rootReducer } from './domains/rootReducer.js';
import { navigate, selectCurrentPage } from './domains/navigationSlice.js';
import { App } from './components/App.js';


// Initialize Store
const store = createStore(rootReducer, undefined);

// Mobile Menu State
let mobileMenuOpen = false;

// Setup Mobile Menu Event Listeners
//
// The drawer covers the page, so while it is open it owns the keyboard. Three
// things were missing and each one stranded somebody: focus stayed on the
// toggle after opening, so a keyboard user opened a menu and was still outside
// it; Escape did nothing, which is the one key everybody tries; and Tab ran
// straight past the links into the page underneath the sheet.
const setupMobileMenu = () => {
    const toggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (!toggle || !mobileNav) return;

    const links = () => [...mobileNav.querySelectorAll('a[href]')];

    const setOpen = (open, { restoreFocus = true } = {}) => {
        mobileMenuOpen = open;
        toggle.classList.toggle('active', open);
        mobileNav.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', String(open));
        mobileNav.setAttribute('aria-hidden', String(!open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        // The page behind the sheet should not scroll under it.
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) {
            links()[0]?.focus();
        } else if (restoreFocus) {
            toggle.focus();
        }
    };

    toggle.addEventListener('click', () => setOpen(!mobileMenuOpen));

    // A link closes the drawer, but the destination should keep the focus it is
    // about to receive rather than have it yanked back to the toggle.
    mobileNav.addEventListener('click', (event) => {
        if (event.target.closest('a[href]')) setOpen(false, { restoreFocus: false });
    });

    document.addEventListener('keydown', (event) => {
        if (!mobileMenuOpen) return;
        if (event.key === 'Escape') {
            setOpen(false);
            return;
        }
        if (event.key !== 'Tab') return;
        // Hold the tab ring inside the sheet: the toggle is the last stop, so
        // the cycle runs first link -> last link -> toggle -> first link.
        const stops = [...links(), toggle];
        if (!stops.length) return;
        const first = stops[0];
        const last = stops[stops.length - 1];
        const active = document.activeElement;
        if (event.shiftKey && active === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus();
        }
    });
};

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

const setupHeaderTone = () => {
    headerTeardown?.();
    headerTeardown = null;

    const header = document.querySelector('.site-header');
    if (!header) return;

    const day = document.querySelector('.daylight, .page-inner');
    if (!day) return;

    const ramp = readStops(['--day-0', '--day-1', '--day-2', '--day-3', '--day-4', '--day-5']);
    const crossing = readStops(['--dusk-0', '--dusk-1', '--dusk-2', '--dusk-3', '--dusk-4', '--dusk-5', '--dusk-6']);
    const night = rgb(crossing[crossing.length - 1][1]);

    const bandEls = [...document.querySelectorAll('.turn-band')];
    const edgeEl = document.querySelector('.nightfall-edge');
    const footer = document.querySelector('.site-footer');

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
            if (docY >= band.top && docY < band.bottom) return night;
        }

        if (docY >= edgeBottom) return night;

        if (docY >= edgeTop) {
            const span = edgeBottom - edgeTop || 1;
            const t = (docY - edgeTop) / span;
            // Clay through copper carries neither dark ink nor light ink above
            // 3:1, so the bar never rests there: it tracks while that is
            // readable, then crosses in one CSS-transitioned move.
            return t >= 0.12 ? night : sampleStops(crossing, t);
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

// The memory ledger writes itself in once. Firing that on load meant it played
// to nobody on a phone, where the panel starts three quarters of the way down
// the first screen. Fire it the first time the panel is actually seen.
let panelWatcher = null;

const setupMemoryEntrance = () => {
    panelWatcher?.disconnect();

    const panel = document.querySelector('.memory-panel');
    if (!panel) return;

    if (typeof IntersectionObserver === 'undefined') {
        panel.classList.add('is-remembering');
        return;
    }

    panelWatcher = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-remembering');
                observer.unobserve(entry.target);
            });
        },
        // 0.2, not 0.55. At 0.55 the memory card had to be more than half in
        // view before its lines began to write, and on a 390px phone only 24%
        // of it is on the first screen — so the first thing a phone reader saw
        // under "What Servitor™ is weighing" was nothing, and the proof the
        // hero exists to show arrived 240px of scroll and 2.3 seconds later.
        { threshold: 0.2 },
    );

    panelWatcher.observe(panel);
};

// The whitepaper is a 4,800px document with a five-item contents rail. A rail
// that never says where you are is five links, so mark the section the reader
// is actually in — the same aria-current the deck's slide nav already uses.
let contentsWatcher = null;

const setupDocContents = () => {
    contentsWatcher?.disconnect();

    const links = document.querySelectorAll('.doc-contents a[href^="#"]');
    if (!links.length || typeof IntersectionObserver === 'undefined') return;

    const linkFor = new Map();
    links.forEach((link) => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) linkFor.set(section, link);
    });

    const visible = new Set();

    const mark = () => {
        // The topmost section still on screen is the one being read.
        const current = [...linkFor.keys()]
            .filter((section) => visible.has(section))
            .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];

        links.forEach((link) => link.removeAttribute('aria-current'));
        if (current) linkFor.get(current).setAttribute('aria-current', 'true');
    };

    contentsWatcher = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) visible.add(entry.target);
                else visible.delete(entry.target);
            });
            mark();
        },
        { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    );

    linkFor.forEach((_link, section) => contentsWatcher.observe(section));
};

// Render Loop
const render = () => {
    const state = store.getState();
    const appElement = document.getElementById('app');
    
    if (appElement) {
        // Pure functional rendering: State -> UI
        appElement.innerHTML = App(state);
        
        // Setup mobile menu after render
        setupMobileMenu();
        setupHeaderTone();
        setupMemoryEntrance();
    stopSprites?.();
    stopSprites = wakeSprites();
        setupDocContents();



        // Post-render: Scroll to hash if present.
        //
        // Two things here were wrong and both delivered readers to the footer.
        // A page ROUTE whose hash names no element (#scenes) fell through every
        // branch and kept the previous scrollY on a shorter document — both
        // buttons into /#scenes landed at scrollY 4346 of 5246. And a hash that
        // does name an element scrolled with scroll-behavior: smooth, so coming
        // BACK from a page route animated for two seconds from the top of the
        // home page down through the whole daylight half. A page change is a
        // cut, not a pan: when the route changed, the scroll is instant.
        // Ask the store which page this is. The first version read the class
        // on <main>, and the scenes route rendered as page-home, so the class
        // never changed, routeChanged was never true, and the branch below
        // picked a smooth scroll: a JS `behavior` option overrides CSS
        // scroll-behavior, so the page glided for 1.5s across 4,600px and every
        // probe read it mid-flight.
        const hash = window.location.hash;
        const pageNow = selectCurrentPage(state);
        const routeChanged = pageNow !== lastPage;
        lastPage = pageNow;
        if (hash) {
            // Only scroll if it's a valid ID selector (starts with # and no slashes/special chars)
            // This prevents "SyntaxError: '#pitch/1' is not a valid selector"
            if (/^#[a-zA-Z][\w-]*$/.test(hash)) {
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: routeChanged ? 'instant' : 'smooth' });
                } else {
                    // A route, not an anchor: #scenes, #whitepaper.
                    window.scrollTo({ top: 0, behavior: 'instant' });
                }
            } else {
                // #pitch/N and anything else that is not a selector.
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }
};

// Subscribe to state changes
store.subscribe(render);

// Handle Navigation via Hash
window.addEventListener('hashchange', () => {
    store.dispatch(navigate(window.location.hash));
});

// Initial Render
render();

// Debugging
window.__STORE__ = store;
