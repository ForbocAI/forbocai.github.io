import { Lantern } from './Lantern.js';
import { Deeper } from './Deeper.js';
import { Sigil, ChapterMark } from './Sigil.js';

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
                ${ChapterMark({ rune: 'ᛃ' })}
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
                ${ChapterMark({ rune: 'ᛋ' })}
                <div>
                    <h2>Dev born. Player grown. Yours to carry.</h2>
                    <p class="chapter-lead"><strong>That is the whole of it, and no company on earth can hand you the third without the first two.</strong> Your writers give her a self worth having. A player spends a hundred hours making it specific. And then she is theirs — carried out of your world and into the next one, still herself.</p>
                </div>
            </header>

            <p class="soul-decouple"><strong>The player does not carry an image of who Maeve was. They carry the history of who she became with them.</strong> A Soul is that history made portable: a player-owned, encrypted record of identity, memory, relationships and temperament, which a receiving title inspects, verifies and admits on its own terms.</p>
                ${Deeper({
                    summary: 'What decades of paying for characters already proved',
                    body: `<p class="soul-card"><strong>People have spent decades paying for characters they can keep, and every one of them was a picture.</strong> A card preserves who a character is. A tradable NPC carries who she became with you — what she refused, who she trusted, and the argument she is still having because of something you did in somebody else's game.</p>`,
                })}

            <div class="soul-crossing">
                <p class="turn-label sigil-pair">${Sigil({ name: 'Maeve Ashlin, Lanternbough', size: 46, tone: 'honey' })} The night she arrives somewhere else</p>
                <h3>A different studio's world reads her, and keeps its own counsel</h3>
                <p class="soul-market">Two years later, a different studio, a different engine, a harbour town that has never heard of Lanternbough. The player brings her. The receiving world opens the record and decides what it is willing to know.</p>
                ${Deeper({
                    summary: 'What the harbour town admitted, and what it refused',
                    body: `<pre class="turn-code"><code>// the receiving title inspects, verifies, and rules
{
  admitted: [
    'She keeps a confidence past the point it costs her',
    'This player went north for her once, and came back',
    'She does not open what was asked to stay shut',
  ],
  refused: [
    'Aldren, her brother',        // no such person in this canon
    'the corner room, the inn',   // she owns nothing here
  ],
  verified: 'registry',
}</code></pre>`,
                })}
                <p class="soul-market"><strong>The harbour town threw half of her away, and she is still herself.</strong> It refused her brother — there is no such man in this canon — and it kept his request, because that had become hers. She is still not opening what was asked to stay shut, for a man this world has never heard of. She has no inn on this coast, and she went north for this player once.</p>
                <p class="soul-market">Then a stranger on the harbour road asks her to pass something along, and the world that refused her brother finds out what it admitted.</p>
                <pre class="turn-code"><code>// a studio that never heard of Lanternbough
// legalActions: ['tell', 'refuse']
{
  dialogue: "No. Ask me for anything else on this coast and you will have it.",
  reasoningText: "I do not know this man and I owe him nothing either way. But what he wants passed along was given to me to keep, by someone this harbour has never heard of, before I ever stood on this road. A place does not unmake a promise by not knowing about it.",
  action: { type: 'refuse' },
}</code></pre>
                <p class="soul-market"><strong>No character born in that town could have reached that.</strong> She refused a harbour man for the sake of one this world refused to admit — reasoning from the half that survived the crossing, inside a law this studio wrote, in a scene neither studio staged. The record was never luggage. It is what she thinks with.</p>

                <p class="soul-market"><strong>Dev born, player grown, and carried out.</strong> The registry is how this town knew the record was hers and not a story the player typed. Its own canon is how it knew what to refuse. Take any one away and the other two are a demo — and standing in the harbour is a character no studio on earth can sell you today, at any price, because she was made somewhere else and she still walked in.</p>
            </div>

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
