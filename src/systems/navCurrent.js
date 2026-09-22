// Which chapter am I in? Two reviewers, independently, found no current-section
// state anywhere in ninety-six screenshots of a ten-chapter page: "I cannot
// predict where a click lands, and on landing nothing confirms I arrived."
// The whitepaper's contents rail has answered that question since round ten;
// the nav that crosses every chapter never did.
//
// The same instrument as docContents.js, pointed at the header: mark the link
// whose section a reader is actually inside.
let navWatcher = null;

export const setupNavCurrent = () => {
    navWatcher?.disconnect();

    const links = [...document.querySelectorAll('.nav-links a[href^="#"], .mobile-nav a[href^="#"]')];
    if (!links.length || typeof IntersectionObserver === 'undefined') return;

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

    const mark = () => {
        // The topmost section still on screen is the one being read.
        const current = [...linksFor.keys()]
            .filter((section) => visible.has(section))
            .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];

        links.forEach((a) => a.removeAttribute('aria-current'));
        if (current) linksFor.get(current).forEach((a) => a.setAttribute('aria-current', 'true'));
    };

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
