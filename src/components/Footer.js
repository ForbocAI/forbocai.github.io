const GROUPS = [
    {
        label: 'Product',
        links: [
            ['#product', 'See it in a scene'],
            ['#platform', 'Platform'],
            ['#vision', 'The future'],
            ['#scenes', 'One turn, line by line'],
        ],
    },
    {
        label: 'Developers',
        links: [
            ['#developers', 'Get started'],
            ['#dev-technology', 'Technology'],
            ['https://docs.forboc.ai', 'Documentation'],
            ['https://docs.forboc.ai/ue/welcome', 'Unreal Engine guide'],
            ['https://www.npmjs.com/org/forbocai', 'npm packages'],
            ['https://account.forboc.ai', 'Account and API keys'],
        ],
    },
    {
        label: 'Company',
        links: [
            ['#company', 'Company & investors'],
            ['#whitepaper', 'Whitepaper'],
            ['#pitch/1', 'Vision deck'],
            ['https://wellfound.com/company/forboc-ai', 'Careers'],
            ['https://solscan.io/token/7zwfQkkPv9aUF6VXA8CbZabJYpXCRJTYbQnjxjynpump', '$FAI'],
        ],
    },
    {
        label: 'Community',
        links: [
            ['https://discord.gg/6hr2jHqnsG', 'Discord'],
            ['https://github.com/ForbocAI', 'GitHub'],
            ['https://x.com/ForbocAi', 'X'],
            ['https://www.linkedin.com/company/forbocai', 'LinkedIn'],
            ['https://t.me/forbocai', 'Telegram'],
        ],
    },
];

const link = ([href, label]) => href.startsWith('#')
    ? `<a href="${href}">${label}</a>`
    : `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export const Footer = () => `
    <footer class="site-footer">
        <div class="wrap">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a class="brand" href="#" aria-label="ForbocAI home">
                        <span class="brand-icon" aria-hidden="true"></span>
                        <span class="brand-word">ForbocAI</span>
                    </a>
                    <p>AI infrastructure for game characters.</p>
                    <a class="footer-mail" href="mailto:hello@forboc.ai">hello@forboc.ai</a>
                </div>
                ${GROUPS.map((g) => `
                <nav class="footer-group" aria-label="${g.label}">
                    <p class="footer-label">${g.label}</p>
                    ${g.links.map(link).join('')}
                </nav>`).join('')}
            </div>
            <p class="footer-copy">&copy; 2026 ForbocAI, Inc. All rights reserved. Servitor™ is a trademark of ForbocAI, Inc.</p>
        </div>
    </footer>
`;
