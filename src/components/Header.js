/**
 * Header Component
 * Pure function returning the header HTML string.
 */
export const Header = (props) => {
    return `
    <header>
        <div class="container">
            <nav aria-label="Primary">
                <div class="logo">
                     <a href="#">
                        <div class="logo-icon"></div>
                        <span class="badge">ForbocAI</span>
                     </a>
                </div>
                <div class="nav-links">
                    <a href="#technology" class="nav-btn" data-link>Hearth</a>
                    <a href="#vision" class="nav-btn" data-link>Soul Garden</a>
                    <a href="#roadmap" class="nav-btn" data-link>Roadmap</a>
                    <a href="https://pump.fun/coin/7zwfQkkPv9aUF6VXA8CbZabJYpXCRJTYbQnjxjynpump" class="nav-btn" target="_blank" rel="noopener noreferrer">$FAI</a>
                    <a href="#investors" class="nav-btn" data-link>Investors</a>
                </div>
                <button
                    class="mobile-menu-toggle"
                    id="mobileMenuToggle"
                    aria-label="Toggle mobile menu"
                    aria-controls="mobileNav"
                    aria-expanded="false"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <span class="header-runes" aria-hidden="true">ᚠ ᛟ ᚱ ᛒ ᛟ ᚲ ᛫ ᛚ ᚨ ᚾ ᛏ ᛖ ᚱ ᚾ ᛫ ᚹ ᛟ ᚱ ᛚ ᛞ</span>
                <div class="lantern-mote" aria-hidden="true"></div>
            </nav>
        </div>
    </header>
    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile" aria-hidden="true">
        <a href="#technology" class="mobile-nav-link" data-link>Hearth</a>
        <a href="#vision" class="mobile-nav-link" data-link>Soul Garden</a>
        <a href="#roadmap" class="mobile-nav-link" data-link>Roadmap</a>
        <a href="https://pump.fun/coin/7zwfQkkPv9aUF6VXA8CbZabJYpXCRJTYbQnjxjynpump" class="mobile-nav-link" target="_blank" rel="noopener noreferrer">$FAI</a>
        <a href="#investors" class="mobile-nav-link" data-link>Investors</a>
    </nav>
    `;
};
