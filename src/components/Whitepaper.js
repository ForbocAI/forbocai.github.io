/**
 * Whitepaper Component
 * The public brief. Benefits and boundaries, no internals.
 */
export const Whitepaper = () => {
    return `
    <article class="doc">
        <div class="container">
            <div class="doc-shell">
            <header class="doc-head">
                <p class="kicker">Whitepaper</p>
                <h1>Characters who decide, inside worlds that still hold.</h1>
                <p class="doc-meta">ForbocAI, Inc. — Version 1.1, September 2026</p>
            </header>
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
            <div class="doc-body">
                <section id="wp-summary">
                    <h2>1. Summary</h2>
                    <p>Games taught worlds to look alive. Open-ended intelligence is already inside them. The strategic question is no longer whether it arrives, but whether it lives there as an ungoverned voice or as people who can meet the unforeseen and still belong.</p>
                    <p><strong>ForbocAI, Inc. creates Character Intelligence — the intelligence of people who belong to a world.</strong> The ForbocAI NPC LM Servitor™ interprets identity, memory, motive, relationships and world evidence to make the character judgment. The ForbocAI NPC Protocol gives Servitor™ a lawful place inside the game while the world keeps authority over every consequence. Memory is the evidence. Judgment is the intelligence. The living cast begins inside that boundary.</p>
                </section>

                <section id="wp-problem">
                    <h2>2. The problem</h2>

                    <h3>2.1 The scripted ceiling</h3>
                    <p>Behavior trees and finite state machines are predictable and debuggable, but authored coverage is finite. Once a player reaches beyond it, the character has no new decision to make. Memory alone does not solve that: remembering hour three matters only if the evidence can change what the character chooses in hour forty.</p>

                    <h3>2.2 Freeform drift</h3>
                    <p>Dropping a general model into a playable system trades one failure for three:</p>
                    <ul>
                        <li><strong>Latency.</strong> A round trip that reads fine in a chat window is a broken beat in live play.</li>
                        <li><strong>Cost.</strong> A model demo says nothing about unit economics at a shipped title's concurrency. The shape is this: one character judgment is one call. The dialogue, the reasoning behind it and the structured action come back from the same attempt — not a chain of calls per line, not a re-roll to get a parseable action, not a second request to explain the first. Concurrency and unit economics are clause four; the call count per decision is not.</li>
                        <li><strong>Incoherence.</strong> A model that lacks inventory evidence can propose an item the player never had.</li>
                    </ul>
                    <p>The protocol makes the decision boundary inspectable, and the Standard measures the rest in public.</p>
                </section>

                <section id="wp-layer">
                    <h2>3. Character Intelligence</h2>
                    <p>Servitor™ is the intelligence. The Protocol is the law that admits its judgment into an authored world. We separate what the character expresses from what the game permits, then reconnect the two through separate reply and action checks. Your game remains truth.</p>

                    <h3>3.1 Where the thinking happens</h3>
                    <p>Studios invoke Servitor™ through the ForbocAI NPC Protocol; the model reasons in ForbocAI infrastructure rather than being packaged as a client runtime. Active cognition requires a network connection. What a studio keeps if this company stops is clause nine, and we wrote that clause because a world should outlive its vendor.</p>
                    <p>The hierarchy is deliberate: Servitor™ makes the judgment; the Protocol defines its authority boundary; the API carries the exchange; the SDK makes that exchange native to game code; the game applies only the effects its contracts admit.</p>
                    <p>Latency is a trap networked cognition inherits rather than escapes. Servitor™ runs under a hard server-side deadline. If it cannot finish and produce a reply that meets the required rules in time, the turn comes back explicitly marked invalid, and an invalid turn authorizes nothing: no action, no memory write, no change to your state. That hard deadline and typed boundary are testable now. The budget is set server-side by ForbocAI and is one number for every scene; a per-scene budget the studio sets is clause nineteen. The rate at which turns miss it is clause seventeen. Typical and worst-case response times, measured by region, become public only after they are measured end to end through a real integration. That is clause three.</p>
                    <p>The Protocol, Servitor™ and tradable NPCs are sold together, in ordinary money. Its release contract — clause four — must bind the billable event, quotas, overage behavior, public price, production capacity, unit economics, and both the retention and training-use terms for turn data before those claims go live.</p>

                    <h3>3.2 Actions are proposed, not performed</h3>
                    <p>Servitor™ proposes structured intent; the Protocol defines how it is checked against studio-supplied contracts; the SDK carries those checks into game code; the game alone decides what moves on screen.</p>
                    <p class="doc-aside">A character can improvise the performance. She cannot improvise the world.</p>
                    <p>The reply and any proposed action are checked separately. Transport failures reject the request. A server deadline miss or a reply that fails its required rules returns a typed invalid result. Proposed actions that fail the studio's rules are not applied. None can authorize a memory write or state change, and the game owns the fallback. These checks alone do not guarantee factual accuracy — clause twelve — nor moderation or console certification, which is clause six.</p>

                    <h4>Entities, state, and world rules</h4>
                    <p>An entity-component system, an object graph, or a simulation you built yourself — the principle does not change. Character reasoning has to stay grounded in whatever data model actually drives your world. The validation step enforces that for actions, which is why a proposal your rules reject never touches state. The reply check is mechanical and narrow: the reply must name the action she proposed, must not argue for an action it did not take, and must not claim a comparison the supplied evidence does not carry. It is not a lore check. A character can still state something about your world that is untrue — she reasons from the evidence you supply, which bounds what she reaches for without preventing her reaching past it. That is clause twelve.</p>

                    <h4>Beyond dialogue</h4>
                    <p>Speech is the visible part. The same layer carries the rest of a character's cognitive surface:</p>
                    <ul>
                        <li><strong>Decisions.</strong> Moves, trades, follow-ups, and social actions arrive as structured intent, not prose to be parsed.</li>
                        <li><strong>Evidence.</strong> Prior events, relationships and local context are what the character reasons from — not trivia she can mention, but the grounds on which she decides differently in hour forty than she would have in hour three.</li>
                        <li><strong>Continuity of feeling.</strong> Mood, trust, and whatever other signals you author shape what she does next, and only then how she says it.</li>
                    </ul>

                    <h3>3.3 Your memory store stays with your studio; the turn does not</h3>
                    <p>ForbocAI returns a memory-write instruction. Your build applies it to a local store your studio controls and can read without us. Be exact about what moves. Your store never leaves you: it is written by your build, read by your build, and nothing in it is ours. What does leave you is the turn — a memory excerpt drawn from that store, the persona and the world context — because hosted cognition is what is being bought and it cannot reason about what it has not been sent. Excluding that excerpt from training is clause four. The crossing path described below sends locally encrypted character ciphertext to a storage provider the studio configures.</p>

                    <h3>3.4 Ghost</h3>
                    <p>Procedural and adaptive systems can outrun manually authored test paths. Ghost, the internal harness, already drives test worlds during Servitor™ qualification. Turning those runs into producer-facing reports on dead ends, unreachable content and social-loop coverage is clause ten.</p>

                    <h3>3.5 The Character Intelligence Standard</h3>
                    <p><strong>Working now in ForbocAI evaluation environments:</strong> Servitor™ through the ForbocAI NPC Protocol; TypeScript and native Unreal Engine 5 interfaces; memory writes to studio-controlled local storage; structured action proposals; reply checks; action checks; internal test worlds; and an exact model and runtime build recorded internally.</p>
                    <p id="wp-gates"><strong>Here is what is true today.</strong> The model answers. The harness drives worlds. The boundary is readable, and you can read it. And the measurement this category will be bought on does not exist anywhere yet — one company is building the instrument that will define it.</p>
                    <p><strong>Every category is bought on a measurement, and somebody writes it.</strong> The Character Intelligence Standard is twenty-five clauses a character model has to satisfy before a studio should ship one — ours included, ours first. It went out before we had results, handed to every rival on identical terms, with our own name at the top. Use it on us this week. Then use it on whoever pitches you next.</p>
                    <p><strong>Most of these do not wait on us. They wait on a second party.</strong> A studio has to ship one. A rival has to be measured beside one. A producer who does not work here has to read one. We built the half a company can build alone, and the rest is what the first worlds through this door put their names on.</p>
                    <p><strong>The order is not ours to choose either.</strong> Five, six and nine block one: no publisher signs a shipped integration before outage behavior, platform certification and continuity are instrumented. Two names the alternative thirteen is scored against, so it blocks thirteen. Twenty-three blocks thirteen, fourteen and fifteen alike, because a number measured on a cast we control is not a number. Four blocks twenty-two — nobody pays before there is a price. And one blocks eleven blocks twenty-four: a Soul crosses between live titles or not at all, and a token cannot serve a Soul that has never crossed.</p>
                    <ol class="gate-ledger">
                        <li><strong><span class="gate-n">1.</span> External-studio evidence.</strong> A studio that is not ForbocAI ships a title with Servitor™ in it.</li>
                        <li><strong><span class="gate-n">2.</span> Named-alternative comparison.</strong> A public comparison against an alternative we name, published win or lose.</li>
                        <li><strong><span class="gate-n">3.</span> Regional latency.</strong> Typical and worst-case response times, measured end to end by region.</li>
                        <li><strong><span class="gate-n">4.</span> Commercial release terms.</strong> A contract binding the billable event, the price, capacity, unit economics, and what happens to turn data.</li>
                        <li><strong><span class="gate-n">5.</span> Authored outage behavior.</strong> What a world does while we are down, specified and contracted.</li>
                        <li><strong><span class="gate-n">6.</span> Platform certification.</strong> Moderation and console requirements met for a named platform.</li>
                        <li><strong><span class="gate-n">7.</span> Release pinning.</strong> A studio holds one build of the model across its ship window.</li>
                        <li><strong><span class="gate-n">8.</span> Support window.</strong> The support term bound in writing.</li>
                        <li><strong><span class="gate-n">9.</span> Continuity if we stop.</strong> Escrowed weights, released on our failure, so a shipped title keeps running.</li>
                        <li><strong><span class="gate-n">10.</span> Producer-facing Ghost reports.</strong> A producer outside ForbocAI reads a coverage report from their own world.</li>
                        <li><strong><span class="gate-n">11.</span> Soul continuity.</strong> One Soul carried end to end between two titles.</li>
                        <li><strong><span class="gate-n">12.</span> Prose grounding.</strong> A character's prose measurably checked against the world you supplied.</li>
                        <li><strong><span class="gate-n">13.</span> Persona hold.</strong> An authored person measured holding her voice, loyalties and refusals under adversarial play, against a named alternative.</li>
                        <li><strong><span class="gate-n">14.</span> Cast separation.</strong> Four hundred characters measured staying distinct from one another.</li>
                        <li><strong><span class="gate-n">15.</span> Rationale faithfulness.</strong> The stated reason measured to be the deciding one.</li>
                        <li><strong><span class="gate-n">16.</span> Adversarial safety.</strong> A character measured holding her authored limits under deliberate attack.</li>
                        <li><strong><span class="gate-n">17.</span> Invalid-turn rate.</strong> How often a turn misses its deadline or fails its checks, measured and published.</li>
                        <li><strong><span class="gate-n">18.</span> Dialogue and action agreement.</strong> How often a reply promises what your rules then refuse, measured and published.</li>
                        <li><strong><span class="gate-n">19.</span> Per-scene deadlines.</strong> A studio sets its own budget per scene.</li>
                        <li><strong><span class="gate-n">20.</span> Memory-write validation.</strong> A memory write checked against your rules the way an action is.</li>
                        <li><strong><span class="gate-n">21.</span> The measurement as moat.</strong> Someone who is not ForbocAI uses the instrument to make a purchasing decision, with the instrument published before the results and open to a rival's model on the same terms.</li>
                        <li><strong><span class="gate-n">22.</span> A studio pays.</strong> A studio that is not ForbocAI pays for character judgments.</li>
                        <li><strong><span class="gate-n">23.</span> Independent cast provenance.</strong> The casts behind thirteen to fifteen come from a party with no relationship to us, named beside the result.</li>
                        <li><strong><span class="gate-n">24.</span> $FAI utility.</strong> A Soul minted, carried and restored using $FAI between two live titles.</li>
                        <li><strong><span class="gate-n">25.</span> She is herself in every language you ship, and in every voice.</strong> Her line was never on the string table — that is the point of this company, and it is what makes this the hardest gate on the list. A judgment reached in one language, arriving in a locale no translator has seen, with a position on the performed half that a studio's voice contracts can live with.</li>
                    </ol>
                    <p>Twelve is the fault a studio fears. Thirteen, fourteen and fifteen are the three we most want to hand over, because together they are the claim this company rests on: that an authored person holds under pressure, that four hundred of them stay different from one another, and that the reason she gives is the reason she had. Servitor™ was trained for all three. <strong>A limitation without a gate is just a well-worded no, and a strength without one is just a well-worded yes.</strong></p>
                </section>

                <section id="wp-souls">
                    <h2>4. The Soul economy</h2>
                    <p class="doc-aside"><strong>$FAI is live on Solana, and the contract behind every $FAI link on this site is the one to check.</strong></p>
                    <p>The Soul layer carries the history a player and character made together. It is the player-owned record — identity, memory, relationships and temperament — while every receiving title decides what enters.</p>
                    <ul>
                        <li><strong>Player value.</strong> A character can retain earned specificity instead of resetting to a template at every title boundary.</li>
                        <li><strong>Studio authority.</strong> Gather, encrypt, upload, verify, restore — every participating title still chooses what its technical, moderation and rights rules admit.</li>
                        <li><strong>Current development.</strong> Character records, cross-title restoration, minting and upgrades form the active track; marketplace operations open as the worlds that feed them do.</li>
                    </ul>

                    <h3>4.1 Why durable identity matters</h3>
                    <p><strong>A card preserves who a character is. A Soul carries who she became with you.</strong> Trading cards proved the appetite decades ago — identity, strategy, collecting, and a cast that grows across releases. People have been paying for identity they can keep ever since, and a card has never once been able to remember them back.</p>
                    <p><a href="https://www.npc.com/" target="_blank" rel="noopener noreferrer">Non-Playable Coin packages collectible identity as a memecoin–NFT hybrid</a>, while <a href="https://whitepaper.virtuals.io/about-virtuals/about-virtuals-protocol.md" target="_blank" rel="noopener noreferrer">Virtuals frames agents as autonomous economic actors</a>. A market is already convinced that a character can be an asset. What none of them has is a character worth keeping — someone whose history was earned inside a world that ruled on it.</p>
                    <p>ForbocAI points that appetite at continuity for the player and authority for every receiving studio.</p>
                </section>

                <section id="wp-roadmap">
                    <h2>5. The arrival sequence</h2>
                    <ul>
                        <li><strong>Working layer.</strong> Servitor™ Character Intelligence, studio-controlled local memory, structured action proposals and validation, TypeScript and Unreal Engine 5 interfaces, itemized in 3.5. Soul continuity is a separate development track, and $FAI is described in section 4.</li>
                        <li><strong>In development.</strong> Producer-facing Ghost coverage reporting — clause ten.</li>
                        <li><strong>Active development tracks.</strong> Account and billing qualification, SDK 1.0, engine distribution and further core bindings form the studio path. The crossing follows the worlds it runs between: a character crosses between live titles or not at all, which is clause eleven, and clause one comes first.</li>
                        <li><strong>Governed continuity.</strong> She is the player's, and a receiving world still rules what it admits — both are true, and clause eleven is where they meet.</li>
                    </ul>
                </section>
            </div>
            </div>

            <footer class="doc-foot">
                <a href="#wp-gates" class="btn btn-primary">Read the Standard</a>
            </footer>
        </div>
    </article>
    `;
};
