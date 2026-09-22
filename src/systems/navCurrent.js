// Which chapter am I in? Two reviewers, independently, found no current-section
// state anywhere in ninety-six screenshots of a ten-chapter page: "I cannot
// predict where a click lands, and on landing nothing confirms I arrived."
// The whitepaper's contents rail has answered that question since round ten;
// the nav that crosses every chapter never did.
//
// The same instrument as docContents.js, pointed at the header: mark the link
// whose section a reader is actually inside.
let navWatcher = null;
let navScroll = null;

export const setupNavCurrent = () => {
    navWatcher?.disconnect();
    // Every route change re-runs this, and the scroll listener below closes
    // over the PREVIOUS route's sections. Left attached, each navigation adds
    // another listener marking links against a page that is no longer here.
    if (navScroll) window.removeEventListener('scroll', navScroll);
    navScroll = null;

    const links = [...document.querySelectorAll('.nav-links a[href^="#"], .mobile-nav a[href^="#"]')];
    if (!links.length) return;

    // A ROUTE is current for as long as you are on it, and no scrolling will
    // ever tell you so: #whitepaper and #pitch/N name no element on their own
    // page, so the observer below can never mark them. Reading the deck or the
    // brief, the nav said nothing at all about where you were.
    const route = window.location.hash;
    const routeKey = route.startsWith('#pitch/') ? '#pitch/' : route;
    const onRoute = links.filter((a) => {
        const href = a.getAttribute('href');
        return routeKey && href !== '#' && (href === routeKey || href.startsWith(routeKey));
    });
    if (onRoute.length) {
        links.forEach((a) => a.removeAttribute('aria-current'));
        onRoute.forEach((a) => a.setAttribute('aria-current', 'true'));
        // Nothing on a route scrolls chapters past the bar, so there is
        // nothing for the observer to do.
        return;
    }

    if (typeof IntersectionObserver === 'undefined') return;

    // One section can carry two links (the desktop bar and the drawer), so the
    // map is section -> every link that names it.
    const linksFor = new Map();
    links.forEach((a) => {
        const href = a.getAttribute('href');
        // #pitch/1 is a route, not an anchor, and is not a valid selector.
        if (!/^#[a-zA-Z][\w-]*$/.test(href)) return;
        const section = document.querySelector(href);
        if (!section) return;
        if (!linksFor.has(section)) linksFor.set(section, []);
        linksFor.get(section).push(a);
    });
    if (!linksFor.size) return;

    const visible = new Set();
    // The nav names four of the ten chapters, so for the other six nothing lit
    // and a reader read that as a broken indicator rather than as an unnamed
    // chapter. Once a chapter the nav DOES name has been passed, its link
    // stays lit until the next named one arrives — the bar answers "which part
    // of the page is this" rather than "is this exactly a linked section".
    const sections = [...linksFor.keys()].sort((a, b) => a.offsetTop - b.offsetTop);

    const mark = () => {
        // The topmost section still on screen is the one being read; failing
        // that, the last named one the reader has scrolled past.
        const current = sections.filter((s) => visible.has(s))[0]
            ?? [...sections].reverse().find((s) => s.getBoundingClientRect().top < window.innerHeight * 0.4);

        links.forEach((a) => a.removeAttribute('aria-current'));
        if (current) linksFor.get(current).forEach((a) => a.setAttribute('aria-current', 'true'));
    };

    // The observer only fires when a section CROSSES the reading band, and the
    // fall-back above asks where the reader is right now. Between two named
    // chapters nothing crosses, so without this the bar went dark for the whole
    // of an unnamed chapter and lit again on the next named one.
    navScroll = mark;
    window.addEventListener('scroll', navScroll, { passive: true });

    navWatcher = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) visible.add(entry.target);
                else visible.delete(entry.target);
            });
            mark();
        },
        // The band a reader is actually reading, not the whole viewport: a
        // chapter counts as current once its top has passed a quarter down
        // the screen and until its bottom leaves the lower third.
        { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    );

    linksFor.forEach((_a, section) => navWatcher.observe(section));
};
