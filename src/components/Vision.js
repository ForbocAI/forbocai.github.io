import { Lantern } from './Lantern.js';

/**
 * Vision Component
 * The living-character economy, extending outward from Servitor without
 * surrendering the receiving world's authorship.
 */
export const Vision = () => {
    return `
    <section id="souls" class="chapter chapter-night">
        ${Lantern({ className: "lantern-souls", size: 1 })}
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛋ</span>
                <div>
                    <h2>A living character does not end at the credits</h2>
                    <p class="chapter-lead"><strong>The ForbocAI NPC LM Servitor™ gives a character room to become specific inside one world.</strong> Souls are the path that earned identity travels to the next world—designed, in development, and gated on carrying one end to end between two titles before we claim it.</p>
                </div>
            </header>

            <p class="soul-decouple"><strong>The Soul layer is in active development now:</strong> an opt-in, encrypted record of identity, memory, relationships and temperament. A receiving title would inspect it, verify it and decide what enters its own canon. None of that has happened yet—no Soul has crossed between two titles, which is gate eleven.</p>

            <p class="soul-card"><strong>Trading cards made identity collectible, and people have spent decades proving they will pay for it. <a href="https://www.gminsights.com/industry-analysis/trading-card-games-market" target="_blank" rel="noopener noreferrer">Global Market Insights sizes the printed trading-card game market at $8.4&nbsp;billion in 2025, growing to $9.2&nbsp;billion in 2026</a>. Souls would make that relationship cumulative.</strong> That figure is evidence of the habit, not a forecast of Soul revenue. A static card preserves who a character is. A Soul carries who she trusted, what she refused and the argument she is still having because of one player's choices.</p>

            <p class="soul-market">The player does not merely carry an image of who Maeve was. They carry the history of who she became with them. The asset a studio would be compounding across seasons, worlds and communities is that history, and every receiving world would keep authority over canon, law and game state. That is the design; the gate is what turns it into a claim.</p>

            <aside class="soul-economy">
                ${Lantern({ className: "lantern-gate", size: 0.75, tone: "bright" })}
                <h3>Paid access to Servitor™ is the business</h3>
                <p>The unit is one character judgment, priced in ordinary money and needing no wallet. What counts as a billable judgment gets bound in the release contract, and that contract is gate four — it goes live with a public price attached, not before. $FAI is a separate, opt-in token on Solana. It is tradeable today; the Soul continuity it is intended to serve is in development behind gate eleven, and none of the above requires either.</p>
                <div class="hero-buttons">
                    <a href="#whitepaper" class="btn btn-primary" data-link>Read the architecture</a>
                    <a href="#whitepaper" class="text-link" data-link>What $FAI is for</a>
                </div>
            </aside>
        </div>
    </section>
    `;
};
