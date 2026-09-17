/**
 * Footer Component
 * Deepest night. Four even columns so nothing floats.
 */
export const Footer = () => {
    return `
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a class="logo" href="#">
                        <span class="logo-icon" aria-hidden="true"></span>
                        <span class="logo-word">ForbocAI</span>
                    </a>
                    <p class="footer-tagline">Characters who remember, act inside your rules, and can be carried onward.</p>
                </div>

                <nav class="footer-link-group" aria-label="Product">
                    <p class="footer-group-label">Product</p>
                    <a href="https://docs.forboc.ai" target="_blank" rel="noopener noreferrer">Developer docs</a>
                    <a href="#technology" data-link>The character layer</a>
                    <a href="#turn" data-link>One turn, end to end</a>
                    <a href="#whitepaper">Whitepaper</a>
                    <a href="https://pump.fun/coin/7zwfQkkPv9aUF6VXA8CbZabJYpXCRJTYbQnjxjynpump" target="_blank" rel="noopener noreferrer">$FAI</a>
                </nav>

                <nav class="footer-link-group" aria-label="Company">
                    <p class="footer-group-label">Company</p>
                    <a href="#investors" data-link>Investors</a>
                    <a href="#pitch/1">Seed deck</a>
                    <a href="mailto:hello@forboc.ai">hello@forboc.ai</a>
                    <a href="https://wellfound.com/company/forboc-ai" target="_blank" rel="noopener noreferrer">Careers</a>
                </nav>

                <nav class="footer-link-group" aria-label="Elsewhere">
                    <p class="footer-group-label">Elsewhere</p>
                    <a href="https://discord.gg/6hr2jHqnsG" target="_blank" rel="noopener noreferrer">Discord</a>
                    <a href="https://x.com/ForbocAi" target="_blank" rel="noopener noreferrer">Twitter / X</a>
                    <a href="https://github.com/ForbocAI" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/company/forbocai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </nav>
            </div>

            <p class="footer-copy">&copy; 2026 ForbocAI, Inc. All rights reserved.</p>
        </div>
    </footer>
    `;
};
