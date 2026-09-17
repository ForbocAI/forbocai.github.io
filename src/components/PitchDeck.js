/**
 * Pitch Deck Component
 * Company deck. Every figure here traces to the internal market research;
 * nothing claims to be shipped that is not.
 */
import { selectPitchSlide } from '../domains/navigationSlice.js';

const slides = [
    {
        id: 1,
        title: 'Game characters who weigh a situation, decide inside your rules, and can be carried into the next world.',
        content: `
            <div class="title-slide">
                <p class="subtitle">ForbocAI, Inc. sells game studios a character layer: bounded reasoning and decision-making, the memory it reasons from, validated actions, automated playtesting with Ghost, and Souls — with <strong>$FAI</strong> underneath the Soul economy.</p>
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
                        <li>Nothing in a chat-shaped stack is built to miss a deadline gracefully — it arrives late, or it arrives wrong, and wrong is the one that reaches the player</li>
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
                <li><strong>Hosted cognition.</strong> ForbocAI's proprietary NPC model Servitor runs on our infrastructure. No runtime to package, no GPU path to qualify, and the player's hardware never decides how well a character thinks.</li>
                <li><strong>Validated actions.</strong> A character proposes; the layer checks it against your state and rules before anything moves. An unqualified answer fails loudly instead of inventing something.</li>
                <li><strong>Reasoning you can read.</strong> Consequence weighed, supplied values compared, conflicting duties resolved, commitments held across turns, positions revised on evidence — and a rationale that comes from the same thought as the action.</li>
                <li><strong>Memory you own.</strong> We issue the instruction to remember; your build writes it to a store your studio controls and can read without us.</li>
                <li><strong>Ghost (coverage reporting, Q4 2026).</strong> Headless characters that will play the build repeatedly and return coverage, dead ends and regressions before players find them. The harness behind it qualifies Servitor releases today.</li>
                <li><strong>Souls (in build, undated).</strong> A character gathered up — identity, memory, relationships — verified and restored in another world. Queued behind Ghost.</li>
            </ul>
        `
    },
    {
        id: 4,
        title: 'Why it holds',
        content: `
            <p class="moat-intro">One thing compounds. Two of the others raise the cost of leaving, and the fourth is a second product. We are not going to call any of the three something it is not.</p>
            <div class="moat-grid">
                <div class="moat-item moat-item-primary">
                    <h4>The model, and the bench that qualifies it</h4>
                    <p>Every other layer here is a quarter's work for a competent team. A model that composes into sixteen minds, holds a world it was never trained on and refuses to invent its way out of a gap is not, because the work is sequential: each release is qualified against the bar the last one cleared, and every bar is built from a world a studio agreed to let us inside. Canon is granted, never bought. You cannot hire past a gate you have not built, and you cannot commission the world that builds it.</p>
                </div>

                <div class="moat-item">
                    <h4>World authority stays with the studio</h4>
                    <p>Character expression is structurally separated from game-state mutation. Copyable, and it makes leaving expensive once a title ships on it.</p>
                </div>
                <div class="moat-item">
                    <h4>A game-agnostic protocol</h4>
                    <p>Games supply state schemas, action types, and validation rules. We import none of their mechanics. The same boundary serves an RPG, a life-sim, and a roguelike.</p>
                </div>
                <div class="moat-item">
                    <h4>Ghost is a second product, not a second moat</h4>
                    <p>Automated playtesting is a real category — modl.ai is the serious name in it — but what it tests is systems. Conversation is where its coverage runs out. Ghost's testers are the same characters your players will meet, so it surfaces dead conversation loops and unreachable quest states rather than collision bugs.</p>
                </div>

            </div>
        `
    },
    {
        id: 5,
        title: 'Market',
        content: `
            <p class="moat-intro">We are not going to print a market size we cannot source on a site that refuses to print its own unbacked numbers. The forecasts for AI NPCs are analyst guesses about a category that did not exist in 2022. Here is the argument that does not need them.</p>
            <h4>Why now</h4>
            <p class="moat-intro">Tokenised AI agents became a real category in 2025 and a loud one in 2026. We are not going to quote you a market cap for it: a thin-float valuation is exactly the kind of number this page refuses everywhere else, and a count of launched tokens measures supply, not appetite. Here is the part that is signal. Thousands of teams set out to ship an agent that owns itself, and not one of them has shipped inside a published title, because a character who can act outside your canon breaks the world she is standing in. We are the bounded version — the one a studio can actually put in a game — and the ownership layer sits on top of that, not instead of it.</p>
            <ul class="feature-list">
                <li><strong>Small models got good enough.</strong> A compact model built for one job holds character at a serving cost that survives a shipped title, which a frontier API at gameplay cadence does not. We run it under a deadline and fail closed when it misses — the latency distribution publishes the same way everything else here does, from a passing release comparison we do not have yet.</li>
                <li><strong>The cost of the alternative is visible.</strong> A frontier API priced per token bills you every time a player talks. A self-hosted model bills you a GPU whether anyone is playing or not. Hosting it ourselves means we carry that utilisation risk instead of the studio — that is the trade, not an oversight, and plans here are tiered by request volume rather than by tokens spoken or GPUs idling.</li>
                <li><strong>Players notice.</strong> We cannot source a growth curve for a category this young, so here is the part we can stand behind: a world that resets every conversation is the last place in a modern game where a player can still catch it lying.</li>
                <li><strong>They already pay to own characters.</strong> Pokémon's TCG Pocket reportedly took <a href="https://vtmvending.com/pages/pokemon-trading-card-market-usa" target="_blank" rel="noopener noreferrer">around $1.25&nbsp;billion in first-year player spending</a> on cards identical in every collection holding them. That sizes the wanting, not our share of it — and it cuts both ways, because a card market clears on interchangeable objects and known print runs, which a Soul is the opposite of on both counts. The scarcity that would let such a market clear is ours to design into the mint rules, and it is unbuilt. We put this here rather than in front of developers, because it is an argument about a market and they are buying a character layer.</li>
            </ul>
        `
    },
    {
        id: 6,
        title: 'Business model',
        content: `
            <p class="moat-intro">Every layer below is rent on one asset. The subscription is not for the SDK: the SDK is the door, the model is the room, and there is no second door into it. A studio can leave for a competitor. It cannot keep the integration and stop paying.</p>
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
                    <p>A platform fee on Soul trading, settled in $FAI. Template licensing, if it ever reaches a studio's invoice, is priced in ordinary money like everything in Layers 1 and 2 — a studio is never asked to hold a token to buy something from us. Scales as titles ship with the SDK rather than as a launch bet.</p>
                    <span class="revenue-type">Platform fee, per transaction</span>
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
                        <p>Docs and starter kits today, so a small team can get a character answering from the CLI before committing engine work. The account portal — keys, usage and billing in one place — is Q4; until it lands we cut keys by hand, same day.</p>
                    </div>
                </li>
                <li>
                    <div class="gtm-content">
                        <strong>Distribute through the engines</strong>
                        <p>Fab for Unreal first, where studios already look for middleware and already have a payment relationship. Unity is the bigger install base and it is the second thing this round pays for — not the thing we pretend is already done.</p>
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
            <p class="comp-note">The comparison set is Inworld, Convai, NPCx and Charisma.ai — real companies with real integrations, and on conversation quality we are not claiming to have beaten them. That is their axis and they are good at it; we treat it as a floor a release has to clear, not a scoreboard we are climbing. Ours is decision quality under constraint: whether what a character proposes is still legal, still in character and still recognisably hers forty turns later, with a player working on her the whole time. What we can say about ours is checkable end to end: we put a validation boundary between a character's intent and the game's state, we trained Servitor, we qualify it against our own bench, and we serve it. No third party sits in the path where a price change or a policy change can reach your players. Those are the facts that decide whether a studio can ship on it and whether the thing compounds. The fair question is why a company with integrations we do not have could not build the same bench faster. They could. A shipped integration is a relationship, canon is granted through relationships, and that is a head start we do not have and will not pretend away. What it does not buy them is durability. What makes a bench worth anything is a real studio's canon — the rules that world enforces and the places its writers know it strains — and that is granted, never commissioned. Where we differ is what a result binds: we train and serve the thing being measured, so a bar we clear is a floor we keep. Qualify a model you rent and the bar moves whenever somebody else's release notes say it does. Being second into a bench is survivable. Renting the thing the bench measures is not.</p>
        `
    },
    {
        id: 9,
        title: 'Team',
        content: `
            <div class="team-grid">
                <div class="team-member">
                    <h4>Sean Dinwiddie</h4>
                    <p><strong>President, lead developer</strong><br/>Today he builds the API, both SDKs and Servitor itself. That is one person holding the whole chain, and closing that gap is the first line item in this raise — which is also why every SDK is a thin client over an HTTP API you could drive with curl — small enough to be worth writing, small enough to repoint. What happens to that API if we are not here is a continuity commitment we cannot make credibly at three people, and we are not going to pretend otherwise. One person built the model, which is the fairest shot anyone can take at the slide before this one: if a gate takes one engineer a few months, it is not a gate. The answer is the qualification history — how many candidates never took the seat, and what each successor had to clear before it did. We will put that sequence in front of you on the first call and let you decide whether it is a gate or a sprint.</p>
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
                <li><strong>The API is live.</strong> Servitor is deployed and serving behaviour on our own infrastructure against a pinned, qualified release.</li>
                <li><strong>Persistent memory works.</strong> Semantic recall and time-aware memory are shipped, writing to a store the studio owns.</li>
                <li><strong>Sixteen profiles ship today.</strong> Four letters in a persona file select one, and the profile governs the action a character proposes rather than the accent she says it in. This is the asset slide 4 calls the compounding one, and it is deployed.</li>
                <li><strong>Two SDKs ship the full contract.</strong> TypeScript for Node and the browser, and a native Unreal Engine 5 plugin.</li>
                <li><strong>Playable demos.</strong> Three builds we own — an Unreal project, a browser title, and a text world — each running against the live API. No third-party title has shipped on it yet; the first pilots are what this round is for.</li>
                <li><strong>Docs are public</strong> at docs.forboc.ai, covering both SDKs.</li>
                <li><strong>$FAI is live.</strong> Its stated product uses are Soul minting, Soul upgrades and marketplace operations. It gets one line here on purpose: subscriptions and usage are the business today.</li>
                <li><strong>End-to-end verification.</strong> A micro-game harness drives the whole path — CLI to SDK to API to Servitor and back — so coverage and model quality are proved separately and neither borrows the other's green mark.</li>
            </ul>
            <h4>Next</h4>
            <ul class="milestone-list">
                <li>Q4 2026 — Ghost coverage reporting. It is the only thing we are dating.</li>
                <li>Queued behind it, in this order and deliberately undated — the account portal, Soul minting end to end, SDK 1.0, engine marketplace listings, then marketplace operations and further engine bindings</li>
                <li>Cross-title Soul portability — as fast as the rights conversation allows. The protocol is ours to date; somebody else's signature is not.</li>
            </ul>
        `
    },
    {
        id: 11,
        title: 'Roadmap',
        content: `
            <ol class="roadmap-steps">
                <li><strong>Shipped —</strong> hosted cognition, persistent memory, validated actions, sixteen personality profiles, TypeScript and Unreal SDKs, public docs, $FAI live</li>
                <li><strong>Q4 2026 —</strong> Ghost coverage reporting. The only date on this deck, and it stays the only one.</li>
                <li><strong>Then —</strong> the account portal, with billing and key management in one place</li>
                <li><strong>Then —</strong> Soul minting end to end: gather, encrypt, upload, verify, restore</li>
                <li><strong>Then —</strong> marketplace operations for Soul trading and NPC template licensing</li>
                <li><strong>When the rights conversation allows —</strong> cross-title Soul portability and wider studio rollout. We will not put a year on somebody else's signature.</li>
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
            <p class="ask-note">The amount and the terms are in the data room. So is the relationship between $FAI and the equity cap table, which we expect to be your first question and would sooner answer with the documents open in front of you than in one sentence on a public page — a live, trading token beside an equity raise is a structural question, and it deserves the structure rather than a reassurance. Ask, and you will have all of it the same day you would have an API key.</p>
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
