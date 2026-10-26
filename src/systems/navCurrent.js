import { selectCurrentPage } from '../domains/navigationSlice.js';

let watchers = [];

const watch = (links, onPage) => {
    const sectionFor = new Map();
    links.forEach((link) => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) sectionFor.set(section, link);
    });
    if (!sectionFor.size || typeof IntersectionObserver === 'undefined') return;

    const visible = new Set();
    const mark = () => {
        const current = [...visible].sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];
        links.forEach((link) => link.removeAttribute('aria-current'));
        if (current) onPage(sectionFor.get(current).getAttribute('href'));
    };

    const watcher = new IntersectionObserver((entries) => {
        entries.forEach((entry) => (entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target)));
        mark();
    }, { rootMargin: '-35% 0px -55% 0px' });

    sectionFor.forEach((_link, section) => watcher.observe(section));
    watchers.push(watcher);
};

const markHref = (selector, href) => {
    document.querySelectorAll(selector).forEach((link) => {
        if (link.getAttribute('href') === href) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
    });
};

export const setupNavCurrent = (state) => {
    watchers.forEach((w) => w.disconnect());
    watchers = [];

    const navLinks = '.header-link, .mobile-nav-link';
    const page = selectCurrentPage(state);

    if (page === 'developers') {
        markHref(navLinks, '#developers');
        return;
    }

    if (page === 'company') {
        markHref(navLinks, '#company');
        watch([...document.querySelectorAll('.co-contents a')], (href) => markHref('.co-contents a', href));
        return;
    }

    if (page !== 'index') {
        markHref(navLinks, null);
        return;
    }

    watch([...document.querySelectorAll('.header-link[href^="#"]')], (href) => markHref(navLinks, href));
};
