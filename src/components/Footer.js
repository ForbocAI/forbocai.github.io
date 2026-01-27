/**
 * Footer Component
 * Pure function returning the existing footer HTML string.
 */
export const Footer = () => {
    return `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="logo">
                    <div class="logo-icon"></div>
                    Forboc<span>AI</span>
                </div>
                <p class="footer-copy">&copy; 2026 Forboc AI Systems. All rights reserved.</p>
                <div class="socials">
                    <a href="https://x.com/ForbocAi" target="_blank" rel="noopener noreferrer">Twitter/X</a>
                    <a href="https://github.com/ForbocAI" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/company/111540626" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://wellfound.com/company/forboc-ai" target="_blank" rel="noopener noreferrer">Wellfound</a>
                </div>
            </div>
        </div>
    </footer>
    `;
};
