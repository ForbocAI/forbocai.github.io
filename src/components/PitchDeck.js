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
        title: 'The next great language model is a person in your game.',
        content: `
            <div class="title-slide">
                <p class="proof-label">The ForbocAI NPC LM Servitor™</p>
                <p class="subtitle">The intelligence behind the living cast.</p>
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
                    <p class="proof-label">The authored edge</p>
                    <h3>The branch stops. The player does not.</h3>
                    <p>Players ask what no writer anticipated, arrive in the wrong order and care about the character the script treated as scenery.</p>
                </div>
                <div class="problem-column">
                    <p class="proof-label">The living edge</p>
                    <h3>The character meets them there.</h3>
                    <p>Identity survives the unscripted moment. Memory supplies evidence. Motive gives it weight. Judgment creates the next possibility.</p>
                </div>
            </div>
            <p class="impact-statement">The defining game worlds contain casts capable of judgment—not merely more lines.</p>
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
                    <p>Generation extends the exchange. Memory can extend what the system mentions.</p>
                </article>
                <article class="problem-column is-character-intelligence">
                    <p class="proof-label">Character Intelligence</p>
                    <h3>What would this person choose?</h3>
                    <p>Servitor™ is trained around the unit games actually need: one judgment carrying identity, evidence, motive, reasoning, dialogue and structured intent through the same decision.</p>
                </article>
            </div>
            <p class="impact-statement"><strong>General conversation ends with words.</strong> Character Intelligence begins where identity, consequence and action meet.</p>
            <p class="ask-note">Gates thirteen through fifteen carry the numbers for this slide.</p>
        `
    },
    {
        id: 4,
        title: 'Meet The ForbocAI NPC LM Servitor™.',
        content: `
            <div class="paired-proof model-reveal">
                <p class="proof-label">Maeve faces the choice nobody wrote</p>
                <p>A player asks a question no writer anticipated. Servitor™ gathers who she is, what this player made matter and what her world permits — then returns one judgment: the line, the reasoning behind it, and a structured action the game is free to refuse. One call. Not a branch that was waiting.</p>
                <div class="decision-pair">
                    <article>
                        <span>The safe answer</span>
                        <strong>The storm. Familiar, harmless and already said to everyone else tonight.</strong>
                    </article>
                    <article>
                        <span>The character judgment</span>
                        <strong>Her brother's confidence. Kept, against a player who had earned almost enough.</strong>
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
        title: 'Memory is evidence. Judgment is intelligence.',
        content: `
            <ol class="cognition-chain cognition-chain-six" aria-label="Character Intelligence">
                <li><strong>Identity</strong><p>Who am I?</p></li>
                <li><strong>Memory</strong><p>What happened?</p></li>
                <li><strong>Motive</strong><p>What matters?</p></li>
                <li><strong>Reasoning</strong><p>What follows?</p></li>
                <li><strong>Judgment</strong><p>Where do I stand?</p></li>
                <li><strong>Action</strong><p>What may I propose?</p></li>
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
                <article><span>Identity</span><h3>Someone—not anyone</h3><p>Name, history, values and commitments establish who is choosing.</p></article>
                <article><span>Relationship</span><h3>This player matters differently</h3><p>Shared history changes the weight of the same world evidence.</p></article>
                <article><span>Motive</span><h3>Conflict takes sides</h3><p>Loyalties and duties remain active when there is no clean answer.</p></article>
                <article><span>Decision</span><h3>Authorship stays alive</h3><p>Servitor™ carries the person into the unforeseen instead of replacing her.</p></article>
            </div>
            <p class="impact-statement">The model does not add one house personality to every world. It gives each authored person room to remain herself.</p>
            <p class="ask-note">Gates thirteen and fourteen: persona hold, cast separation.</p>
        `
    },
    {
        id: 7,
        title: 'Intelligence enters the world through The ForbocAI NPC Protocol.',
        content: `
            <ol class="command-boundary" aria-label="Authority boundary">
                <li class="boundary-stage is-studio">
                    <span>Studio owned</span>
                    <h2>Your world supplies</h2>
                    <p>Identity, world state, local memory and the actions this scene permits.</p>
                </li>
                <li class="boundary-stage is-model">
                    <span>Character Intelligence</span>
                    <h2>Servitor™ judges</h2>
                    <p>Dialogue, rationale and structured intent arrive from one character decision.</p>
                </li>
                <li class="boundary-stage is-contract">
                    <span>Protocol law</span>
                    <h2>Separate rules hold</h2>
                    <p>The reply meets its contract. The action meets studio-authored policy.</p>
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
                <li><span>Proposal</span><strong>Servitor™ returns the refusal.</strong><p>Dialogue, rationale and <code>refuse</code> arrive together for inspection.</p></li>
                <li><span>Canon</span><strong>Your game accepts—or overrides.</strong><p>The letter stays sealed, and that consequence can become evidence next time.</p></li>
            </ol>
            <p class="arrival-answer"><strong>She can choose her next move.</strong> Only the game can make it history.</p>
        `
    },
    {
        id: 9,
        title: 'The living cast is the new creative medium.',
        content: `
            <div class="world-expansion" aria-label="Expansion through a game world">
                <article><span>01</span><strong>One character</strong><p>Enter through one impossible scene.</p></article>
                <article><span>02</span><strong>A living cast</strong><p>Distinct motives meet the unforeseen.</p></article>
                <article><span>03</span><strong>Systems answer back</strong><p>Factions and quests react through judgment.</p></article>
                <article><span>04</span><strong>An inhabited world</strong><p>The player goes somewhere you never wrote. The cast is already there.</p></article>
            </div>
            <figure class="maeve-scene living-world-scene">
                <img src="living-cast-scene.webp" alt="Maeve and a distinct living cast move through Lanternbough after the storm." width="1672" height="941">
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
            <p class="moat-intro">Cards proved that people return to identities they care about. The deeper prize is not only who a character is, but who she becomes with you. Carrying that between two titles is gate eleven.</p>
        `
    },
    {
        id: 11,
        title: 'One character is the wedge. The living cast is the economy.',
        content: `
            <div class="business-grid model-economy">
                <div class="business-item"><span class="business-phase">Enter</span><h4>One impossible choice</h4><p>A single scene reveals the new unit: a judgment no branch contained.</p></div>
                <div class="business-item"><span class="business-phase">Expand</span><h4>Every living cast</h4><p>Each character who meets the unforeseen creates recurring demand for Character Intelligence.</p></div>
                <div class="business-item"><span class="business-phase">Compound</span><h4>A portfolio of worlds</h4><p>Servitor™ becomes the shared model layer beneath distinct authored casts.</p></div>
            </div>
            <p class="impact-statement">Your world state and your memory store stay yours, and neither becomes ForbocAI training data. The part that moves is the turn — a memory excerpt, the persona, the world context — and excluding it from training is gate four. Until that contract is signed you have our word and not an instrument, and we would rather you had the instrument. So nothing here compounds on your data. What compounds is the range of worlds one decision contract holds in — and the instrument that measures whether any character model holds at all, because whoever writes a category's measurement writes its purchasing criteria. Today our range stands at our own evaluation worlds and no external studio: gate one, listed and unclaimed, which is exactly why the first three integrations are the whole thesis.</p>
        `
    },
    {
        id: 12,
        title: 'Who is building this.',
        content: `
            <div class="team-grid">
                <div class="team-member">
                    <h4>Sean Dinwiddie</h4>
                    <p><strong>President, board, lead developer</strong><br/>Builds the API, the ForbocAI NPC Protocol, Servitor™ itself and the TypeScript SDK.</p>
                </div>
                <div class="team-member">
                    <h4>Tiernan Omalley</h4>
                    <p><strong>Business development</strong><br/>Studio partnerships, publisher conversations and the developer community.</p>
                </div>
                <div class="team-member">
                    <h4>Antara Bhavsar</h4>
                    <p><strong>Software developer</strong><br/>Engine integration, focused on the Unreal Engine 5 plugin and SDK parity across bindings.</p>
                </div>
            </div>
            <p class="team-note">Four proofs carry this company, and each belongs to someone here: a character who stays herself under held-out evaluation and live play; a protocol that fails closed from the CLI through to the model; the same contract in TypeScript and in Unreal; and a harness that explores a level and returns findings a team can act on.</p>
            <p class="team-note">ForbocAI, Inc. — Delaware C corporation, incorporated 13 February 2026. Founders on standard four-year vesting with a twelve-month cliff, and 20% of the cap table reserved for the option pool.</p>
        `
    },
    {
        id: 13,
        title: 'The first three worlds are the whole thesis.',
        content: `
            <div class="threshold-call">
                <p class="proof-label">The category window is open</p>
                <p class="threshold-lead">Character Intelligence has its model and its law. What it does not yet have is a cast a player has argued with in a shipped title — and the studio that ships the first one decides what this category means.</p>
                <p class="threshold-line">Those three settle it — and to be plain about what that means, they are not shipped titles. The ledger says nobody signs a shipped integration before five, six and nine clear. The first three are the worlds we clear them against. That is the conversation, and it starts now.</p>
            </div>
            <p class="ask-note">Twenty-three gates are listed, and thirteen through fifteen measure the claims we are proudest of. None is claimed until it clears. That list is the fastest way to find out what this is.</p>
            <div class="contact-box">
                <a href="mailto:hello@forboc.ai?subject=One%20of%20the%20first%20three%20integrations" class="btn btn-primary">Be one of the first three integrations</a>
                <a href="mailto:hello@forboc.ai?subject=Investor%20introduction" class="btn btn-ghost">Investors: come inside</a>
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

                <div class="deck-controls">
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
