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

            <p class="soul-market"><strong>The people are the one surface of a game nobody has finished, and the one studios pay the most to fake.</strong> That spend is already in the building, already annual, and it buys branches that a player walks one path through. It has nowhere else to go.</p>

            ${Deeper({
                summary: 'The size of that room, and how we read it',
                body: `<p class="soul-market"><a href="https://newzoo.com/" target="_blank" rel="noopener noreferrer">Newzoo puts the global games market at roughly $188&nbsp;billion in 2025, heading toward $205&nbsp;billion in 2026</a>. That is the whole medium, not an addressable slice, and we will not pretend a share of it — it evidences the size of the room, not our position in it. What counts as a billable judgment gets bound in the release contract, and that contract goes live with a public price attached, not before.</p>`,
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
                    <p class="chapter-lead"><strong>Servitor™ gives a character room to become specific inside one world.</strong> Souls are the road that earned identity travels to the next one. The format is written and the encryption is built.</p>
                </div>
            </header>

            <p class="soul-decouple"><strong>A Soul is an opt-in, encrypted record of identity, memory, relationships and temperament.</strong> A receiving title inspects it, verifies it and decides what enters its own canon — the receiving world keeps every say over what it admits.</p>

            <p class="soul-card"><strong>A card preserves who a character is. A Soul carries who she became with you.</strong> People have spent decades proving they will pay for identity they can keep — and a card has never once been able to remember them back.</p>

            ${Deeper({
                summary: 'The evidence behind that habit',
                body: `<p class="soul-card"><a href="https://www.gminsights.com/industry-analysis/trading-card-games-market" target="_blank" rel="noopener noreferrer">Global Market Insights sizes the printed trading-card game market at $8.4&nbsp;billion in 2025, growing to $9.2&nbsp;billion in 2026</a>. Read it as evidence of the appetite, not as a forecast of Soul revenue — printed cards are a different product in a different market.</p>`,
            })}

            <p class="soul-market">The player does not carry an image of who Maeve was. They carry the history of who she became with them — and that history is the asset a studio compounds across seasons, worlds and communities, while every receiving world keeps authority over its own canon, law and state. The crossing is where it stops being ours and starts being yours.</p>

            <aside class="soul-economy">
                <h3>What $FAI is for</h3>
                <p><strong>When a character crosses between two studios with no reason to trust each other, her history has to be true somewhere neither of them owns and both can check.</strong> That is the question $FAI is pointed at: a separate, opt-in token on Solana, and the last line on the standard.</p>
                <div class="hero-buttons">
                    <a href="#whitepaper" class="btn btn-primary" data-link>Read the architecture</a>
                    <a href="#wp-gates" class="text-link" data-link>See the standard</a>
                </div>
            </aside>
        </div>
    </section>
    `;
};
