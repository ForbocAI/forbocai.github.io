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

/* How far down the descent you are.
   Both reviewers, twice each, found the phone with no position feedback of any
   kind: "all 25 mob shots have no marker at all", "across ten chapters and
   roughly fifteen phone-screens of scrolling there is never any indication of
   position". The drawer's links are behind a hamburger, so no state inside it
   can answer while it is shut.
   A vein along the header's own bottom edge answers on every shape, including
   the one with no room for a word — and it is the venation the rest of the
   page is already drawn with rather than a progress widget borrowed from
   somewhere else. */
const veinFor = () => {
    const header = document.querySelector('.site-header');
    if (!header) return null;
    let vein = header.querySelector('.read-vein');
    if (!vein) {
        vein = document.createElement('div');
        vein.className = 'read-vein';
        vein.setAttribute('aria-hidden', 'true');
        header.appendChild(vein);
    }
    return vein;
};

/* The chapter a reader is actually in, out of how many there are.
   Every .chapter counts, not only the ones the bar happens to name, which is
   the whole point: the four chapters with no nav anchor are exactly the ones
   that had no answer. Measured against the reading band rather than the top of
   the window, so it turns over where a reader would say it does. */
const countFor = () => {
    const at = document.querySelector('.read-at');
    const of = document.querySelector('.read-of');
    if (!at || !of) return null;
    const chapters = [...document.querySelectorAll('main section.chapter')];
    return { at, of, chapters };
};

const drawCount = (c) => {
    if (!c) return;
    if (!c.chapters.length) {
        c.at.textContent = '';
        c.of.textContent = '';
        return;
    }
    const line = window.innerHeight * 0.34;
    let i = -1;
    c.chapters.forEach((sec, n) => {
        if (sec.getBoundingClientRect().top <= line) i = n;
    });
    // Above the first chapter — the hero — there is no chapter to be in, and
    // saying "01" there would be the same kind of lie the lamp used to tell.
    const pad = (n) => String(n).padStart(2, '0');
    c.at.textContent = i < 0 ? '' : pad(i + 1);
    c.of.textContent = i < 0 ? '' : ` / ${pad(c.chapters.length)}`;
};

const drawVein = (vein) => {
    if (!vein) return;
    const doc = document.documentElement;
    const run = doc.scrollHeight - window.innerHeight;
    // A page shorter than its window is entirely read the moment it is open,
    // and a vein at full length there says so rather than dividing by zero.
    const at = run > 40 ? Math.min(1, Math.max(0, window.scrollY / run)) : 1;
    vein.style.setProperty('--read', at.toFixed(4));
};

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
        // nothing for the observer to do — but the descent is still being
        // travelled, so the vein still has to be drawn and kept.
        const routeVein = veinFor();
        const routeCount = countFor();
        drawVein(routeVein);
        // A route is not a chapter of the essay, so the count says nothing
        // rather than counting the deck's own sections as chapters.
        if (routeCount) { routeCount.at.textContent = ''; routeCount.of.textContent = ''; }
        navScroll = () => drawVein(routeVein);
        window.addEventListener('scroll', navScroll, { passive: true });
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

    // Where you are, and how far in. Seven nav items name ten chapters, so a
    // single lit state has to answer for three chapters it does not name, and
    // both round-twenty-one reviewers caught it doing exactly that: "chapters
    // 5/6/7 all show One choice", "chapters 8/9/10 all show Horizons", "the
    // nav is decoration". Marking the nearest named chapter is not wrong as an
    // ANSWER — it is wrong as a CLAIM, because the lamp says "you are here".
    //
    // Two states instead of one. The lamp still means you are in this chapter
    // and nothing else. A chapter you have gone past is marked as passed, which
    // is true whatever unnamed chapter you are standing in, and leaves the bar
    // never dead and never lying.
    const vein = veinFor();
    const count = countFor();
    const visible = new Set();
    // Ordered by where they actually are on the page, not by offsetTop.
    // offsetTop is measured against each element's own offset parent, and these
    // sections do not share one, so the sort silently mixed two coordinate
    // systems: standing in the investors chapter, the bar lit "Living worlds" —
    // chapter four — because #technology sorted last of the ones scrolled past.
    const docTop = (el) => el.getBoundingClientRect().top + window.scrollY;
    const sections = [...linksFor.keys()].sort((a, b) => docTop(a) - docTop(b));

    const mark = () => {
        // The topmost section still on screen is the one being read. Nothing
        // stands in for it when there is none.
        const current = sections.filter((s) => visible.has(s))[0];
        const passedMark = window.innerHeight * 0.4;

        links.forEach((a) => {
            a.removeAttribute('aria-current');
            a.removeAttribute('data-passed');
        });
        sections.forEach((s) => {
            if (s !== current && s.getBoundingClientRect().top < passedMark) {
                linksFor.get(s).forEach((a) => a.setAttribute('data-passed', 'true'));
            }
        });
        if (current) linksFor.get(current).forEach((a) => a.setAttribute('aria-current', 'true'));

        drawVein(vein);
        drawCount(count);
    };

    // The observer only fires when a section CROSSES the reading band, while
    // the passed state and the vein both ask where the reader is right now.
    // Between two named chapters nothing crosses, so without this the bar
    // froze for the whole of an unnamed chapter.
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
