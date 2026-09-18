import { Lantern } from './Lantern.js';
import { Deeper } from './Deeper.js';

/**
 * Vision Component
 *
 * Two sections, in this order on purpose. Paid access to Servitor is the
 * business; Souls are what a character becomes once she has somewhere to go.
 * When the business sat inside the Soul chapter, the heading hierarchy said the
 * business was the token, and no inline sentence can undo a heading.
 */
export const Vision = () => {
    return `
    <section id="business" class="chapter chapter-night">
        ${Lantern({ className: "lantern-gate", size: 0.75, tone: "bright" })}
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛃ</span>
                <div>
                    <h2>Paid access to Servitor™ is the business</h2>
                    <p class="chapter-lead"><strong>The unit is one character judgment, priced in ordinary money and needing no wallet.</strong> Every studio shipping a cast is already paying to write these people by hand, one branch at a time, and throwing most of that spend away on paths a player never walks.</p>
                </div>
            </header>

            <p class="soul-market"><strong>That habit is <a href="https://newzoo.com/" target="_blank" rel="noopener noreferrer">$188&nbsp;billion</a> wide.</strong> The people are the one surface of a game nobody has finished, and they are the one studios pay the most to fake.</p>

            ${Deeper({
                summary: 'How we are reading that number',
                body: `<p class="soul-market">As the whole medium, not an addressable slice, and we will not pretend a share of it. <a href="https://newzoo.com/" target="_blank" rel="noopener noreferrer">Newzoo</a> puts it at roughly $188&nbsp;billion in 2025 heading toward $205&nbsp;billion in 2026; what it evidences is the size of the room, not our position in it. What counts as a billable judgment gets bound in the release contract, and that contract is gate four — it goes live with a public price attached, not before.</p>`,
            })}
        </div>
    </section>

    <section id="souls" class="chapter chapter-night">
        ${Lantern({ className: "lantern-souls", size: 1 })}
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛋ</span>
                <div>
                    <h2>A living character does not end at the credits</h2>
                    <p class="chapter-lead"><strong>Servitor™ gives a character room to become specific inside one world.</strong> Souls are the road that earned identity travels to the next one. The format is written, the encryption is built, and the first crossing is gate eleven.</p>
                </div>
            </header>

            <p class="soul-decouple"><strong>A Soul is an opt-in, encrypted record of identity, memory, relationships and temperament.</strong> A receiving title inspects it, verifies it and decides what enters its own canon. No Soul has crossed between two titles yet: gate eleven.</p>

            <p class="soul-card"><strong>A card preserves who a character is. A Soul carries who she became with you.</strong> People have spent decades proving they will pay for identity they can keep — and a card has never once been able to remember them back.</p>

            ${Deeper({
                summary: 'The evidence behind that habit',
                body: `<p class="soul-card"><a href="https://www.gminsights.com/industry-analysis/trading-card-games-market" target="_blank" rel="noopener noreferrer">Global Market Insights sizes the printed trading-card game market at $8.4&nbsp;billion in 2025, growing to $9.2&nbsp;billion in 2026</a>. Read it as evidence of the appetite, not as a forecast of Soul revenue — printed cards are a different product in a different market, and no Soul has crossed between two titles yet.</p>`,
            })}

            <p class="soul-market">The player does not carry an image of who Maeve was. They carry the history of who she became with them — and that history is the asset a studio compounds across seasons, worlds and communities, while every receiving world keeps authority over its own canon, law and state. Gate eleven is where it stops being ours and starts being yours.</p>

            <aside class="soul-economy">
                <h3>What $FAI is for</h3>
                <p><strong>$FAI is a separate, opt-in token on Solana, tradeable today and required by nothing here.</strong> You can license Servitor™, ship a living cast and carry Souls between two of your own titles without ever touching it.</p>
                <p>What it is pointed at is the harder version of gate eleven. When a character crosses between two studios who have no reason to trust each other, her history has to be true somewhere neither of them owns and both can check. That is a question worth a token, and it is the last line on the ledger — gate twenty-four, unclaimed, with everything else we owe.</p>
                <div class="hero-buttons">
                    <a href="#whitepaper" class="btn btn-primary" data-link>Read the architecture</a>
                    <a href="#wp-gates" class="text-link" data-link>See the twenty-four gates</a>
                </div>
            </aside>
        </div>
    </section>
    `;
};
