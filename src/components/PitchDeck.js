/**
 * Pitch Deck Component
 * Company deck. Every figure here traces to the internal market research;
 * nothing claims to be shipped that is not.
 */
import { selectPitchSlide } from '../domains/navigationSlice.js';

const slides = [
    {
        id: 1,
        title: 'Game characters who remember the player, stay inside the rules, and can be carried into the next world.',
        content: `
            <div class="title-slide">
                <p class="subtitle">ForbocAI, Inc. sells game studios a character layer: persistent memory, validated actions, automated playtesting with Ghost, and Souls — with the <strong>$FAI</strong> utility layer underneath the Soul economy.</p>
                <p class="deck-meta">Seed round — September 2026</p>
            </div>
            <img src="Lanternbough.png" class="title-slide-art" alt="" aria-hidden="true" width="640" height="640">
        `
    },
    {
        id: 2,
        title: 'The problem',
        content: `
            <div class="problem-grid">
                <div class="problem-column">
                    <h3>Scripted AI is finite</h3>
                    <ul class="problem-list">
                        <li>Behaviour trees and state machines a player exhausts in an afternoon</li>
                        <li>Nothing a character learns in hour three reaches hour forty</li>
                        <li>Worlds that look extraordinary and still feel unpopulated</li>
                    </ul>
                </div>
                <div class="problem-column">
                    <h3>Generative AI is ungoverned</h3>
                    <ul class="problem-list">
                        <li>Chat-window latency is a broken beat in live play</li>
                        <li>Per-token billing at gameplay cadence does not survive a real player count</li>
                        <li>A model that was not told about your inventory will give away an item the player never had</li>
                    </ul>
                </div>
            </div>
            <p class="impact-statement">Neither is a model-quality problem. Both are architecture problems.</p>
        `
    },
    {
        id: 3,
        title: 'What we sell',
        content: `
            <p class="solution-intro">A character layer that sits between the game and the model. The game keeps world authority. We keep the character coherent — and hand back structured intent a build can act on.</p>
            <ul class="feature-list">
                <li><strong>Hosted cognition.</strong> ForbocAI's proprietary NPC model Servitor runs on our infrastructure. No runtime to package, no GPU path to qualify, identical behaviour on every player's machine.</li>
                <li><strong>Validated actions.</strong> A character proposes; the layer checks it against your state and rules before anything moves. An unqualified answer fails loudly instead of inventing something.</li>
                <li><strong>Memory you own.</strong> We issue the instruction to remember; your build writes it to a store your studio controls and can read without us.</li>
                <li><strong>Ghost.</strong> Headless characters play the build repeatedly and return coverage, dead ends, and regressions before players find them.</li>
                <li><strong>Souls.</strong> A character gathered up — identity, memory, relationships — verified and restorable in another world.</li>
            </ul>
        `
    },
    {
        id: 4,
        title: 'Why it holds',
        content: `
            <p class="moat-intro">Four advantages that compound rather than expire:</p>
            <div class="moat-grid">
                <div class="moat-item">
                    <h4>World authority stays with the studio</h4>
                    <p>Character expression is structurally separated from game-state mutation. Creative behaviour is bounded by rules the studio wrote, not by prompt discipline.</p>
                </div>
                <div class="moat-item">
                    <h4>A game-agnostic protocol</h4>
                    <p>Games supply state schemas, action types, and validation rules. We import none of their mechanics. The same boundary serves an RPG, a life-sim, and a roguelike.</p>
                </div>
                <div class="moat-item">
                    <h4>Ghost is a second product</h4>
                    <p>Automated playtesting is a real category — modl.ai is the serious name in it — but it tests systems, not social content. Ghost's testers are the same characters your players will meet, so it surfaces dead conversation loops and unreachable quest states rather than collision bugs.</p>
                </div>
                <div class="moat-item">
                    <h4>Souls turn retention into an asset</h4>
                    <p>The same stack that makes a character feel alive gives her a portable economic surface — and gives us a revenue line beyond licensing.</p>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: 'Market',
        content: `
            <div class="market-metrics">
                <div class="metric-box">
                    <span class="metric-value">$5.51B</span>
                    <span class="metric-label">AI NPC generation by 2029, from $1.41B in 2024 — a 31.2% CAGR</span>
                </div>
                <div class="metric-box">
                    <span class="metric-value">$12.8B</span>
                    <span class="metric-label">AI in gaming by 2033</span>
                </div>
                <div class="metric-box">
                    <span class="metric-value">31.2%</span>
                    <span class="metric-label">Compound annual growth in that category, 2024 to 2029</span>
                </div>
            </div>
            <h4>Why now</h4>
            <ul class="feature-list">
                <li><strong>Small models got good enough.</strong> A compact model fine-tuned for one job now answers in-character at playable latency, at a serving cost that survives a shipped title — which a frontier API at gameplay cadence does not.</li>
                <li><strong>The cost of the alternative is visible.</strong> Frontier APIs bill $0.125–$1.00 per million tokens; self-hosting a 7B model runs roughly $4,320 a month before anyone qualifies it.</li>
                <li><strong>Players notice.</strong> Narrative-heavy and character-driven titles are where the growth is, and a world that resets every conversation is now the thing that reads as dated.</li>
            </ul>
        `
    },
    {
        id: 6,
        title: 'Business model',
        content: `
            <p class="moat-intro">Every layer below is rent on one asset. The subscription is not for an SDK — an SDK is a weekend of somebody's time. It is for the model the SDK is the only route to, which is why a studio that integrates has nothing to churn to.</p>
            <div class="business-grid">
                <div class="business-item">
                    <span class="business-phase">Layer 1</span>
                    <h4>SDK and API access</h4>
                    <p>The SDK is inert without the API, so access is the product. Tiered plans by request volume, billed through Stripe and the engine marketplaces.</p>
                    <span class="revenue-type">Recurring, per studio</span>
                </div>
                <div class="business-item">
                    <span class="business-phase">Layer 2</span>
                    <h4>Usage and operations</h4>
                    <p>Every time a character wants to change the world it passes through the check, which is the natural place to meter. Ghost and its dashboards are a separate per-title subscription.</p>
                    <span class="revenue-type">Consumption, per title</span>
                </div>
                <div class="business-item">
                    <span class="business-phase">Layer 3</span>
                    <h4>Soul economy</h4>
                    <p>A platform fee on Soul trading and NPC template licensing, settled in $FAI. Scales as titles ship with the SDK rather than as a launch bet.</p>
                    <span class="revenue-type">Protocol rake</span>
                </div>
            </div>
        `
    },
    {
        id: 7,
        title: 'Go to market',
        content: `
            <ol class="gtm-steps">
                <li>
                    <div class="gtm-content">
                        <strong>Prove it in a build</strong>
                        <p>Playable demos across an Unreal project, a browser title, and a text world — showing memory, validated action, and continuity in something a developer can run.</p>
                    </div>
                </li>
                <li>
                    <div class="gtm-content">
                        <strong>Land developers directly</strong>
                        <p>Docs, starter kits, and the account portal, so a small team can get a character answering from the CLI before committing engine work, and be billed properly from the first call.</p>
                    </div>
                </li>
                <li>
                    <div class="gtm-content">
                        <strong>Distribute through the engines</strong>
                        <p>Fab for Unreal first, where studios already look for middleware and already have a payment relationship. Unity follows its SDK, not the other way round.</p>
                    </div>
                </li>
                <li>
                    <div class="gtm-content">
                        <strong>Open the Soul marketplace</strong>
                        <p>Once multiple titles ship with the SDK, Souls and $FAI turn an installed base into transaction flow.</p>
                    </div>
                </li>
            </ol>
        `
    },
    {
        id: 8,
        title: 'Landscape',
        content: `
            <div class="competition-table">
                <div class="comp-header">
                    <span>Approach</span>
                    <span>Rules enforced</span>
                    <span>Memory you own</span>
                    <span>Portable</span>
                    <span>Engine-native</span>
                </div>
                <div class="comp-row">
                    <span class="comp-name">Frontier chat APIs</span>
                    <span class="comp-no">no</span>
                    <span class="comp-no">no</span>
                    <span class="comp-no">no</span>
                    <span class="comp-no">no</span>
                </div>
                <div class="comp-row">
                    <span class="comp-name">NPC dialogue platforms</span>
                    <span class="comp-partial">partial</span>
                    <span class="comp-no">no</span>
                    <span class="comp-no">no</span>
                    <span class="comp-partial">partial</span>
                </div>
                <div class="comp-row">
                    <span class="comp-name">In-house prototypes</span>
                    <span class="comp-partial">partial</span>
                    <span class="comp-yes">yes</span>
                    <span class="comp-no">no</span>
                    <span class="comp-yes">yes</span>
                </div>
                <div class="comp-row highlight-row">
                    <span class="comp-name"><strong>ForbocAI</strong></span>
                    <span class="comp-yes">yes</span>
                    <span class="comp-yes">yes</span>
                    <span class="comp-yes">yes</span>
                    <span class="comp-yes">yes</span>
                </div>
            </div>
            <p class="comp-note">The comparison set is Inworld, Convai, NPCx, Charisma.ai, and AI Dungeon. Most stop at conversation. The dimensions above are the ones that decide whether a studio can ship on it: who owns cognition, who owns game state, who holds the memory, and whether a character can leave.</p>
        `
    },
    {
        id: 9,
        title: 'Team',
        content: `
            <div class="team-grid">
                <div class="team-member">
                    <h4>Sean Dinwiddie</h4>
                    <p><strong>President, lead developer</strong><br/>Full-stack engineer building the API, the SDKs, and Servitor itself — the whole chain from the model to the engine plugin.</p>
                </div>
                <div class="team-member">
                    <h4>Tiernan Omalley</h4>
                    <p><strong>Business development</strong><br/>Studio partnerships, publisher conversations, and developer community.</p>
                </div>
                <div class="team-member">
                    <h4>Antara Bhavsar</h4>
                    <p><strong>Software developer</strong><br/>Engine integration, with a focus on the Unreal Engine 5 plugin and SDK parity across bindings.</p>
                </div>
            </div>
            <p class="team-note">Delaware C corporation, incorporated February 2026. Founders on standard four-year vesting with a twelve-month cliff, and 20% of the cap table reserved for the option pool.</p>
        `
    },
    {
        id: 10,
        title: 'Traction',
        content: `
            <ul class="traction-list">
                <li><strong>The API is live.</strong> ForbocAI's proprietary NPC model Servitor is deployed and serving behaviour on our own infrastructure against a pinned, qualified release.</li>
                <li><strong>Persistent memory works.</strong> Semantic recall and time-aware memory are shipped, writing to a store the studio owns.</li>
                <li><strong>Two SDKs ship the full contract.</strong> TypeScript for Node and the browser, and a native Unreal Engine 5 plugin.</li>
                <li><strong>Playable demos.</strong> Three builds we own — an Unreal project, a browser title, and a text world — each running against the live API. No third-party title has shipped on it yet; the first pilots are what this round is for.</li>
                <li><strong>Docs are public</strong> at docs.forboc.ai, covering both SDKs.</li>
                <li><strong>$FAI is live.</strong> Its stated product uses are Soul minting, upgrades, registration, and marketplace operations. It gets one line here on purpose: subscriptions and usage are the business today.</li>
                <li><strong>End-to-end verification.</strong> A micro-game harness drives the whole path — CLI to SDK to API to Servitor and back — so coverage and model quality are proved separately and neither borrows the other's green mark.</li>
            </ul>
            <h4>Next</h4>
            <ul class="milestone-list">
                <li>Through Q4 2026 — Ghost coverage reporting, Soul minting end to end, the account portal, SDK 1.0</li>
                <li>2027 — marketplace operations, cross-title Soul portability, further engine bindings</li>
            </ul>
        `
    },
    {
        id: 11,
        title: 'Roadmap',
        content: `
            <ol class="roadmap-steps">
                <li><strong>Shipped —</strong> hosted cognition, persistent memory, validated actions, TypeScript and Unreal SDKs, public docs, $FAI live</li>
                <li><strong>Q4 2026 —</strong> Ghost coverage reporting and the account portal, with billing and key management in one place</li>
                <li><strong>Q4 2026 —</strong> Soul minting end to end: gather, encrypt, upload, verify, restore</li>
                <li><strong>2027 —</strong> marketplace operations for Soul trading and NPC template licensing</li>
                <li><strong>2027 and beyond —</strong> cross-title Soul portability and wider studio rollout</li>
            </ol>
        `
    },
    {
        id: 12,
        title: 'The ask',
        content: `
            <p class="ask-intro">We are raising a seed round to qualify the SDK, API and billing path, deliver partner integrations, and bring Soul and Ghost workflows to production readiness.</p>
            <div class="use-of-funds">
                <h4>Use of funds</h4>
                <ul class="funds-list">
                    <li><strong>40%</strong> — Engineering: co-founder hires and contractors</li>
                    <li><strong>30%</strong> — Partner development, Soul economy rollout, market validation</li>
                    <li><strong>20%</strong> — Infrastructure: compute, support, operations</li>
                    <li><strong>10%</strong> — Legal and compliance</li>
                </ul>
            </div>
            <div class="contact-box">
                <a href="mailto:hello@forboc.ai" class="btn btn-primary">hello@forboc.ai</a>
                <a href="#whitepaper" class="btn btn-secondary">Read the whitepaper</a>
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
    <section class="deck">
        <div class="container">
            <div class="deck-frame">

                <div class="deck-header">
                    <span class="deck-brand">ForbocAI, Inc. — seed deck</span>
                    <span class="deck-count">
                        <span class="indicator-current">${safeSlideIndex}</span>
                        <span class="indicator-separator">/</span>
                        <span class="indicator-total">${totalSlides}</span>
                    </span>
                </div>

                <div class="slide">
                    <h1 class="slide-title">${slide?.title || 'Slide not found'}</h1>
                    <div class="slide-body">
                        ${slide?.content || '<p>This slide could not be loaded.</p>'}
                    </div>
                </div>

                <div class="deck-controls">
                    <a href="${prevLink}" class="btn-control ${safeSlideIndex <= 1 ? 'disabled' : ''}" ${safeSlideIndex <= 1 ? 'aria-disabled="true" tabindex="-1"' : ''}>Back</a>
                    <div class="slide-dots">
                        ${slides.map(s => `
                            <a
                                href="#pitch/${s.id}"
                                class="slide-dot ${s.id === safeSlideIndex ? 'active' : ''}"
                                aria-label="Go to slide ${s.id} of ${totalSlides}"
                                ${s.id === safeSlideIndex ? 'aria-current="true"' : ''}
                            ></a>
                        `).join('')}
                    </div>
                    <a href="${nextLink}" class="btn-control ${safeSlideIndex >= totalSlides ? 'disabled' : ''}" ${safeSlideIndex >= totalSlides ? 'aria-disabled="true" tabindex="-1"' : ''}>Next</a>
                </div>

            </div>
        </div>
    </section>
    `;
};
