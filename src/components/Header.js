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
                     <a href="index.html">
                        <div class="logo-icon"></div>
                        <span class="badge">Forboc</span> AI
                     </a>
                </div>
                <!-- Simulating the function buttons -->
                <div class="nav-links hardware-controls">
                    <a href="index.html#technology" class="nav-btn" data-link>Technology</a>
                    <a href="index.html#vision" class="nav-btn" data-link>Vision</a>
                    <a href="index.html#roadmap" class="nav-btn" data-link>Roadmap</a>
                    <a href="index.html#investors" class="nav-btn" data-link>Investors</a>
                </div>
                <div class="status-led"></div>
            </nav>
        </div>
    </header>
    `;
};
