export const NAV = [
    { href: '#product', label: 'Product' },
    { href: '#platform', label: 'Platform' },
    { href: '#developers', label: 'Developers' },
    { href: '#company', label: 'Company' },
];

export const CONTACT = 'mailto:hello@forboc.ai?subject=Hello%20ForbocAI';

export const Header = () => `
    <header class="site-header">
        <div class="wrap header-bar">
            <a class="brand" href="#" aria-label="ForbocAI home">
                <span class="brand-icon" aria-hidden="true"></span>
                <span class="brand-word">ForbocAI</span>
            </a>
            <nav class="header-nav" aria-label="Primary">
                ${NAV.map(({ href, label }) => `<a href="${href}" class="header-link">${label}</a>`).join('')}
            </nav>
            <div class="header-end">
                <a href="${CONTACT}" class="button button-primary button-small header-cta">Contact</a>
                <button
                    class="mobile-menu-toggle"
                    id="mobileMenuToggle"
                    type="button"
                    aria-label="Open menu"
                    aria-controls="mobileNav"
                    aria-expanded="false"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile" aria-hidden="true">
        ${NAV.map(({ href, label }) => `<a href="${href}" class="mobile-nav-link">${label}</a>`).join('')}
        <a href="${CONTACT}" class="button button-primary mobile-nav-cta">Contact</a>
    </nav>
`;
