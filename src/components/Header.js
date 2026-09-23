/**
 * Header Component
 * Pure function returning the header HTML string.
 */
const LINKS = [
    { href: '#servitor', label: 'Servitor™', internal: true },
    /* In PAGE order. #technology comes before #turn in the document, and the
       bar listed them the other way round, so as a reader scrolled forward the
       lamp moved LEFT and a chapter already behind them sat to the right of the
       one they were in. A reviewer read it as the nav contradicting itself:
       "the lamp goes Living worlds, One choice, Living worlds while I scroll
       forward. Navigation moving backwards." Passed-and-current only mean
       anything against a bar that runs the way the page does. */
    { href: '#technology', label: 'Living worlds', internal: true },
    { href: '#turn', label: 'One choice', internal: true },
    { href: '#roadmap', label: 'Horizons', internal: true },
    { href: '#investors', label: 'Investors', internal: true },
    { href: 'https://docs.forboc.ai', label: 'Docs', internal: false },
    { href: '#whitepaper', label: 'Whitepaper', internal: true },
    { href: '#pitch/1', label: 'Vision deck', internal: true },
];

const link = ({ href, label, internal }, className) => internal
    ? `<a href="${href}" class="${className}" data-link>${label}</a>`
    : `<a href="${href}" class="${className}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export const Header = () => {
    return `
    <header class="site-header">
        <div class="container">
            <nav aria-label="Primary">
                <a class="logo" href="#">
                    <span class="logo-icon" aria-hidden="true"></span>
                    <span class="logo-word">ForbocAI</span>
                </a>
                <!-- Which chapter of how many. Seven nav items name ten
                     chapters, so four consecutive chapters — 40% of the essay,
                     and the darkest, most disorienting stretch of it — could
                     never light a lamp whatever the marking rules were. Both
                     reviewers led on it twice: "the navigation says you have
                     passed everything and you are nowhere", "I stopped looking
                     at the header after chapter 7 because it stopped
                     changing."
                     A count answers for every chapter, named or not, and on
                     every shape including the one with no room for a word. It
                     is also the device both reviewers already singled out as
                     working elsewhere on this site — "1 / 13 instantly legible
                     as a deck". src/systems/navCurrent.js fills it. -->
                <p class="read-count" aria-live="polite"><span class="read-at"></span><span class="read-of"></span></p>
                <div class="nav-links">
                    ${LINKS.map((l) => link(l, 'nav-btn')).join('')}
                </div>
                <a href="mailto:hello@forboc.ai" class="btn btn-small nav-cta">Talk to us</a>
                <button
                    class="mobile-menu-toggle"
                    id="mobileMenuToggle"
                    aria-label="Open menu"
                    aria-controls="mobileNav"
                    aria-expanded="false"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </div>
    </header>
    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile" aria-hidden="true">
        ${LINKS.map((l) => link(l, 'mobile-nav-link')).join('')}
        <a href="mailto:hello@forboc.ai" class="mobile-nav-link">Talk to us</a>
    </nav>
    `;
};
