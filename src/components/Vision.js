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
                    <p class="chapter-lead"><strong>The ForbocAI NPC LM Servitor™ gives a character room to become specific inside one world.</strong> Souls are the road earned identity travels to the next world. The record exists, the encryption exists, and the first crossing is gate eleven.</p>
                </div>
            </header>

            <p class="soul-decouple"><strong>A Soul is an opt-in, encrypted record of identity, memory, relationships and temperament.</strong> A receiving title inspects it, verifies it and decides what enters its own canon. No Soul has crossed between two titles yet: gate eleven.</p>

            <p class="soul-card"><strong>Trading cards made identity collectible, and people have spent decades proving they will pay for it. <a href="https://www.gminsights.com/industry-analysis/trading-card-games-market" target="_blank" rel="noopener noreferrer">Global Market Insights sizes the printed trading-card game market at $8.4&nbsp;billion in 2025, growing to $9.2&nbsp;billion in 2026</a>. A Soul makes that relationship cumulative.</strong> That figure is evidence of the habit, not a forecast of Soul revenue. A static card preserves who a character is. A Soul carries who she trusted, what she refused and the argument she is still having because of one player's choices.</p>

            <p class="soul-market">The player does not carry an image of who Maeve was. They carry the history of who she became with them — and that history is the asset a studio compounds across seasons, worlds and communities, while every receiving world keeps authority over its own canon, law and state. That is the design. Gate eleven is where it stops being ours and starts being yours.</p>

            <aside class="soul-economy">
                ${Lantern({ className: "lantern-gate", size: 0.75, tone: "bright" })}
                <h3>Paid access to Servitor™ is the business</h3>
                <p>The card figures above size the Soul layer, which is not the business, so here is the business sized honestly. <a href="https://newzoo.com/" target="_blank" rel="noopener noreferrer">Newzoo puts the global games market at roughly $188&nbsp;billion in 2025, heading toward $205&nbsp;billion in 2026</a>. That is the whole medium, not an addressable slice, and we will not pretend a share of it: what matters is that the people inside those games are the one surface nobody has finished, and every studio shipping into that number is already paying to write them by hand.</p>
                <p>The unit is one character judgment, priced in ordinary money and needing no wallet. What counts as a billable judgment gets bound in the release contract, and that contract is gate four — it goes live with a public price attached, not before. $FAI is a separate, opt-in token on Solana, tradeable today and required by none of this. Its own usefulness waits at gate twenty-four, same list as everything else we owe.</p>
                <div class="hero-buttons">
                    <a href="#whitepaper" class="btn btn-primary" data-link>Read the architecture</a>
                    <a href="#whitepaper" class="text-link" data-link>What $FAI is for</a>
                </div>
            </aside>
        </div>
    </section>
    `;
};
