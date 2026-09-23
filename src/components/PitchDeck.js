/**
 * Vision deck.
 *
 * Character Intelligence is the category; the living cast is the vision;
 * Servitor is the named intelligence; the Protocol is its law; SDKs distribute
 * it into engines; the game remains truth.
 */
import { selectPitchSlide } from '../domains/navigationSlice.js';

const slides = [
    {
        id: 1,
        title: 'The next great language model is the characters in your game.',
        content: `
            <div class="title-slide">
                <p class="subtitle">The ForbocAI NPC LM Servitor™ — the intelligence behind the living cast.</p>
                <p>Built for the moment a character must remember the evidence, reason through motive, decide as herself and propose what happens next.</p>
                <p class="impact-statement"><strong>One character who decides. That is where a living cast starts.</strong></p>
                <p class="deck-meta">The category window — September 2026</p>
            </div>
            <img src="living-cast-scene.webp" class="title-slide-art title-slide-world" alt="Maeve and the living cast of Lanternbough after the storm." width="1672" height="941">
        `
    },
    {
        id: 2,
        title: 'Players have already crossed the edge of the script.',
        content: `
            <div class="problem-grid">
                <div class="problem-column">
                    <p class="proof-label">Where the script ends</p>
                    <h3>The branch stops. The player does not.</h3>
                    <p>Players ask what no writer anticipated, arrive in the wrong order and care about the character the script treated as scenery.</p>
                </div>
                <div class="problem-column">
                    <p class="proof-label">Where she begins</p>
                    <h3>The character meets them there.</h3>
                    <p>Identity survives the unscripted moment. Memory supplies evidence. Motive gives it weight. Judgment creates the next possibility.</p>
                </div>
            </div>
            <p class="impact-statement">The worlds that define this decade are the ones whose people judge, and <a href="https://www.prnewswire.com/news-releases/inworld-ai-99-of-gamers-are-excited-by-the-potential-of-smart-npcs-powered-by-advanced-artificial-intelligence-301747635.html" target="_blank" rel="noopener noreferrer">81 in 100</a> players would pay more to play them.</p>
        `
    },
    {
        id: 3,
        title: 'A chatbot can answer. A character must choose.',
        content: `
            <div class="problem-grid category-crossing">
                <article class="problem-column">
                    <p class="proof-label">Conversation</p>
                    <h3>What words come next?</h3>
                    <p>Generation continues the exchange. Memory only widens what the system can mention.</p>
                </article>
                <article class="problem-column is-character-intelligence">
                    <p class="proof-label">Character Intelligence</p>
                    <h3>What does this person choose?</h3>
                    <p>A general model reads a persona as instructions to perform, and performs itself through them. Servitor™ has no self to perform. Your writer's document is the character; we cannot write it and we do not want to.</p>
                </article>
            </div>
            <p class="impact-statement"><strong>General conversation ends with words.</strong> Character Intelligence begins where identity, consequence and action meet.</p>
        `
    },
    {
        id: 4,
        title: 'The ForbocAI NPC LM Servitor<span class="tm">™</span>.',
        content: `
            <div class="paired-proof model-reveal">
                <p class="proof-label">The choice nobody wrote</p>
                <p>A player asks a question no writer anticipated. Servitor™ gathers who she is, what this player made matter and what her world permits — then returns one judgment: the line, the reasoning behind it, and a structured action the game is free to refuse. One call. Not a branch lying in wait.</p>
                <div class="decision-pair">
                    <article>
                        <span>The safe answer</span>
                        <strong>The storm. Familiar, harmless and already said to everyone else tonight.</strong>
                    </article>
                    <article>
                        <span>The character judgment</span>
                        <strong>Her brother's confidence. Kept, against a player who has earned almost enough.</strong>
                    </article>
                </div>
                <figure class="maeve-scene maeve-choice-scene">
                    <img src="maeve-letter-scene.webp" alt="Maeve offers her brother's sealed letter across the Lanternbough counter during a storm." width="1672" height="941">
                    <figcaption>Servitor™ weighs who she is, what this player made matter and what the moment now demands.</figcaption>
                </figure>
            </div>
        `
    },
    {
        id: 5,
        title: 'Memory is the evidence. Judgment is the intelligence.',
        content: `
            <ol class="cognition-chain cognition-chain-six" aria-label="Character Intelligence">
                <li><p>Identity</p><strong>Who am I?</strong></li>
                <li><p>Memory</p><strong>What happened?</strong></li>
                <li><p>Motive</p><strong>What matters?</strong></li>
                <li><p>Reasoning</p><strong>What follows?</strong></li>
                <li><p>Judgment</p><strong>Where do I stand?</strong></li>
                <li><p>Action</p><strong>What may I propose?</strong></li>
            </ol>
            <div class="cognition-reveal">
                <p><strong>Dialogue is what the player hears.</strong></p>
                <p>Judgment is what makes the character alive.</p>
            </div>
        `
    },
    {
        id: 6,
        title: 'One model. A cast of distinct minds.',
        content: `
            <div class="creative-value-grid cast-minds">
                <article><span>Identity</span><h3>Someone — not anyone</h3><p>Name, history, values and commitments establish who is choosing.</p></article>
                <article><span>Relationship</span><h3>This player matters differently</h3><p>Shared history changes the weight of the same world evidence.</p></article>
                <article><span>Motive</span><h3>Conflict takes sides</h3><p>Loyalties and duties remain active when there is no clean answer.</p></article>
                <article><span>Decision</span><h3>Authorship stays alive</h3><p>Servitor™ carries the person into the unforeseen instead of replacing her.</p></article>
            </div>
            <p class="impact-statement">The model does not add one house personality to every world. It gives each authored person room to remain herself.</p>
        `
    },
    {
        id: 7,
        title: 'Intelligence enters the world through the ForbocAI NPC Protocol.',
        content: `
            <ol class="command-boundary" aria-label="Authority boundary">
                <li class="boundary-stage is-studio">
                    <span>Studio owned</span>
                    <h2>Your world supplies</h2>
                    <p>Identity, world state, local memory and the actions this scene permits.</p>
                </li>
                <li class="boundary-stage is-model">
                    <span>Character Intelligence</span>
                    <h2>Servitor<span class="tm">™</span> judges</h2>
                    <p>Dialogue, rationale and structured intent arrive from one character decision.</p>
                </li>
                <li class="boundary-stage is-contract">
                    <span>Protocol law</span>
                    <h2>Separate rules hold</h2>
                    <p>The reply meets its contract and the action meets studio-authored policy. Both checks are mechanical; neither is a lore check.</p>
                </li>
                <li class="boundary-stage is-studio">
                    <span>Game truth</span>
                    <h2>Your world decides</h2>
                    <p>Accept or reject. Only game code can change state or write local memory.</p>
                </li>
            </ol>
            <p class="boundary-mantra">The model proposes. The game disposes.</p>
        `
    },
    {
        id: 8,
        title: 'The character chooses. The game remains sovereign.',
        content: `
            <ol class="arrival-contract" aria-label="Maeve's choice enters canon">
                <li><span>Judgment</span><strong>Maeve keeps the confidence.</strong><p>Identity, memory and motive weigh a promise to her brother against a debt to a stranger.</p></li>
                <li><span>Proposal</span><strong>Servitor™ returns the refusal.</strong><p>Dialogue, the reasoning behind it and the <code>refuse</code> action arrive together, for the game to inspect.</p></li>
                <li><span>Canon</span><strong>Your game accepts — or overrides.</strong><p>The letter stays sealed, and that consequence can become evidence next time.</p></li>
            </ol>
            <p class="arrival-answer"><strong>She can choose her next move.</strong> Only the game can make it history.</p>
        `
    },
    {
        id: 9,
        title: 'The living cast is the new creative medium.',
        content: `
            <div class="world-expansion" aria-label="Expansion through a game world">
                <article><span>01</span><strong>One character</strong><p>An innkeeper decides what a latecomer is owed.</p></article>
                <article><span>02</span><strong>A living cast</strong><p>Her brother, the miner the player covered for, the neighbor who wants the room she just gave away.</p></article>
                <article><span>03</span><strong>Systems answer back</strong><p>A refusal reaches your faction system as a decision, not a flag.</p></article>
                <article><span>04</span><strong>An inhabited world</strong><p>The player goes somewhere you never wrote. The cast is already there.</p></article>
            </div>
            <figure class="maeve-scene living-world-scene">
                <img src="living-cast-portraits.webp" alt="Five people of the Lanternbough market, each with a face of their own." width="1672" height="941">
                <figcaption>One unforgettable character opens a world that answers back.</figcaption>
            </figure>
        `
    },
    {
        id: 10,
        title: 'Characters are compounding creative assets.',
        content: `
            <div class="creative-value-grid">
                <article><span>Attachment</span><h3>History earns meaning</h3><p>The character remembers what the player made matter.</p></article>
                <article><span>Strategy</span><h3>Identity changes decisions</h3><p>Who the character is becomes part of how the world plays.</p></article>
                <article><span>Collection</span><h3>Every person can be singular</h3><p>A cast becomes a portfolio of identities, not interchangeable content.</p></article>
                <article><span>Return</span><h3>Continuity deepens belonging</h3><p>A player comes back for the person who remembers what they did last season.</p></article>
            </div>
            <p class="moat-intro"><strong>Dev born. Player grown. Yours to carry.</strong> Cards prove people return to identities they care about, and a card never remembers them back. She is authored by a studio, made specific by a player, and carried into a second world that reads her record and admits what its canon holds. That is the third pillar, and no company can hand you it without the first two.</p>
        `
    },
    {
        id: 11,
        title: 'One character is the wedge. The living cast is the economy.',
        content: `
            <div class="business-grid model-economy">
                <div class="business-item"><span class="business-phase">Enter</span><h4>One impossible choice</h4><p>A single scene reveals the new unit: a judgment no branch contained.</p></div>
                <div class="business-item"><span class="business-phase">Expand</span><h4>Every living cast</h4><p>Each character who meets the unforeseen creates recurring demand for Character Intelligence.</p></div>
                <div class="business-item"><span class="business-phase">Compound</span><h4>A portfolio of worlds</h4><p>One model, every cast in a catalogue. An innkeeper, a fleet commander, a child in a besieged city. No two of them sounding like the same mind.</p></div>
                <div class="business-item"><span class="business-phase">Carry</span><h4>Characters that change hands</h4><p>A character a player carries is a Soul, minted, grown and traded in $FAI.</p></div>
            </div>
            <p class="impact-statement">Character technology already commands billions: one company’s was licensed for <a href="https://www.cnbc.com/2024/08/02/ex-google-engineers-from-characterai-re-join-company-with-new-ai-partnership-.html" target="_blank" rel="noopener noreferrer">$2.7&nbsp;billion</a>. The living cast is the layer above it, and the first worlds through set its range.</p>
        `
    },
    {
        id: 12,
        title: 'Who is building this.',
        content: `
            <div class="team-grid">
                <div class="team-member">
                    <h4><a href="https://www.linkedin.com/in/tiernan-o-malley-219591170/" target="_blank" rel="noopener noreferrer">Tiernan O’Malley</a></h4>
                    <p><strong>Co-founder · Corporate partnerships &amp; investor relations</strong><br/>Opens markets for a living — cybersecurity and technology at Framework Security, Hays and IDMWORKS — with an MBA underway at Rice Business.</p>
                </div>
                <div class="team-member">
                    <h4><a href="https://www.linkedin.com/in/seandinwiddie/" target="_blank" rel="noopener noreferrer">Sean Dinwiddie</a></h4>
                    <p><strong>Founder, president and chair</strong><br/>Architect of the ForbocAI NPC Protocol. Builds the API it runs through, Servitor™ from dataset to release, and the TypeScript and Unreal Engine 5 SDKs. Three decades of engineering; games shipped include <em>Call of Duty: Modern Warfare: Mobilized</em>, <em>Spider-Man</em> and <em>X-Men</em>.</p>
                </div>
                <div class="team-member">
                    <h4><a href="https://www.linkedin.com/in/antara-bhavsar-74b7a4187/" target="_blank" rel="noopener noreferrer">Antara Bhavsar</a></h4>
                    <p><strong>Co-founder &amp; Founding Engineer</strong><br/>Engineers the NPC runtime at the heart of the API, the personas that run through it from API to SDK, the model’s training and the Soul’s encrypted transport. Production AI and distributed systems from Amazon, Motorola and Indiana University; MS in computer science.</p>
                </div>
            </div>
            <p class="team-note">Three people hold the model, the law it enters through, and the instrument this category is bought on.</p>
            <p class="team-note">ForbocAI, Inc. — Delaware C corporation, incorporated 13 February 2026. Founders on standard four-year vesting with a twelve-month cliff, and 20% of the cap table reserved for the option pool.</p>
        `
    },
    {
        id: 13,
        title: 'The first three worlds are the whole thesis.',
        content: `
            <div class="threshold-spread">
            <div class="threshold-call">
                <p class="proof-label">The window</p>
                <p class="threshold-lead">Character Intelligence has its model and its law. What it does not have yet is a cast a player has argued with in public — and the studio that ships first decides what this category means for everyone who follows it.</p>
                <p class="threshold-line"><strong>From the other side of the table, the shape is this.</strong> The companies that own a layer of language intelligence are valued <a href="https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/" target="_blank" rel="noopener noreferrer">near a trillion dollars</a>. Character Intelligence is the next layer, and whoever authors its measure authors what it is worth. That measure is being written in this room.</p>
            </div>
            <p class="ask-note">Send us one character. We take her to the moment your tree ends. Eighteen months on, a player forgets the scene and still remembers her.</p>
            <div class="contact-box">
                <a href="mailto:hello@forboc.ai?subject=Bring%20one%20character%20to%20life" class="btn btn-primary">Bring one character to life</a>
                <a href="mailto:hello@forboc.ai?subject=Investor%20introduction" class="text-link">Investors, come inside</a>
            </div>
            </div>
        `
    }
];

export const PitchDeck = (state) => {
    const currentSlide = selectPitchSlide(state);
    const totalSlides = slides.length;

    const safeSlideIndex = Math.max(1, Math.min(currentSlide, totalSlides));
    const slide = slides.find((candidate) => candidate.id === safeSlideIndex);

    const prevLink = safeSlideIndex > 1 ? `#pitch/${safeSlideIndex - 1}` : '#';
    const nextLink = safeSlideIndex < totalSlides ? `#pitch/${safeSlideIndex + 1}` : '#';

    return `
    <section class="deck">
        <div class="container">
            <div class="deck-frame deck-frame-${safeSlideIndex}">
                <div class="deck-header">
                    <span class="deck-brand">ForbocAI — Character Intelligence</span>
                    <span class="deck-count">
                        <span class="indicator-current">${safeSlideIndex}</span>
                        <span class="indicator-separator">/</span>
                        <span class="indicator-total">${totalSlides}</span>
                    </span>
                </div>

                <div class="slide slide-${safeSlideIndex}">
                    <h1 class="slide-title">${slide?.title || 'Slide not found'}</h1>
                    <div class="slide-body">
                        ${slide?.content || '<p>This slide could not be loaded.</p>'}
                    </div>
                </div>

                <div class="deck-controls" data-count="${safeSlideIndex} / ${totalSlides}">
                    <a href="${prevLink}" class="btn-control ${safeSlideIndex <= 1 ? 'disabled' : ''}" ${safeSlideIndex <= 1 ? 'aria-disabled="true" tabindex="-1"' : ''}>Back</a>
                    <div class="slide-dots">
                        ${slides.map((candidate) => `
                            <a
                                href="#pitch/${candidate.id}"
                                class="slide-dot ${candidate.id === safeSlideIndex ? 'active' : ''}"
                                aria-label="Go to slide ${candidate.id} of ${totalSlides}"
                                ${candidate.id === safeSlideIndex ? 'aria-current="true"' : ''}
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
