/**
 * Whitepaper Component
 * The public brief. Benefits and boundaries, no internals.
 */
export const Whitepaper = () => {
    return `
    <article class="doc">
        <div class="container">
            <header class="doc-head">
                <p class="kicker">Whitepaper</p>
                <h1>Characters who decide, inside worlds that still hold.</h1>
                <p class="doc-meta">ForbocAI, Inc. — Version 1.1, September 2026</p>
            </header>

            <div class="doc-shell">
            <div class="doc-body">
                <section id="wp-summary">
                    <h2>1. Summary</h2>
                    <p>Games taught worlds to look alive. Open-ended intelligence is already inside them. The strategic question is no longer whether it arrives, but whether it lives there as an ungoverned voice or as people who can meet the unforeseen and still belong.</p>
                    <p><strong>ForbocAI, Inc. creates Character Intelligence—the intelligence of people who belong to a world.</strong> The ForbocAI NPC LM Servitor™ interprets identity, memory, motive, relationships and world evidence to make the character judgment. The ForbocAI NPC Protocol gives Servitor™ a lawful place inside the game while the world keeps authority over every consequence. Memory is evidence. Judgment is intelligence. The living cast begins inside that boundary.</p>
                </section>

                <section id="wp-problem">
                    <h2>2. The problem</h2>

                    <h3>2.1 The scripted ceiling</h3>
                    <p>Behaviour trees and finite state machines are predictable and debuggable, but authored coverage is finite. Once a player reaches beyond it, the character has no new decision to make. Memory alone does not solve that: remembering hour three matters only if the evidence can change what the character chooses in hour forty.</p>

                    <h3>2.2 Freeform drift</h3>
                    <p>Dropping a general model into a playable system trades one failure for three:</p>
                    <ul>
                        <li><strong>Latency.</strong> A round trip that reads fine in a chat window is a broken beat in live play.</li>
                        <li><strong>Cost.</strong> A model demo says nothing about unit economics at a shipped title's concurrency. What we can state is the shape: one character judgment is one call. The dialogue, the reasoning behind it and the structured action come back from the same attempt—not a chain of calls per line, not a re-roll to get a parseable action, not a second request to explain the first. Concurrency and unit economics remain a gate; the call count per decision does not.</li>
                        <li><strong>Incoherence.</strong> A model that lacks inventory evidence can propose an item the player never had.</li>
                    </ul>
                    <p>These are production questions, not prompts to polish. The protocol makes the decision boundary inspectable while the commercial and performance proofs are qualified in the open.</p>
                </section>

                <section id="wp-layer">
                    <h2>3. Character Intelligence</h2>
                    <p>Servitor™ is the intelligence. The Protocol is the law that admits its judgment into an authored world. We separate what the character expresses from what the game permits, then reconnect the two through separate reply and action checks. Your game remains truth.</p>

                    <h3>3.1 Where the thinking happens</h3>
                    <p>Studios invoke Servitor™ through the ForbocAI NPC Protocol; the model reasons in ForbocAI infrastructure rather than being packaged as a client runtime. The trade is equally plain: active cognition requires a network connection.</p>
                    <p>The hierarchy is deliberate: Servitor™ makes the judgment; the Protocol defines its authority boundary; the API carries the exchange; the SDK makes that exchange native to game code; the game applies only the effects its contracts admit.</p>
                    <p>Latency is a trap networked cognition inherits rather than escapes. Servitor™ runs under a hard server-side deadline. If it cannot finish and produce a reply that meets the required rules in time, the turn comes back explicitly marked invalid, and an invalid turn authorizes nothing: no action, no memory write, no change to your state. That hard deadline and typed boundary are testable now. Typical and worst-case response times, measured by region, become public only after they are measured end to end through a real integration.</p>
                    <p>Paid access to Servitor™ is in commercial qualification in standard currency, not tokens. Its release contract must bind the billable event, quotas, overage behavior, public price, production capacity and unit economics before those claims go live.</p>

                    <h3>3.2 Actions are proposed, not performed</h3>
                    <p>Servitor™ proposes structured intent; the Protocol defines how it is checked against studio-supplied contracts; the SDK carries those checks into game code; the game alone decides what moves on screen.</p>
                    <p class="doc-aside">A character can improvise the performance. She cannot improvise the world.</p>
                    <p>The reply and any proposed action are checked separately. Transport failures reject the request. A server deadline miss or a reply that fails its required rules makes Finalize return a typed invalid result. Proposed actions that fail the studio's rules are not applied. None can authorize a memory write or state change, and the game owns the fallback. These checks alone do not guarantee factual accuracy, moderation or console certification.</p>

                    <h4>Entities, state, and world rules</h4>
                    <p>An entity-component system, an object graph, or a simulation you built yourself — the principle does not change. Character reasoning has to stay grounded in whatever data model actually drives your world. The validation step enforces that for actions, which is why a proposal your rules reject never touches state. It does not enforce it for prose: a character can still say something about your world that is untrue, and we do not claim otherwise.</p>

                    <h4>Beyond dialogue</h4>
                    <p>Speech is the visible part. The same layer carries the rest of a character's cognitive surface:</p>
                    <ul>
                        <li><strong>Decisions.</strong> Moves, trades, follow-ups, and social actions arrive as structured intent, not prose to be parsed.</li>
                        <li><strong>Evidence.</strong> Prior events, relationships and local context are what the character reasons from — not trivia she can mention, but the grounds on which she decides differently in hour forty than she would have in hour three.</li>
                        <li><strong>Continuity of feeling.</strong> Mood, trust, and whatever other signals you author shape what she does next, and only then how she says it.</li>
                    </ul>

                    <h3>3.3 Memory stays with your studio</h3>
                    <p>ForbocAI returns a memory-write instruction. Your build applies it to a local store your studio controls and can read without us. Neither game-owned world state nor that studio-controlled memory becomes ForbocAI training data. The separate, opt-in Soul path described below would send locally encrypted character ciphertext to a configured storage provider; it is not part of a title that never invokes it.</p>

                    <h3>3.4 Ghost</h3>
                    <p>Procedural and adaptive systems can outrun manually authored test paths. The internal harness already drives test worlds during Servitor™ qualification. Turning those runs into producer-facing reports on dead ends, unreachable states and social-loop coverage is in development, and the producers are ours until an external studio clears its gate. Production-value qualification controls release.</p>

                    <h3>3.5 The production ledger</h3>
                    <p><strong>Working now in ForbocAI evaluation environments:</strong> Servitor™ through the ForbocAI NPC Protocol; TypeScript and native Unreal Engine 5 interfaces; memory writes to studio-controlled local storage; structured action proposals; reply checks; action checks; internal test worlds; and an exact model and runtime build recorded internally.</p>
                    <p><strong>Production authority requires explicit gates:</strong> external-studio evidence, a current passing public named-alternative comparison, regional end-to-end latency, production concurrency and unit economics, authored outage behavior, moderation or console certification, customer-selected release pinning, a contractual support window, source continuity, producer-facing Ghost reports and end-to-end Souls. None is claimed until its gate clears.</p>
                </section>

                <section id="wp-souls">
                    <h2>4. The Soul economy</h2>
                    <p class="doc-aside"><strong>$FAI is live. Soul continuity is opt-in and in active development; neither is required for paid access to Servitor™.</strong></p>
                    <p>A card preserves who a character is. The Soul layer is designed to carry the history a player and character made together. We are assembling the opt-in record — identity, memory, relationships and temperament — while every receiving title decides what enters. Accumulated specificity, not artificial scarcity, is the value being built.</p>
                    <ul>
                        <li><strong>Player value.</strong> A character can retain earned specificity instead of resetting to a template at every title boundary.</li>
                        <li><strong>Studio authority.</strong> Gather, encrypt, upload, verify, restore — every participating title still chooses what its technical, moderation and rights rules admit.</li>
                        <li><strong>Current development.</strong> Character records, cross-title restoration, minting and upgrades form the active track; marketplace operations follow participating titles rather than lead them.</li>
                    </ul>

                    <h3>4.1 Why durable identity matters</h3>
                    <p><strong>A card preserves who a character is. A Soul carries who she became with you.</strong> Trading cards demonstrate a durable appetite for identity, strategy, collecting and a cast that grows across releases. <a href="https://investor.hasbro.com/node/35596" target="_blank" rel="noopener noreferrer">Hasbro reports $1.72&nbsp;billion of 2025 Magic revenue across tabletop and digital and 17% CAGR since 2009.</a> That is evidence of the habit, not a forecast of Soul revenue.</p>
                    <p><a href="https://www.npc.com/" target="_blank" rel="noopener noreferrer">Non-Playable Coin packages collectible identity as a memecoin–NFT hybrid</a>, while <a href="https://whitepaper.virtuals.io/about-virtuals/about-virtuals-protocol.md" target="_blank" rel="noopener noreferrer">Virtuals frames agents as autonomous economic actors</a>. <a href="https://www.coingecko.com/learn/crypto-narratives" target="_blank" rel="noopener noreferrer">The AI-agent token sector went from roughly $9&nbsp;billion in early 2025 to the $22–27&nbsp;billion range by mid-2026</a>, and the category has moved past the novelty of an agent holding a wallet toward payments, verifiable inference and compute. We cite the trend rather than a peak print because a peak proves a moment and a trend proves a habit. Either way it is category heat and attention, not studio demand, product evidence or TAM.</p>
                    <p>Together these signals reveal active appetite for identity, agents, collecting and digital ownership. ForbocAI directs that appetite toward continuity for the player, authority for every receiving studio, and no game-state action unless that world's validation rules accept it. Paid access to Servitor™ remains the core business. This paper asserts no equity, revenue, governance or asset right for $FAI; legal and cap-table claims require governing documents and counsel-approved disclosure.</p>
                </section>

                <section id="wp-roadmap">
                    <h2>5. The arrival sequence</h2>
                    <ul>
                        <li><strong>Working layer.</strong> Servitor™ Character Intelligence, studio-controlled local memory, structured action proposals and validation, composable decision settings exercised in internal tests, TypeScript and Unreal Engine 5 interfaces, public docs, and $FAI live as a token. Soul continuity is a separate development track.</li>
                        <li><strong>In development.</strong> Producer-facing Ghost coverage reporting.</li>
                        <li><strong>Active development tracks.</strong> Account and billing qualification, SDK 1.0, engine distribution and further core bindings form the studio path. Opt-in Soul continuity advances separately behind core distribution. Release planning binds owners, gates, order and dates before a track enters qualification.</li>
                        <li><strong>Governed continuity.</strong> Opted-in history crosses between participating titles only when their technical, moderation and rights gates admit it. No portability right is assumed.</li>
                    </ul>
                </section>
            </div>

            <nav class="doc-contents" aria-label="Contents">
                <p class="doc-contents-label">Contents</p>
                <ol>
                    <li><a href="#wp-summary">Summary</a></li>
                    <li><a href="#wp-problem">The problem</a></li>
                    <li><a href="#wp-layer">Character Intelligence</a></li>
                    <li><a href="#wp-souls">The Soul economy</a></li>
                    <li><a href="#wp-roadmap">The arrival sequence</a></li>
                </ol>
            </nav>
            </div>

            <footer class="doc-foot">
                <p>The production ledger distinguishes working capability, active development and the evidence required for release. A diligence review should test those boundaries directly.</p>
                <a href="mailto:hello@forboc.ai" class="btn btn-primary">Bring us one hard scene</a>
            </footer>
        </div>
    </article>
    `;
};
