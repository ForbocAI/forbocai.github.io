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
                    <p class="chapter-lead"><strong>The ForbocAI NPC LM Servitor™ gives a character room to become specific inside one world.</strong> Souls carry that earned identity toward every new world that chooses to receive it.</p>
                </div>
            </header>

            <p class="soul-decouple"><strong>The Soul layer is in active development now:</strong> an opt-in, encrypted record of identity, memory, relationships and unresolved history. A receiving title can inspect it, verify it and decide what enters its own canon.</p>

            <p class="soul-card"><strong>Trading cards made identity collectible, and people have spent decades proving they will pay for it—<a href="https://www.gminsights.com/industry-analysis/trading-card-games-market" target="_blank" rel="noopener noreferrer">a roughly $9&nbsp;billion market in 2026 forecast to reach $16.9&nbsp;billion by 2035</a>. Souls make that relationship cumulative.</strong> That figure is evidence of the habit, not a forecast of Soul revenue. A static card preserves who a character is. A Soul carries who she trusted, what she refused and the argument she is still having because of one player's choices.</p>

            <p class="soul-market">The player does not merely carry an image of who Maeve was. They carry the history of who she became with them. Studios gain a compounding creative asset across seasons, worlds and communities while every receiving world keeps authority over canon, law and game state.</p>

            <aside class="soul-economy">
                ${Lantern({ className: "lantern-gate", size: 0.75, tone: "bright" })}
                <h3>Paid access to Servitor™ is the business</h3>
                <p>The unit of sale is one character judgment, priced in ordinary money and needing no wallet. The billable event is bound in the release contract before any of it goes live. $FAI is a separate, opt-in layer around Soul continuity—live now, advancing as that continuity does, and required for none of the above.</p>
                <div class="hero-buttons">
                    <a href="#whitepaper" class="btn btn-primary" data-link>Read the architecture</a>
                    <a href="https://pump.fun/coin/7zwfQkkPv9aUF6VXA8CbZabJYpXCRJTYbQnjxjynpump" class="text-link" target="_blank" rel="noopener noreferrer">$FAI on pump.fun</a>
                </div>
            </aside>
        </div>
    </section>
    `;
};
