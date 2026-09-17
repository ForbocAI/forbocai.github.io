/**
 * Header Component
 * Pure function returning the header HTML string.
 */
const LINKS = [
    { href: '#technology', label: 'Character layer', internal: true },
    { href: '#souls', label: 'Souls', internal: true },
    { href: '#roadmap', label: 'Roadmap', internal: true },
    { href: 'https://docs.forboc.ai', label: 'Docs', internal: false },
    { href: '#investors', label: 'Investors', internal: true },
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
