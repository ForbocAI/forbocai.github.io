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
                <h1>Characters who remember, inside worlds that still hold.</h1>
                <p class="doc-meta">ForbocAI, Inc. — Version 1.1, September 2026</p>
            </header>

            <div class="doc-shell">
            <div class="doc-body">
                <section id="wp-summary">
                    <h2>1. Summary</h2>
                    <p>Games look extraordinary now. Their characters mostly do not keep up. Behaviour still falls into one of two traps: authored branches that repeat until a player can recite them, or generative systems that improvise straight through the rules of the world.</p>
                    <p><strong>ForbocAI, Inc.</strong> builds the layer in between. A character layer with persistent memory, a validation step that stands between a character's intent and your game state, Ghost characters that play your build before your players do, and Souls — a way for a character to leave one world with her continuity intact. This brief explains the approach at the level a studio needs to evaluate it.</p>
                </section>

                <section id="wp-problem">
                    <h2>2. The problem</h2>

                    <h3>2.1 The scripted ceiling</h3>
                    <p>Behaviour trees and finite state machines are predictable, debuggable, and finite. A player exhausts them. Nothing an NPC learns in hour three changes what she says in hour forty, because there is nowhere for her to put it.</p>

                    <h3>2.2 Freeform drift</h3>
                    <p>Dropping a general model into a playable system trades one failure for three:</p>
                    <ul>
                        <li><strong>Latency.</strong> A round trip that reads fine in a chat window is a broken beat in live play.</li>
                        <li><strong>Cost.</strong> Per-token billing at gameplay cadence does not survive contact with a shipped title's player count.</li>
                        <li><strong>Incoherence.</strong> A model that has not been told about your inventory will cheerfully give away an item the player never had.</li>
                    </ul>
                    <p>Neither trap is a model-quality problem. Both are architecture problems.</p>
                </section>

                <section id="wp-layer">
                    <h2>3. The ForbocAI layer</h2>
                    <p>We separate what a character expresses from what the game permits, then reconnect the two through an explicit validation step. Your game keeps world authority. We keep the character coherent.</p>

                    <h3>3.1 Where the thinking happens</h3>
                    <p>ForbocAI's proprietary NPC model Servitor runs on our own infrastructure. Studios do not package a runtime, qualify a GPU path, or ship a title that thinks well on one player's machine and badly on another's. Your build makes a call; the answer comes back the same everywhere.</p>
                    <p>The split is deliberate: the SDK in your game is the body, the API is the mind. The body never guesses at behaviour, and the mind never touches your world directly.</p>

                    <h3>3.2 Actions are proposed, not performed</h3>
                    <p>A character never mutates the game. She proposes structured intent, and that intent is measured against world state, content rules, and your own constraints before anything moves on screen.</p>
                    <p class="doc-aside">A character can improvise the performance. She cannot improvise the world.</p>
                    <p>When a response cannot be validated, it comes back as an explicit failure your game can handle — a retry, a fallback line, a shrug. It is never silently replaced with invented dialogue or an action you never authored, because a quiet substitution is the one failure a studio cannot debug.</p>

                    <h4>Entities, state, and world rules</h4>
                    <p>ECS, object graph, or a bespoke simulation — the principle does not change. Character reasoning has to stay grounded in whatever data model actually drives your world, and the validation step is where that grounding is enforced.</p>

                    <h4>Beyond dialogue</h4>
                    <p>Speech is the visible part. The same layer carries the rest of a character's cognitive surface:</p>
                    <ul>
                        <li><strong>Decisions.</strong> Moves, trades, follow-ups, and social actions arrive as structured intent, not prose to be parsed.</li>
                        <li><strong>Recall.</strong> Retrieval lets a character reference prior events, relationships, and local context instead of resetting at every scene boundary.</li>
                        <li><strong>Continuity of feeling.</strong> Mood, trust, and whatever other signals you author shape what she does next, not just how she says it.</li>
                    </ul>

                    <h3>3.3 Memory stays with your studio</h3>
                    <p>ForbocAI issues the instruction to remember. Your build performs the write, against a vector store your studio owns and can read without us. That keeps player data under your control and your continuity readable in your own tooling.</p>

                    <h3>3.4 Ghost</h3>
                    <p>Procedural and adaptive systems outrun manual QA immediately. Ghost characters play the build headless and repeatedly, walking encounters, social loops, and content paths until dead ends and unreachable states surface as coverage a producer can read. QA runs 15–25% of a game budget; this is the part of it a machine should be doing.</p>
                </section>

                <section id="wp-souls">
                    <h2>4. Souls and $FAI</h2>
                    <p>A character who has been somewhere should be able to leave with what she learned. A Soul is that character gathered up — identity, memory, relationships, temperament — in a form that survives leaving your game.</p>

                    <h3>4.1 What a Soul carries</h3>
                    <ul>
                        <li><strong>One identity.</strong> Memory, gear, and temperament move together, or not at all.</li>
                        <li><strong>Verified restoration.</strong> A Soul is collected locally, confirmed remotely, stored, verified, and only then restored under a name that checks out.</li>
                        <li><strong>Continuity past the save file.</strong> A character no longer has to end where one title's story ends.</li>
                    </ul>

                    <h3>4.2 What $FAI is for</h3>
                    <p><strong>$FAI</strong> is the live utility layer in the Soul economy. Its public role is narrow and specific:</p>
                    <ul>
                        <li><strong>Minting.</strong> Bringing a character into the economy as a Soul.</li>
                        <li><strong>Upgrades.</strong> Extending a Soul's continuity as the character grows.</li>
                        <li><strong>Marketplace operations.</strong> Settling Soul trading and template licensing as the ecosystem opens.</li>
                    </ul>
                    <p>The verification chain is not optional and does not bend for the market: a listing never stands in for a valid receipt, an API signature, and a locally restored payload.</p>

                    <h3>4.3 Where it stands</h3>
                    <p>$FAI is live and trading. Soul minting and the marketplace are in active development. We would rather say that plainly than imply a shipped economy.</p>
                </section>

                <section id="wp-roadmap">
                    <h2>5. Roadmap</h2>
                    <ul>
                        <li><strong>Shipped.</strong> Persistent memory with semantic and time-aware recall, validated actions, Servitor on ForbocAI infrastructure, TypeScript and Unreal Engine 5 SDKs, public docs, and $FAI live.</li>
                        <li><strong>Through Q4 2026.</strong> Ghost coverage reporting, Soul minting end to end, the account portal, SDK 1.0, and engine marketplace listings.</li>
                        <li><strong>2027.</strong> Marketplace operations, cross-title Soul portability, and further engine bindings held to the same contract as the shipped ones.</li>
                    </ul>
                </section>
            </div>

            <nav class="doc-contents" aria-label="Contents">
                <p class="doc-contents-label">Contents</p>
                <ol>
                    <li><a href="#wp-summary">Summary</a></li>
                    <li><a href="#wp-problem">The problem</a></li>
                    <li><a href="#wp-layer">The ForbocAI layer</a></li>
                    <li><a href="#wp-souls">Souls and $FAI</a></li>
                    <li><a href="#wp-roadmap">Roadmap</a></li>
                </ol>
            </nav>
            </div>

            <footer class="doc-foot">
                <p>This brief is a living document and will keep changing as the work does. Public claims here are kept consistent with what is actually deployed.</p>
                <a href="mailto:hello@forboc.ai" class="btn btn-primary">Talk to the team</a>
            </footer>
        </div>
    </article>
    `;
};
