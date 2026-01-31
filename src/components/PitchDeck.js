/**
 * Pitch Deck Component
 * A comprehensive 12-slide investor presentation deck.
 * Structure inspired by Whitepaper.js patterns.
 */
import { selectPitchSlide } from '../domains/navigationSlice.js';

// Runic alphabet reference: ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ
// F U TH A R K G W H N I J EI P Z S T B E M L NG D O

const slides = [
    // ═══════════════════════════════════════════════════════════
    // SLIDE 1: Title / Cover
    // ═══════════════════════════════════════════════════════════
    {
        id: 1,
        runicLabel: "ᚠᛟᚱᛒᛟᚲ",
        runicSubtitle: "ᛁᚾᛏᛖᛚᛚᛁᚷᛖᚾᚲᛖ",
        title: "ForbocAI",
        content: `
            <div class="title-slide">
                <div class="runic-glyph">᛭ ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ ᛭</div>
                <h3 class="tagline">Autonomous AI Agents That <span class="gradient-text">Live</span>, <span class="gradient-text">Learn</span>, and <span class="gradient-text">Transcend</span></h3>
                <p class="subtitle">A Neuro-Symbolic Engine for Persistent, Ownable Game Intelligence</p>
                <div class="runic-divider">ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ</div>
                <p class="deck-meta">Seed Round // January 2026</p>
            </div>
        `
    },
    // ═══════════════════════════════════════════════════════════
    // SLIDE 2: The Problem
    // ═══════════════════════════════════════════════════════════
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
                        <li>Cannot improvise or remember beyond pre-defined variables</li>
                        <li>Creates "ludonarrative dissonance"—worlds that look real but feel dead</li>
                    </ul>
                </div>
                <div class="problem-column">
                    <span class="deck-runic-accent">ᚷᛖᚾ ᚨᛁ</span>
                    <h3>Generative AI is <span class="highlight-red">Chaotic</span></h3>
                    <ul class="problem-list">
                        <li><strong>500ms+</strong> latency breaks real-time immersion</li>
                        <li>API costs are economically unviable for persistent worlds</li>
                        <li>Hallucinations violate game logic (inventory, quests, rules)</li>
                    </ul>
                </div>
            </div>
            <div class="runic-glyph">᛭ ᚦ ᛫ ᚱ ᛫ ᛖ ᛫ ᚨ ᛫ ᛏ ᛭</div>
            <p class="impact-statement">Neither are persistent. Neither are alive. <strong>Neither are owned.</strong></p>
        `
    },
    // ═══════════════════════════════════════════════════════════
    // SLIDE 3: The Solution
    // ═══════════════════════════════════════════════════════════
    {
        id: 3,
        runicLabel: "ᛊᛟᛚᚢᛏᛁᛟᚾ",
        runicSubtitle: "ᛈᚱᛟᛏᛟᚲᛟᛚ",
        title: "The Solution",
        content: `
            <span class="deck-runic-accent">ᚠᛟᚱᛒᛟᚲ ᛈᚱᛟᛏᛟᚲᛟᛚ</span>
            <h3>The Forboc Intelligence Protocol</h3>
            <p class="solution-intro">A <strong>Neuro-Symbolic Intelligence Layer</strong> that integrates into any game engine, giving NPCs persistent memory and true agency via <strong>local-first SLMs</strong>.</p>
            <div class="runic-glyph">᛭ ᚠ ᛫ ᚨ ᛫ ᛁ ᛭</div>
            <ul class="feature-list">
                <li><span class="runic-bullet">ᚠ</span><strong>Local Inference (Cortex):</strong> Zero latency, zero server costs, complete privacy. Runs on native or headless.</li>
                <li><span class="runic-bullet">ᛟ</span><strong>State-Aware Inference Layer:</strong> AI outputs intent; the layer validates against app logic. Bug-free, deterministic execution.</li>
                <li><span class="runic-bullet">ᚱ</span><strong>RAG Memory Pipeline:</strong> NPCs observe, embed, and recall experiences. Agents that remember <em>everything</em>.</li>
                <li><span class="runic-bullet">ᛊ</span><strong>Tokenized Souls (ERC-7007):</strong> Export agents to IPFS. Own, trade, and port them across worlds.</li>
            </ul>
        `
    },
    // ═══════════════════════════════════════════════════════════
    // SLIDE 4: Tech Moat
    // ═══════════════════════════════════════════════════════════
    {
        id: 4,
        runicLabel: "ᛗᛟᚨᛏ",
        runicSubtitle: "ᛏᛖᚲᚺᚾᛟᛚᛟᚷᛁ",
        title: "The Tech Moat",
        content: `
            <p class="moat-intro">Our defensible advantages compound over time:</p>
            <div class="moat-grid">
                <div class="moat-item">
                    <span class="moat-rune">ᛖ</span>
                    <h4>Neuro-Symbolic Bridge</h4>
                    <p>Separation of Logic (App State) and Vibes (LLM). The AI thinks; the system enforces rules.</p>
                </div>
                <div class="moat-item">
                    <span class="moat-rune">ᛊ</span>
                    <h4>Edge-First SLMs</h4>
                    <p>Quantized models (SmolLM2) optimized for consumer hardware. No cloud dependency.</p>
                </div>
                <div class="moat-item">
                    <span class="moat-rune">ᚷ</span>
                    <h4>Ghost Agent QA</h4>
                    <p>Headless AI agents test content at 100x speed. Catch narrative dead-ends before players do.</p>
                </div>
                <div class="moat-item">
                    <span class="moat-rune">ᛟ</span>
                    <h4>Forboc Protocol</h4>
                    <p>Open interoperability standard for AI Souls. Network effects grow with every adopter.</p>
                </div>
            </div>
            <div class="runic-glyph">ᛊ ᛫ ᛟ ᛫ ᚢ ᛫ ᛚ ᛫ ᛊ</div>
        `
    },
    // ═══════════════════════════════════════════════════════════
    // SLIDE 5: Market Opportunity
    // ═══════════════════════════════════════════════════════════
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
                <li><span class="runic-bullet">ᚠ</span><strong>Consumer Hardware Ready:</strong> Apple M-series, NVIDIA RTX, and Snapdragon NPUs enable local LLM inference.</li>
                <li><span class="runic-bullet">ᚢ</span><strong>Open Model Explosion:</strong> SmolLM2, Phi-3, Llama 3.2—quantized models are production-viable.</li>
                <li><span class="runic-bullet">ᚦ</span><strong>Narrative Demand:</strong> Players crave worlds that respond—not just react.</li>
            </ul>
        `
    },
    // ═══════════════════════════════════════════════════════════
    // SLIDE 6: Business Model
    // ═══════════════════════════════════════════════════════════
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
                    <h4>SDK Licensing</h4>
                    <p>SaaS for developers. Per-seat subscriptions for the <strong>Forboc SDK</strong> and local inference tools.</p>
                    <span class="revenue-type">Recurring SaaS</span>
                </div>
                <div class="business-item">
                    <span class="business-phase">Phase 2</span>
                    <h4>Enterprise Integration</h4>
                    <p>Custom implementations for large studios and platforms requiring bespoke SLM fine-tuning.</p>
                    <span class="revenue-type">High-Touch B2B</span>
                </div>
                <div class="business-item">
                    <span class="business-phase">Phase 3</span>
                    <h4>Protocol Fees</h4>
                    <p>Transaction fees on Soul marketplace. Royalties on cross-world agent imports.</p>
                    <span class="revenue-type">Network Effects</span>
                </div>
            </div>
            <div class="runic-glyph">ᚠ ᛫ ᛚ ᛫ ᛟ ᛫ ᚹ</div>
        `
    },
    // ═══════════════════════════════════════════════════════════
    // SLIDE 7: Go-to-Market
    // ═══════════════════════════════════════════════════════════
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
                        <strong>Proof of Intelligence (2026)</strong>
                        <p>Launch <strong>Interactive Tech Demo</strong>. Showcase the Protocol in a rich narrative environment ("Goetéian Chthonica" lore).</p>
                    </div>
                </li>
                <li>
                    <span class="phase-rune">ᚢ</span>
                    <div class="gtm-content">
                        <strong>Developer Evangelism</strong>
                        <p>Open-source SDK components. GDC talks. Empower modders to build the first "Smart Mods".</p>
                    </div>
                </li>
                <li>
                    <span class="phase-rune">ᚦ</span>
                    <div class="gtm-content">
                        <strong>Studio Partnerships</strong>
                        <p>Target mid-tier studios seeking deep AI integration for their narrative RPGs.</p>
                    </div>
                </li>
                <li>
                    <span class="phase-rune">ᚨ</span>
                    <div class="gtm-content">
                        <strong>Protocol Network Effects</strong>
                        <p>Every module/campaign on the Protocol increases Soul interoperability value.</p>
                    </div>
                </li>
            </ol>
        `
    },
    // ═══════════════════════════════════════════════════════════
    // SLIDE 8: Competition
    // ═══════════════════════════════════════════════════════════
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
                    <span>Local</span>
                    <span>Persistent</span>
                    <span>Ownable</span>
                    <span>Interop</span>
                </div>
                <div class="comp-row">
                    <span class="comp-name">Cloud LLM APIs</span>
                    <span class="comp-no">✗</span>
                    <span class="comp-no">✗</span>
                    <span class="comp-no">✗</span>
                    <span class="comp-no">✗</span>
                </div>
                <div class="comp-row">
                    <span class="comp-name">Inworld AI</span>
                    <span class="comp-no">✗</span>
                    <span class="comp-partial">~</span>
                    <span class="comp-no">✗</span>
                    <span class="comp-no">✗</span>
                </div>
                <div class="comp-row">
                    <span class="comp-name">Convai</span>
                    <span class="comp-no">✗</span>
                    <span class="comp-partial">~</span>
                    <span class="comp-no">✗</span>
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
            <p class="comp-note">Competitors are cloud-dependent, non-persistent, and siloed. We are the only solution enabling <strong>local, persistent, ownable, interoperable</strong> AI agents.</p>
        `
    },
    // ═══════════════════════════════════════════════════════════
    // SLIDE 9: Team
    // ═══════════════════════════════════════════════════════════
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
                    <h4>Founder / CEO</h4>
                    <p>Full-stack engineer with enterprise AI orchestration experience. Built generative AI pipelines at scale.</p>
                </div>
                <div class="team-member hiring">
                    <span class="team-rune">ᚢ</span>
                    <h4>Co-Founder / CTO</h4>
                    <p class="hiring-badge">HIRING</p>
                    <p>Seeking: Systems engineer with game engine or LLM inference expertise.</p>
                </div>
                <div class="team-member hiring">
                    <span class="team-rune">ᚦ</span>
                    <h4>Co-Founder / CGO</h4>
                    <p class="hiring-badge">HIRING</p>
                    <p>Seeking: Growth lead with gaming or web3 community building experience.</p>
                </div>
            </div>
            <div class="runic-divider">ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ</div>
            <p class="team-note">We're building the founding team. Equity-first compensation (10-20%) for co-founders who believe in the vision.</p>
        `
    },
    // ═══════════════════════════════════════════════════════════
    // SLIDE 10: Traction
    // ═══════════════════════════════════════════════════════════
    {
        id: 10,
        runicLabel: "ᛏᚱᚨᚲᛏᛁᛟᚾ",
        runicSubtitle: "ᛈᚱᛟᚷᚱᛖᛊᛊ",
        title: "Traction & Milestones",
        content: `
            <span class="deck-runic-accent">ᚨᚲᚲᛟᛗᛈᛚᛁᛊᚺᛖᛞ</span>
            <ul class="traction-list">
                <li><span class="runic-bullet">✓</span><strong>Technical Whitepaper:</strong> Published architecture for Neuro-Symbolic Bridge and Cortex.</li>
                <li><span class="runic-bullet">✓</span><strong>Core Architecture:</strong> Deterministic state loop with Redux-style state management.</li>
                <li><span class="runic-bullet">✓</span><strong>Forboc Protocol Spec:</strong> Soul serialization format and ERC-7007 integration design.</li>
                <li><span class="runic-bullet">✓</span><strong>Community Launch:</strong> Discord, Telegram, and Wellfound presence established.</li>
            </ul>
            <div class="runic-glyph">᛭ ᚾ ᛫ ᛖ ᛫ ᚲ ᛫ ᛊ ᛫ ᛏ ᛭</div>
            <h4>Next Milestones</h4>
            <ul class="milestone-list">
                <li><span class="runic-bullet">ᚠ</span>Q1 2026: Local Inference Alpha & RAG Integration</li>
                <li><span class="runic-bullet">ᚢ</span>Q2 2026: Ghost Agent QA Tooling & Developer Preview</li>
                <li><span class="runic-bullet">ᚦ</span>Q3 2026: Interactive Tech Demo / Reference Implementation</li>
            </ul>
        `
    },
    // ═══════════════════════════════════════════════════════════
    // SLIDE 11: Roadmap
    // ═══════════════════════════════════════════════════════════
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
                    <strong>Q1 2026:</strong> Local Inference Alpha & RAG Integration
                </li>
                <li>
                    <span class="phase-rune">ᚢ</span>
                    <strong>Q2 2026:</strong> Neuro-Symbolic Bridge & Ghost Agent QA Tooling
                </li>
                <li>
                    <span class="phase-rune">ᚦ</span>
                    <strong>Q3 2026:</strong> Agent Economy Launch (Wallet Integration & IPFS Exports)
                </li>
                <li>
                    <span class="phase-rune">ᚨ</span>
                    <strong>Q4 2026:</strong> Forboc SDK for Module & Campaign Creators
                </li>
                <li>
                    <span class="phase-rune">ᚱ</span>
                    <strong>2027:</strong> Protocol V1.0 & Enterprise Studio Partnerships
                </li>
            </ol>
            <div class="runic-timeline">ᚠ ─── ᚢ ─── ᚦ ─── ᚨ ─── ᚱ</div>
        `
    },
    // ═══════════════════════════════════════════════════════════
    // SLIDE 12: The Ask
    // ═══════════════════════════════════════════════════════════
    {
        id: 12,
        runicLabel: "ᚨᛊᚲ",
        runicSubtitle: "ᛊᛖᛖᛞ",
        title: "The Ask",
        content: `
            <span class="deck-runic-accent">ᛊᛖᛖᛞ ᚱᛟᚢᚾᛞ</span>
            <h3>Seed Round</h3>
            <p class="ask-intro">We're raising to build the founding team or ship the first production-ready version of the Forboc Protocol.</p>
            <div class="use-of-funds">
                <h4>Use of Funds</h4>
                <ul class="funds-list">
                    <li><span class="runic-bullet">ᚠ</span><strong>40%</strong> — Engineering (Co-founder hires, contractors)</li>
                    <li><span class="runic-bullet">ᚢ</span><strong>20%</strong> — Infrastructure (Compute, tooling, legal)</li>
                    <li><span class="runic-bullet">ᚦ</span><strong>30%</strong> — Community & Marketing (Events, content, evangelism)</li>
                    <li><span class="runic-bullet">ᚨ</span><strong>10%</strong> — Legal & Compliance</li>
                </ul>
            </div>
            <div class="runic-glyph">ᚷ ᛫ ᛟ ᛫ ᛖ ᛫ ᛏ ᛫ ᛖ ᛫ ᛁ ᛫ ᚨ ᛫ ᚾ</div>
            <div class="contact-box">
                <span class="contact-runes">ᚲᛟᚾᛏᚨᚲᛏ</span>
                <a href="mailto:forbocai@sdin.dev" class="btn btn-primary">forbocai@sdin.dev</a>
            </div>
        `
    }
];

export const PitchDeck = (state) => {
    const currentSlide = selectPitchSlide(state);
    const totalSlides = slides.length;
    
    // Ensure slide index is valid
    const safeSlideIndex = Math.max(1, Math.min(currentSlide, totalSlides));
    const slide = slides.find(s => s.id === safeSlideIndex);
    
    const prevLink = safeSlideIndex > 1 ? `#pitch/${safeSlideIndex - 1}` : '#';
    const nextLink = safeSlideIndex < totalSlides ? `#pitch/${safeSlideIndex + 1}` : '#';

    return `
    <section class="pitch-deck">
        <div class="pitch-runic-bg">ᚠᛟᚱᛒᛟᚲ</div>
        <div class="pitch-corner-runes">
            <span class="corner-rune tl">ᚠ</span>
            <span class="corner-rune tr">ᚢ</span>
            <span class="corner-rune bl">ᚦ</span>
            <span class="corner-rune br">ᚨ</span>
        </div>
        <div class="container">
            <div class="deck-frame">

                <div class="deck-header">
                    <div class="slide-runic-label">${slide.runicLabel}</div>
                    <div class="slide-counter">SLIDE ${safeSlideIndex.toString().padStart(2, '0')} / ${totalSlides.toString().padStart(2, '0')}</div>
                    <div class="deck-controls">
                        <a href="${prevLink}" class="btn-control ${safeSlideIndex === 1 ? 'disabled' : ''}">ᚠ PREV</a>
                        <a href="${nextLink}" class="btn-control ${safeSlideIndex === totalSlides ? 'disabled' : ''}">NEXT ᚱ</a>
                    </div>
                </div>
                
                <div class="slide-content">
                    <span class="slide-runic-subtitle">${slide.runicSubtitle}</span>
                    <h2 class="slide-title">${slide.title}</h2>
                    <div class="slide-body">
                        ${slide.content}
                    </div>
                </div>

                <div class="deck-footer">
                    <div class="footer-runes">ᚠᛟᚱᛒᛟᚲ ᛁᚾᛏᛖᛚᛚᛁᚷᛖᚾᚲᛖ</div>
                    <div class="confidential-mark">FORBOC INTELLIGENCE // CONFIDENTIAL</div>
                </div>
            </div>
        </div>
    </section>
    `;
};
