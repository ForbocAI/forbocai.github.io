// The whitepaper is a 4,800px document with a five-item contents rail. A rail
// that never says where you are is five links, so mark the section the reader
// is actually in — the same aria-current the deck's slide nav already uses.
let contentsWatcher = null;

export const setupDocContents = () => {
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
