/**
 * Whitepaper Component
 * Technical brief inside the active cozy shell.
 */
export const Whitepaper = () => {
    return `
    <section class="hero hero-whitepaper">
        <div class="container">
            <div class="hero-content">
                <div class="recessed-label whitepaper-kicker">Lantern brief for living worlds</div>
                <h1><span class="gradient-text">ForbocAI Whitepaper</span></h1>
                <p>Version 1.0 • January 2026</p>
                <div class="runic-divider">ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ</div>
            </div>
        </div>
    </section>

    <section class="whitepaper-content">
        <div class="container">
            <div class="tech-panel whitepaper-panel">
                <div class="whitepaper-rune-banner" aria-hidden="true">ᚠ ᛟ ᚱ ᛒ ᛟ ᚲ ᛫ ᛚ ᚨ ᚾ ᛏ ᛖ ᚱ ᚾ ᛫ ᛒ ᚱ ᛁ ᛖ ᚠ</div>

                <span class="runic">ᛖ ᛉ ᛖ ᚲ ᚢ ᛏ ᛁ ᚢ ᛖ ᛫ ᛋ ᚢ ᛗ ᛗ ᚨ ᚱ ᛁ</span>
                <h2>1. Executive Summary</h2>
                <p>Games have become visually sophisticated, but character behavior still tends to fall into one of two traps: rigid scripted systems that feel repetitive, or freeform generative systems that drift away from the rules of the world.</p>
                <p><strong>ForbocAI, Inc.</strong> is building a practical living-world layer: a character layer, persistent memory, Ghost Scout testing, and a Soul economy powered by <strong>$FAI</strong> for studios that want worlds to feel inhabited without turning production into chaos. This brief outlines that approach.</p>
                <div class="runic-glyph">᛭ ᚠ ᛫ ᚨ ᛫ ᛁ ᛭</div>

                <span class="runic">ᛈ ᚱ ᛟ ᛒ ᛚ ᛖ ᛗ ᛫ ᛋ ᛈ ᚨ ᚲ ᛖ</span>
                <h2>2. The Problem Space</h2>
                <h3>2.1 The "Scripted" Ceiling</h3>
                <p>Traditional NPCs rely on authored branches, finite state machines, and brittle behavior trees. They can look polished and still feel emotionally flat because they do not hold onto context in a meaningful way.</p>

                <h3>2.2 The "Freeform Drift" Trap</h3>
                <p>Pure generative AI introduces a different set of failures when it is dropped into a playable system without structure:</p>
                <ul>
                    <li><strong>Delay:</strong> Remote model calls can break the feel of live interaction.</li>
                    <li><strong>Cost:</strong> Continuous hosted generation is hard to sustain at gameplay cadence.</li>
                    <li><strong>Incoherence:</strong> Freeform outputs can ignore inventory, quest state, and authored world rules.</li>
                </ul>
                <div class="runic-glyph">ᚦ ᛫ ᛊ ᛫ ᛟ ᛫ ᛚ ᛫ ᚢ ᛫ ᛏ ᛫ ᛁ ᛫ ᛟ ᛫ ᚾ</div>

                <span class="runic">ᛋ ᛟ ᛚ ᚢ ᛏ ᛁ ᛟ ᚾ ᛫ ᚺ ᛖ ᚨ ᚱ ᛏ ᚺ</span>
                <h2>3. The ForbocAI Layer</h2>
                <p>Our approach separates authored game rules from character expression, then reconnects them through validation, memory, and clear world boundaries.</p>

                <h3>3.1 Character Layer</h3>
                <p>At the edge, we use compact models and responsive character guidance so characters can think and respond close to play. Depending on the product, that can mean on-device models, nearby services, or carefully scoped shared execution.</p>

                <h3>3.2 World-Grounded Action Layer</h3>
                <p>Instead of letting the model directly mutate the game, the model proposes structured intent. That intent is validated against world state, content rules, and simulation constraints before anything happens on screen.</p>
                <p class="tech-note"><em>The character can improvise the performance, but the character layer keeps the world coherent.</em></p>

                <h4>Entities, State, and World Rules</h4>
                <p>Whether a team uses ECS, object graphs, or a custom simulation layer, the principle is the same: character reasoning has to stay grounded in the data model that drives the world. The character layer sits at that boundary.</p>

                <h4>Beyond Dialogue</h4>
                <p>ForbocAI is not only about spoken lines. The same character layer can support a character's wider cognitive surface:</p>
                <ul>
                    <li><strong>Decision-Making:</strong> Characters can propose moves, trades, follow-ups, and social actions through structured intent.</li>
                    <li><strong>Memory &amp; Recall:</strong> Retrieval layers let characters reference prior events, relationships, and local context instead of resetting every scene.</li>
                    <li><strong>Emotional Continuity:</strong> Mood, trust, and other authored signals can shape what the character does next.</li>
                </ul>
                <p>The model supplies expressive behavior. The guiding layer provides safety, continuity, and playable constraints.</p>

                <h3>3.3 Ghost Scout Testing</h3>
                <p>Procedural and adaptive systems need deeper testing than a single happy-path run. Ghost Scouts let teams simulate encounters, social loops, and content paths repeatedly to surface dead ends and edge cases early.</p>
                <div class="runic-glyph">ᚠ ᛫ ᚢ ᛫ ᚦ ᛫ ᚨ ᛫ ᚱ ᛫ ᚲ</div>

                <span class="runic">ᛋ ᛟ ᚢ ᛚ ᛫ ᚷ ᚨ ᚱ ᛞ ᛖ ᚾ</span>
                <h2>4. Souls, Ownership, and $FAI</h2>
                <p>ForbocAI is not only a character-layer story. It also includes the public market path that lets living characters become portable digital assets instead of disposable session-state.</p>

                <h3>4.1 Soul Minting</h3>
                <p>When a character has gathered enough memory, training, inventory, and social history, it can be gathered into a Soul. In public Layer 1 terms, a Soul is the portable vessel for a living character's continuity.</p>
                <ul>
                    <li><strong>Portable Identity:</strong> The character keeps its memory, gear, and temperament together.</li>
                    <li><strong>Player Ownership:</strong> The mind can be kept, upgraded, traded, or carried onward.</li>
                    <li><strong>World Continuity:</strong> The character no longer has to end where one save file ends.</li>
                </ul>

                <h3>4.2 $FAI Market Path</h3>
                <p><strong>$FAI</strong> is the live market path in the ForbocAI Soul economy. At the public level, its role is simple to explain:</p>
                <ul>
                    <li><strong>Soul Minting:</strong> Bringing a living character fully into the economy.</li>
                    <li><strong>Soul Upgrades:</strong> Extending continuity, rarity, and value as a character grows.</li>
                    <li><strong>Marketplace Operations:</strong> Supporting the flow of Soul trading and ecosystem activity as adoption scales.</li>
                </ul>

                <h3>4.3 Soul Garden Infrastructure</h3>
                <p>ForbocAI's public web3 story is about giving living characters a place to persist. The character layer makes them feel alive; the Soul layer gives them continuity, portability, and a long-term economy.</p>

                <div class="runic-glyph">ᛊ ᛫ ᛟ ᛫ ᚢ ᛫ ᛚ ᛫ ᛊ</div>

                <span class="runic">ᚱ ᛟ ᚨ ᛞ ᛗ ᚨ ᛈ</span>
                <h2>5. Roadmap</h2>
                <ul>
                    <li><strong>Q1 2026:</strong> Character-layer alpha with local thinking and memory integration.</li>
                    <li><strong>Q2 2026:</strong> World-grounded action layer and Ghost Scout testing tools.</li>
                    <li><strong>Q3 2026:</strong> Soul economy launch, wallet connections, and $FAI-powered marketplace operations.</li>
                    <li><strong>Q4 2026:</strong> Expanded studio guides, cross-world continuity, and broader ecosystem growth.</li>
                </ul>
                <div class="runic-divider">ᚷ ᛫ ᛟ ᛫ ᛖ ᛫ ᛏ ᛫ ᛖ ᛫ ᛁ ᛫ ᚨ ᛫ ᚾ</div>

                <div class="whitepaper-footer-note">
                    <p><em>This brief is a living document. Details will keep shifting as ForbocAI moves from lantern sketch to production craft.</em></p>
                    <a href="mailto:hello@forboc.ai" class="btn btn-primary">Contact the Team</a>
                </div>
            </div>
        </div>
    </section>
    `;
};
