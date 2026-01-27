/**
 * Header Component
 * Pure function returning the header HTML string.
 */
export const Header = (props) => {
    return `
    <header>
        <div class="container">
            <nav>
                <div class="logo">
                     <a href="#">
                        <div class="logo-icon"></div>
                        <span class="badge">Forboc</span> AI
                     </a>
                </div>
                <!-- Desktop Navigation -->
                <div class="nav-links hardware-controls">
                    <a href="#technology" class="nav-btn" data-link>Technology</a>
                    <a href="#vision" class="nav-btn" data-link>Vision</a>
                    <a href="#roadmap" class="nav-btn" data-link>Roadmap</a>
                    <a href="https://pump.fun/coin/7zwfQkkPv9aUF6VXA8CbZabJYpXCRJTYbQnjxjynpump" class="nav-btn" target="_blank" style="color: var(--accent-color);">$FAI</a>
                    <a href="#investors" class="nav-btn" data-link>Investors</a>
                </div>
                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle mobile menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="status-led"></div>
            </nav>
        </div>
    </header>
    <!-- Mobile Navigation Overlay -->
    <nav class="mobile-nav" id="mobileNav">
        <a href="#technology" class="mobile-nav-link" data-link>Technology</a>
        <a href="#vision" class="mobile-nav-link" data-link>Vision</a>
        <a href="#roadmap" class="mobile-nav-link" data-link>Roadmap</a>
        <a href="https://pump.fun/coin/7zwfQkkPv9aUF6VXA8CbZabJYpXCRJTYbQnjxjynpump" class="mobile-nav-link" target="_blank" style="color: var(--accent-blue);">$FAI</a>
        <a href="#investors" class="mobile-nav-link" data-link>Investors</a>
    </nav>
    `;
};
