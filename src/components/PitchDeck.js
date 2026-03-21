/**
 * Pitch Deck Component
 * Company deck copy inside the active cozy shell.
 */
import { selectPitchSlide } from '../domains/navigationSlice.js';

// Runic alphabet reference: ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ
// F U TH A R K G W H N I J EI P Z S T B E M L NG D O

const slides = [
    {
        id: 1,
        runicLabel: "ᚠᛟᚱᛒᛟᚲ",
        runicSubtitle: "ᛁᚾᛏᛖᛚᛚᛁᚷᛖᚾᚲᛖ",
        title: "ForbocAI",
        content: `
            <div class="title-slide">
                <div class="runic-glyph">᛭ ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ ᛭</div>
                <h3 class="tagline">Lantern-Lit Worlds With <span class="gradient-text">Living</span>, <span class="gradient-text">Ownable</span>, and <span class="gradient-text">Portable</span> Souls</h3>
                <p class="subtitle">ForbocAI, Inc. gives studios a living character layer, Soul-ready memory, Ghost Scout testing, and the <strong>$FAI</strong> market path for worlds that keep growing after the first session.</p>
                <div class="runic-divider">ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ</div>
                <p class="deck-meta">Seed Round • March 2026</p>
            </div>
        `
    },
    {
        id: 2,
        runicLabel: "ᚦᚱᛖᚨᛏ",
        runicSubtitle: "ᛊᛏᚨᚷᚾᚨᛏᛁᛟᚾ",
        title: "The Problem",
        content: `
            <div class="problem-grid">
                <div class="problem-column">
                    <span class="deck-runic-accent">ᚷᚨᛗᛖ ᚨᛁ</span>
                    <h3>Game AI is <span class="highlight-red">Static</span></h3>
                    <ul class="problem-list">
                        <li>Rigid behavior trees and state machines</li>
                        <li>Little continuity outside authored branches</li>
                        <li>Worlds can look beautiful and still feel emotionally flat</li>
                    </ul>
                </div>
                <div class="problem-column">
                    <span class="deck-runic-accent">ᚷᛖᚾ ᚨᛁ</span>
                    <h3>Generative AI is <span class="highlight-red">Chaotic</span></h3>
                    <ul class="problem-list">
                        <li>Slow response times break live interaction</li>
                        <li>Constant hosted model calls become expensive at play cadence</li>
                        <li>Freeform outputs can violate quests, inventory, and world rules</li>
                    </ul>
                </div>
            </div>
            <div class="runic-glyph">᛭ ᚦ ᛫ ᚱ ᛫ ᛖ ᛫ ᚨ ᛫ ᛏ ᛭</div>
            <p class="impact-statement">Studios need characters that feel alive <strong>and</strong> stay playable.</p>
        `
    },
    {
        id: 3,
        runicLabel: "ᛊᛟᛚᚢᛏᛁᛟᚾ",
        runicSubtitle: "ᛈᚱᛟᛏᛟᚲᛟᛚ",
        title: "The Solution",
        content: `
            <span class="deck-runic-accent">ᚠᛟᚱᛒᛟᚲ ᛈᛚᚨᛏᚠᛟᚱᛗ</span>
            <h3>The ForbocAI Layer</h3>
            <p class="solution-intro">A <strong>world-grounded character layer</strong> for companions, neighbors, and NPCs that blends responsive character thinking, persistent memory, studio guidance, and a Soul economy ready for player ownership.</p>
            <div class="runic-glyph">᛭ ᚠ ᛫ ᚨ ᛫ ᛁ ᛭</div>
            <ul class="feature-list">
                <li><span class="runic-bullet">ᚠ</span><strong>Character Layer:</strong> Responsive character thinking close to play, with room for local and shared launch paths.</li>
                <li><span class="runic-bullet">ᛟ</span><strong>World-Grounded Actions:</strong> AI proposes intent; the character layer validates it against game logic and world state.</li>
                <li><span class="runic-bullet">ᚱ</span><strong>Memory Pipeline:</strong> Characters recall events, relationships, and prior context instead of resetting every scene.</li>
                <li><span class="runic-bullet">ᛊ</span><strong>Soul Garden:</strong> Characters can be minted, upgraded, and carried forward through the ForbocAI Soul economy.</li>
            </ul>
        `
    },
    {
        id: 4,
        runicLabel: "ᛗᛟᚨᛏ",
        runicSubtitle: "ᛏᛖᚲᚺᚾᛟᛚᛟᚷᛁ",
        title: "The Craft Moat",
        content: `
            <p class="moat-intro">Our defensible advantages compound over time:</p>
            <div class="moat-grid">
                <div class="moat-item">
                    <span class="moat-rune">ᛖ</span>
                    <h4>World Grounding</h4>
                    <p>Character expression is separated from game-state mutation, so creative behavior stays bounded by authored rules.</p>
                </div>
                <div class="moat-item">
                    <span class="moat-rune">ᛊ</span>
                    <h4>Responsive Character Layer</h4>
                    <p>Compact models and careful coordination aimed at keeping characters playable, not just impressive in a demo clip.</p>
                </div>
                <div class="moat-item">
                    <span class="moat-rune">ᚷ</span>
                    <h4>Ghost Scout Testing</h4>
                    <p>Ghost Scouts can wander content at scale, helping teams catch narrative dead ends and systemic failures earlier.</p>
                </div>
                <div class="moat-item">
                    <span class="moat-rune">ᛟ</span>
                    <h4>Soul Economy</h4>
                    <p>The same company stack that makes characters feel alive also gives them a portable economic surface through Souls and the $FAI market path.</p>
                </div>
            </div>
            <div class="runic-glyph">ᛊ ᛫ ᛟ ᛫ ᚢ ᛫ ᛚ ᛫ ᛊ</div>
        `
    },
    {
        id: 5,
        runicLabel: "ᛗᚨᚱᚲᛖᛏ",
        runicSubtitle: "ᛟᛈᛈᛟᚱᛏᚢᚾᛁᛏᛁ",
        title: "Market Opportunity",
        content: `
            <span class="deck-runic-accent">ᛏᚨᛗ</span>
            <div class="market-metrics">
                <div class="metric-box">
                    <span class="metric-value">$220B+</span>
                    <span class="metric-label">Global Gaming Market (2025)</span>
                </div>
                <div class="metric-box">
                    <span class="metric-value">$62B</span>
                    <span class="metric-label">AI in Gaming by 2032</span>
                </div>
                <div class="metric-box">
                    <span class="metric-value">3.4B</span>
                    <span class="metric-label">Gamers Worldwide</span>
                </div>
            </div>
            <div class="runic-divider">ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ</div>
            <h4>Why Now?</h4>
            <ul class="feature-list">
                <li><span class="runic-bullet">ᚠ</span><strong>Home Devices Are Ready:</strong> Apple M-series, NVIDIA RTX, and Snapdragon NPUs now make local model support practical.</li>
                <li><span class="runic-bullet">ᚢ</span><strong>Smaller Models Are Blooming:</strong> SmolLM2, Phi-3, Llama 3.2, and related compact models are becoming production-viable.</li>
                <li><span class="runic-bullet">ᚦ</span><strong>Narrative Demand:</strong> Players crave worlds that respond, not just react.</li>
            </ul>
        `
    },
    {
        id: 6,
        runicLabel: "ᛗᛟᛞᛖᛚ",
        runicSubtitle: "ᚱᛖᚢᛖᚾᚢᛖ",
        title: "Business Model",
        content: `
            <span class="deck-runic-accent">ᚦᚱᛖᛖ ᛈᛁᛚᛚᚨᚱᛊ</span>
            <div class="business-grid">
                <div class="business-item">
                    <span class="business-phase">Phase 1</span>
                    <h4>Studio Licensing</h4>
                    <p>Per-seat access to the character layer, memory support, and Ghost Scout testing tools for teams building living worlds.</p>
                    <span class="revenue-type">Recurring Studio Access</span>
                </div>
                <div class="business-item">
                    <span class="business-phase">Phase 2</span>
                    <h4>Studio Integration</h4>
                    <p>Custom implementation and self-hosted options for larger studios that need deeper character-layer control.</p>
                    <span class="revenue-type">Custom Studio Work</span>
                </div>
                <div class="business-item">
                    <span class="business-phase">Phase 3</span>
                    <h4>Soul Economy</h4>
                    <p>$FAI market-path activity extends monetization beyond software licensing as ownership and interoperability scale.</p>
                    <span class="revenue-type">Ecosystem Flow</span>
                </div>
            </div>
            <div class="runic-glyph">ᚠ ᛫ ᛚ ᛫ ᛟ ᛫ ᚹ</div>
        `
    },
    {
        id: 7,
        runicLabel: "ᚷᛟᛏᛗ",
        runicSubtitle: "ᛊᛏᚱᚨᛏᛖᚷᛁ",
        title: "Go-to-Market",
        content: `
            <span class="deck-runic-accent">ᛈᚨᚦ ᛏᛟ ᛗᚨᚱᚲᛖᛏ</span>
            <ol class="gtm-steps">
                <li>
                    <span class="phase-rune">ᚠ</span>
                    <div class="gtm-content">
                        <strong>Proof Through Play</strong>
                        <p>Use playable demos and reference worlds to show memory, grounded behavior, and world continuity working in practice.</p>
                    </div>
                </li>
                <li>
                    <span class="phase-rune">ᚢ</span>
                    <div class="gtm-content">
                        <strong>Developer Adoption</strong>
                        <p>Docs, starter kits, and builder notes that help small teams experiment quickly with living character systems.</p>
                    </div>
                </li>
                <li>
                    <span class="phase-rune">ᚦ</span>
                    <div class="gtm-content">
                        <strong>Studio Partnerships</strong>
                        <p>Target mid-tier studios looking for stronger companions, social NPC loops, and better systemic continuity.</p>
                    </div>
                </li>
                <li>
                    <span class="phase-rune">ᚨ</span>
                    <div class="gtm-content">
                        <strong>Soul Garden Expansion</strong>
                        <p>Open the public market path with Souls, wallet connections, and $FAI-powered marketplace operations.</p>
                    </div>
                </li>
            </ol>
        `
    },
    {
        id: 8,
        runicLabel: "ᚲᛟᛗᛈ",
        runicSubtitle: "ᛚᚨᚾᛞᛊᚲᚨᛈᛖ",
        title: "Competitive Landscape",
        content: `
            <span class="deck-runic-accent">ᚹᚺᛁ ᚠᛟᚱᛒᛟᚲ</span>
            <div class="competition-table">
                <div class="comp-header">
                    <span></span>
                    <span>Grounded</span>
                    <span>Persistent</span>
                    <span>Ownable</span>
                    <span>Interop</span>
                </div>
                <div class="comp-row">
                    <span class="comp-name">Cloud Chat APIs</span>
                    <span class="comp-no">✗</span>
                    <span class="comp-no">✗</span>
                    <span class="comp-no">✗</span>
                    <span class="comp-no">✗</span>
                </div>
                <div class="comp-row">
                    <span class="comp-name">Character Chat Layers</span>
                    <span class="comp-partial">~</span>
                    <span class="comp-partial">~</span>
                    <span class="comp-no">✗</span>
                    <span class="comp-no">✗</span>
                </div>
                <div class="comp-row">
                    <span class="comp-name">In-House Prototypes</span>
                    <span class="comp-partial">~</span>
                    <span class="comp-partial">~</span>
                    <span class="comp-partial">~</span>
                    <span class="comp-no">✗</span>
                </div>
                <div class="comp-row highlight-row">
                    <span class="comp-name"><strong>ForbocAI</strong></span>
                    <span class="comp-yes">✓</span>
                    <span class="comp-yes">✓</span>
                    <span class="comp-yes">✓</span>
                    <span class="comp-yes">✓</span>
                </div>
            </div>
            <p class="comp-note">Most alternatives stop at chat or studio-only prototypes. ForbocAI extends into <strong>world-grounded character layers, persistent companions, ownable Souls, and interoperable ecosystem value.</strong></p>
        `
    },
    {
        id: 9,
        runicLabel: "ᛏᛖᚨᛗ",
        runicSubtitle: "ᚠᛟᚢᚾᛞᛖᚱᛊ",
        title: "The Team",
        content: `
            <span class="deck-runic-accent">ᛒᚢᛁᛚᛞᛖᚱᛊ</span>
            <div class="team-grid">
                <div class="team-member">
                    <span class="team-rune">ᚠ</span>
                    <h4>Sean Dinwiddie</h4>
                    <p><strong>Lead Developer</strong><br/>Full-stack builder with deep AI systems experience and a focus on turning living-character ideas into real shipped products.</p>
                </div>
                <div class="team-member">
                    <span class="team-rune">ᚢ</span>
                    <h4>Tiernan Omalley</h4>
                    <p><strong>Business Developer</strong><br/>Leading business development, studio partnerships, and developer community growth.</p>
                </div>
                <div class="team-member">
                    <span class="team-rune">ᚦ</span>
                    <h4>Antara Bhavsar</h4>
                    <p><strong>Software Developer</strong><br/>Engineering lead focused on game engine integration and pushing local-model inference capabilities.</p>
                </div>
            </div>
            <div class="runic-divider">ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ</div>
            <p class="team-note">The core founding team is complete and focused on delivering the ForbocAI character layer.</p>
        `
    },
    {
        id: 10,
        runicLabel: "ᛏᚱᚨᚲᛏᛁᛟᚾ",
        runicSubtitle: "ᛈᚱᛟᚷᚱᛖᛊᛊ",
        title: "Traction & Milestones",
        content: `
            <span class="deck-runic-accent">ᚨᚲᚲᛟᛗᛈᛚᛁᛊᚺᛖᛞ</span>
            <ul class="traction-list">
                <li><span class="runic-bullet">✓</span><strong>Core Toolkit v0.3.1 Complete:</strong> All 7 core pieces are shipped across memory, Souls, Ghost scouting, and world-bridge systems.</li>
                <li><span class="runic-bullet">✓</span><strong>Core Service Live:</strong> The live backend is deployed and serving the ForbocAI stack.</li>
                <li><span class="runic-bullet">✓</span><strong>Local Character Thinking:</strong> Local support is working with compact GGUF-backed models.</li>
                <li><span class="runic-bullet">✓</span><strong>Living Memory:</strong> Semantic recall and temporal memory systems are already in place.</li>
                <li><span class="runic-bullet">✓</span><strong>$FAI Live:</strong> The public market path is live for the ForbocAI Soul economy.</li>
                <li><span class="runic-bullet">✓</span><strong>Playable Demos:</strong> Multiple ForbocAI-owned demos prove the character layer in different world styles.</li>
                <li><span class="runic-bullet">✓</span><strong>Developer Guides:</strong> Public docs are live at docs.forboc.ai.</li>
                <li><span class="runic-bullet">✓</span><strong>Behavior Coverage:</strong> End-to-end checks are in place across the live service surface.</li>
            </ul>
            <div class="runic-glyph">᛭ ᚾ ᛫ ᛖ ᛫ ᚲ ᛫ ᛊ ᛫ ᛏ ᛭</div>
            <h4>Next Milestones</h4>
            <ul class="milestone-list">
                <li><span class="runic-bullet">ᚠ</span>Q1 2026: Character-layer hardening and memory polish</li>
                <li><span class="runic-bullet">ᚢ</span>Q2 2026: Python &amp; Rust bindings plus Ghost Scout testing tools</li>
                <li><span class="runic-bullet">ᚦ</span>Q3 2026: Soul minting flow, marketplace operations, and Unity/Unreal plugins</li>
            </ul>
        `
    },
    {
        id: 11,
        runicLabel: "ᛈᚨᚦ",
        runicSubtitle: "ᚱᛟᚨᛞᛗᚨᛈ",
        title: "The Roadmap",
        content: `
            <span class="deck-runic-accent">2026 ᚨᚾᛞ ᛒᛖᛁᛟᚾᛞ</span>
            <ol class="roadmap-steps detailed">
                <li>
                    <span class="phase-rune">ᚠ</span>
                    <strong>Q1 2026:</strong> Character-layer foundation with local thinking and memory continuity
                </li>
                <li>
                    <span class="phase-rune">ᚢ</span>
                    <strong>Q2 2026:</strong> World-grounded actions and Ghost Scout testing tools
                </li>
                <li>
                    <span class="phase-rune">ᚦ</span>
                    <strong>Q3 2026:</strong> Soul economy launch with wallet connections and marketplace operations
                </li>
                <li>
                    <span class="phase-rune">ᚨ</span>
                    <strong>Q4 2026:</strong> Broader studio field guides, Soul upgrades, and long-session continuity
                </li>
                <li>
                    <span class="phase-rune">ᚱ</span>
                    <strong>2027:</strong> Wider studio rollout, studio partnerships, and cross-world Soul interoperability
                </li>
            </ol>
            <div class="runic-timeline">ᚠ ─── ᚢ ─── ᚦ ─── ᚨ ─── ᚱ</div>
        `
    },
    {
        id: 12,
        runicLabel: "ᚨᛊᚲ",
        runicSubtitle: "ᛊᛖᛖᛞ",
        title: "The Ask",
        content: `
            <span class="deck-runic-accent">ᛊᛖᛖᛞ ᚱᛟᚢᚾᛞ</span>
            <h3>Seed Round</h3>
            <p class="ask-intro">We're raising to build the founding team, ship partner pilots, and harden the first production-ready version of the ForbocAI character layer and Soul economy.</p>
            <div class="use-of-funds">
                <h4>Use of Funds</h4>
                <ul class="funds-list">
                    <li><span class="runic-bullet">ᚠ</span><strong>40%</strong> — Engineering (Co-founder hires, contractors)</li>
                    <li><span class="runic-bullet">ᚢ</span><strong>20%</strong> — Infrastructure (compute, support, legal)</li>
                    <li><span class="runic-bullet">ᚦ</span><strong>30%</strong> — Partner development, Soul economy rollout, and market validation</li>
                    <li><span class="runic-bullet">ᚨ</span><strong>10%</strong> — Legal &amp; Compliance</li>
                </ul>
            </div>
            <div class="runic-glyph">ᚷ ᛫ ᛟ ᛫ ᛖ ᛫ ᛏ ᛫ ᛖ ᛫ ᛁ ᛫ ᚨ ᛫ ᚾ</div>
            <div class="contact-box">
                <span class="contact-runes">ᚲᛟᚾᛏᚨᚲᛏ</span>
                <a href="mailto:hello@forboc.ai" class="btn btn-primary">hello@forboc.ai</a>
            </div>
        `
    }
];

export const PitchDeck = (state) => {
    const currentSlide = selectPitchSlide(state);
    const totalSlides = slides.length;

    const safeSlideIndex = Math.max(1, Math.min(currentSlide, totalSlides));
    const slide = slides.find(s => s.id === safeSlideIndex);

    const prevLink = safeSlideIndex > 1 ? `#pitch/${safeSlideIndex - 1}` : '#';
    const nextLink = safeSlideIndex < totalSlides ? `#pitch/${safeSlideIndex + 1}` : '#';

    return `
    <section class="pitch-deck">
        <div class="pitch-runic-bg">ᚠᛟᚱᛒᛟᚲ</div>
        <div class="pitch-rune-banner" aria-hidden="true">ᚠ ᛟ ᚱ ᛒ ᛟ ᚲ ᛫ ᛋ ᛖ ᛖ ᛞ ᛫ ᛞ ᛖ ᚲ ᚲ</div>
        <div class="pitch-corner-runes">
            <span class="corner-rune tl">ᚠ</span>
            <span class="corner-rune tr">ᚢ</span>
            <span class="corner-rune bl">ᚦ</span>
            <span class="corner-rune br">ᚨ</span>
        </div>
        <div class="container">
            <div class="deck-frame">

                <div class="deck-header">
                    <div class="deck-brand">
                        <span class="deck-runes">${slide?.runicLabel || 'ᚠᛟᚱᛒᛟᚲ'}</span>
                        <span class="deck-subtitle">${slide?.runicSubtitle || 'ᛁᚾᛏᛖᛚᛚᛁᚷᛖᚾᚲᛖ'}</span>
                    </div>
                    <div class="deck-slide-indicator">
                        <span class="indicator-current">${safeSlideIndex}</span>
                        <span class="indicator-separator">/</span>
                        <span class="indicator-total">${totalSlides}</span>
                    </div>
                </div>

                <div class="slide-container">
                    <div class="slide-content">
                        <h2 class="slide-title">${slide?.title || 'Slide Not Found'}</h2>
                        <div class="slide-body">
                            ${slide?.content || '<p>Unable to load slide content.</p>'}
                        </div>
                    </div>
                </div>

                <div class="deck-controls">
                    <a href="${prevLink}" class="btn-control ${safeSlideIndex <= 1 ? 'disabled' : ''}" ${safeSlideIndex <= 1 ? 'aria-disabled="true"' : ''}>
                        ← Back
                    </a>
                    <div class="slide-dots">
                        ${slides.map(s => `
                            <a
                                href="#pitch/${s.id}"
                                class="slide-dot ${s.id === safeSlideIndex ? 'active' : ''}"
                                aria-label="Go to slide ${s.id}"
                            ></a>
                        `).join('')}
                    </div>
                    <a href="${nextLink}" class="btn-control ${safeSlideIndex >= totalSlides ? 'disabled' : ''}" ${safeSlideIndex >= totalSlides ? 'aria-disabled="true"' : ''}>
                        Next →
                    </a>
                </div>

                <div class="deck-footer">
                    <div class="footer-left">
                        <span class="footer-runes">ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ</span>
                    </div>
                    <div class="footer-center">
                        <span class="footer-title">ForbocAI, Inc. Seed Deck</span>
                    </div>
                    <div class="footer-right">
                        <span class="footer-page">${String(safeSlideIndex).padStart(2, '0')}</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
    `;
};
