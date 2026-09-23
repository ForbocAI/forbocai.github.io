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
        <div class="container">
            <div class="chapter-spread">
            <header class="chapter-head">
                ${ChapterMark({ rune: 'ᛃ' })}
                <div>
                    <h2>The model. The protocol. The tradable characters.</h2>
                    ${Deeper({
                        summary: 'The size of the room this opens into',
                        body: `<p class="soul-market">The market for AI-generated characters grows from $1.41&nbsp;billion in 2024 to <a href="https://www.globenewswire.com/news-release/2026/01/29/3228744/0/en/Non-Player-Character-NPC-Generation-Artificial-Intelligence-Research-Report-2026-5-51-Bn-Market-Opportunities-Trends-Competitive-Analysis-Strategies-Forecasts-2019-2024-2024-2029F-.html" target="_blank" rel="noopener noreferrer">$5.51&nbsp;billion by 2029</a>, inside a games market of about <a href="https://newzoo.com/" target="_blank" rel="noopener noreferrer">$188&nbsp;billion</a>. That is the room this opens into.</p>`,
                    })}
                </div>
            </header>

            <div class="chapter-body">
            <p class="chapter-lead"><strong>The unit is one character judgment: her reasoning, her line and what she proposes to do, arriving together.</strong> Every studio shipping a cast is already paying to write these people by hand, one branch at a time, and spending most of it on paths no player walks.</p>
            <p class="soul-market"><strong>The people are the one surface of a game nobody has finished.</strong> That spend is already in the building, already annual, and it has nowhere else to go.</p>

            <!-- The four things a studio buyer has to carry back to a producer.
                 Every one of them was already on this site and none of them was
                 findable: the engine paths sat mid-paragraph two chapters away,
                 the team sat on slide twelve of the deck, and the pricing
                 position sat inside the disclosure above — which is why two
                 reviewers read the chapter titled "Paid access to all three is
                 the business" as refusing to answer, and why one of them wrote
                 "I would contact you the day this page has a number on it".
                 Nothing here is a new claim. It is the same claims, where the
                 person who needs them is standing. -->
            <dl class="terms">
                <div>
                    <dt>What it costs</dt>
                    <dd>Studios pay in ordinary money; the price is named to the worlds that come through first.</dd>
                </div>
                <div>
                    <dt>What it runs through</dt>
                    <dd>TypeScript and native Unreal Engine&nbsp;5 paths. Unity and Godot follow, each released when it holds the same contract. Memory writes to storage your studio owns and can read without us, and every action arrives as a proposal your game is free to refuse.</dd>
                </div>
                <div>
                    <dt>The three who hold it</dt>
                    <!-- brochure-commercial-claim-authority.md §12 publishes these
                         roles and biographies; the order is fixed. -->
                    <dd>
                        <ul class="terms-team">
                            <li><strong><a href="https://www.linkedin.com/in/tiernan-o-malley-219591170/" target="_blank" rel="noopener noreferrer">Tiernan O’Malley</a></strong> — co-founder; corporate partnerships and investor relations. Opens markets for a living — cybersecurity and technology at Framework Security, Hays and IDMWORKS — with an MBA underway at Rice Business.</li>
                            <li><strong><a href="https://www.linkedin.com/in/seandinwiddie/" target="_blank" rel="noopener noreferrer">Sean Dinwiddie</a></strong> — founder, president and chair. Architect of the ForbocAI NPC Protocol; builds the API it runs through, Servitor™ from dataset to release, and the TypeScript and Unreal Engine&nbsp;5 SDKs. Three decades of engineering, and games shipped on console and handheld: <em>Call of Duty: Modern Warfare: Mobilized</em>, <em>Spider-Man</em>, <em>X-Men</em>.</li>
                            <li><strong><a href="https://www.linkedin.com/in/antara-bhavsar-74b7a4187/" target="_blank" rel="noopener noreferrer">Antara Bhavsar</a></strong> — co-founder and founding engineer. Engineers the NPC runtime at the heart of the API, the personas that run through it from API to SDK, the model’s training and the Soul’s encrypted transport. Brings production AI and distributed systems from Amazon, Motorola and Indiana University, with a master’s in computer science.</li>
                        </ul>
                    </dd>
                </div>
            </dl>
            </div>
            </div>
        </div>
    </section>

    <section id="souls" class="chapter chapter-night">
        <div class="container">
            <div class="chapter-spread">
            <header class="chapter-head">
                ${ChapterMark({ rune: 'ᛋ' })}
                <div>
                    <h2>Dev born. Player grown. Yours to carry.</h2>
                    ${Deeper({
                        summary: 'What decades of paying for characters prove',
                        body: `<p class="soul-card"><strong>People pay for characters they can keep, and every one of them is a picture.</strong> A card preserves who a character is. A tradable NPC carries who she becomes with you — what she refused, who she trusted, and the argument she is still having because of something you did in somebody else's game.</p>`,
                    })}
                </div>
            </header>

            <div class="chapter-body">
            <p class="chapter-lead"><strong>No one can hand you the third without the first two.</strong> Your writers give her a self worth having. A player spends a hundred hours making it specific. And then she is theirs — carried out of your world and into the next one, still herself.</p>
            <p class="soul-decouple"><strong>The player does not carry an image of who Maeve is. They carry the history of who she becomes with them.</strong> A Soul is that history made portable: a player-owned, encrypted record of identity, memory, relationships and temperament, which a receiving title inspects, verifies and admits on its own terms.</p>
            </div>
            </div>

            <div class="soul-crossing">
                <div class="chapter-spread">
                <header class="chapter-head crossing-head">
                    ${Sigil({ name: 'Maeve Ashlin, Lanternbough', size: 46, tone: 'honey' })}
                    <div>
                        <p class="turn-label">The night she arrives somewhere else</p>
                        <h3>A different studio's world reads her, and keeps its own counsel</h3>
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
  verified: 'soul record, owner-signed',
}</code></pre>`,
                        })}
                    </div>
                </header>
                <div class="chapter-body">
                <p class="soul-market">Two years later, a different studio, a different engine, a harbour town that has never heard of Lanternbough. The player brings her. The receiving world opens the record and decides what it is willing to know.</p>
                <p class="soul-market"><strong>The harbour town throws half of her away, and she is still herself.</strong> It refuses her brother — no such man in this canon — and keeps his request, because that has become hers. Then a stranger on the harbour road asks her to pass something along.</p>
                <pre class="turn-code"><code>// a studio that never heard of Lanternbough
// legalActions: ['tell', 'refuse']
{
  dialogue: "No. Ask me for anything else on this coast and you will have it.",
  reasoningText: "I do not know this man and I owe him nothing either way. But what he wants passed along was given to me to keep, by someone this harbour has never heard of, before I ever stood on this road. A place does not unmake a promise by not knowing about it.",
  action: { type: 'refuse' },
}</code></pre>
                <p class="soul-market"><strong>No character born in that town reaches that.</strong> She refuses a harbour man for the sake of one this world does not admit — inside a law this studio wrote, in a scene neither studio staged. The record is not luggage. It is what she thinks with, and no studio on earth can sell you a character made somewhere else who still walks in.</p>
                </div>
                </div>
            </div>

            <aside class="soul-economy">
                <h3>What $FAI is</h3>
                <p><strong>A character a player carries is a Soul</strong>: her memory, her persona and the history she earned, in a record the player owns. <strong>$FAI is the currency that record lives in.</strong> Souls are minted and grown with it and change hands in it. Creators shape her, studios welcome her, players carry her, and every trade of her runs on $FAI. That economy lives inside Web3 gaming, already $31&nbsp;billion and on its way to <a href="https://www.precedenceresearch.com/web3-gaming-market" target="_blank" rel="noopener noreferrer">$183&nbsp;billion by 2034</a>.</p>
            </aside>
        </div>
    </section>
    `;
};
