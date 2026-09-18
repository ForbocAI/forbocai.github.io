import { Lantern } from './Lantern.js';
import { Deeper } from './Deeper.js';

/**
 * Vision Component
 *
 * Two sections, in this order on purpose. Paid access to the Protocol and
 * Servitor together is the business; Souls are what a character becomes once she has somewhere to go.
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
                    <h2>Paid access to all three is the business</h2>
                    <p class="chapter-lead"><strong>The unit is one character judgment: her reasoning, her line and what she proposes to do, arriving together.</strong> Every studio shipping a cast is already paying to write these people by hand, one branch at a time, and throwing most of that spend away on paths a player never walks.</p>
                </div>
            </header>

            <p class="soul-market"><strong>The people are the one surface of a game nobody has finished.</strong> That spend is already in the building, already annual, and it has nowhere else to go.</p>

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
                    <h2>The third pillar: tradable NPCs</h2>
                    <p class="chapter-lead"><strong>Servitor™ makes her someone. The Protocol lets her act inside a world that stays yours. The third is that she can be owned, carried and traded — and none of the three is complete without the others.</strong></p>
                </div>
            </header>

            <p class="soul-decouple"><strong>The player does not carry an image of who Maeve was. They carry the history of who she became with them.</strong> A Soul is that history made portable: an opt-in, encrypted record of identity, memory, relationships and temperament, which a receiving title inspects, verifies and admits on its own terms.</p>

            <p class="soul-card"><strong>People have spent decades paying for characters they can keep, and every one of them was a picture.</strong> A card preserves who a character is. A tradable NPC carries who she became with you — what she refused, who she trusted, and the argument she is still having because of something you did in somebody else's game.</p>

            <p class="soul-market">That is the whole ecology closing: a person, a law she enters worlds through, and an owner. Take any one away and the other two are a demo. Together they are the first character who is somebody, is safe to ship, and belongs to the player who made her that way.</p>

            <aside class="soul-economy">
                <h3>What $FAI is</h3>
                <p><strong>Two studios competing for the same player will not keep each other's canon.</strong> Neither will run the other's server, or take the other's word that a character arrived carrying what she claims to carry. A character crossing between rivals has to be checkable somewhere neither of them owns.</p>
                <p><strong>$FAI is that place.</strong> It records that this history is the history, so a receiving world can verify before it admits her. Ownership needs a registry the way judgment needs a law.</p>
                <div class="hero-buttons">
                    <a href="#whitepaper" class="btn btn-primary" data-link>Read the architecture</a>
                    <a href="#wp-gates" class="text-link" data-link>Read the Standard</a>
                </div>
            </aside>
        </div>
    </section>
    `;
};
