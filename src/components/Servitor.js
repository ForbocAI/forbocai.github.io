/**
 * Servitor Component
 *
 * Sales copy for the model itself. Everything here is drawn from
 * classified/docs/design/servitor/ — the sixteen type coordinates, the Empty
 * Vessel guarantees, the single cognitive motion behind every projection, and
 * the research discipline behind qualification.
 *
 * What deliberately does NOT appear, because it is ours and not the public's:
 * the base lineage, the training and preference-optimisation methods, the
 * source registry and its citations, the curriculum and dataset construction,
 * the equation grammar, and any of the forge vocabulary. The claims are the
 * outcomes; the recipe stays in classified.
 *
 * "MBTI" is a Myers-Briggs Company trademark and is not used here — the type
 * codes themselves are what a developer actually needs to read.
 */

// The conventional type table: four binary preferences composing 2^4 = 16.
// Laid out as the Cartesian grid it is, not as sixteen unrelated presets.
const TYPES = [
    'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
    'ISTP', 'ISFP', 'INFP', 'INTP',
    'ESTP', 'ESFP', 'ENFP', 'ENTP',
    'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ',
];

const DICHOTOMIES = [
    ['Energy', 'reaches outward, or turns inward'],
    ['Perception', 'trusts the concrete, or reads the pattern'],
    ['Judgment', 'decides on reasons, or on relationships'],
    ['Structure', 'wants it settled, or keeps it open'],
];

export const Servitor = () => {
    return `
    <section id="servitor" class="chapter chapter-day servitor">
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛗ</span>
                <div>
                    <h2>Servitor</h2>
                    <p class="chapter-lead">Players forgive rough edges in almost everything. They do not forgive a character who forgets them, argues with the world, or falls apart the moment someone pushes. Characters are the part of a game people carry home — and <strong>Servitor</strong> is ForbocAI's proprietary NPC model, built for that one job: to be someone else, inside someone else's world, and never forget whose world it is.</p>
                </div>
            </header>

            <div class="servitor-body">
                <div class="plate">
                    <p class="plate-label">One model, sixteen minds</p>
                    <ul class="plate-grid">
                        ${TYPES.map((t) => `<li${t === 'ISTJ' ? ' class="is-default"' : ''}>${t}</li>`).join('\n                        ')}
                    </ul>
                    <p class="plate-note">We needed a control surface small enough for a writer to hold in their head and orthogonal enough that the model could not quietly fold all of it back into one agreeable voice. Four axes, sixteen combinations, four letters in the persona file. <strong>ISTJ</strong> answers when you name none.</p>
                    <dl class="plate-legend">
                        ${DICHOTOMIES.map(([term, gloss]) => `<div><dt>${term}</dt><dd>${gloss}</dd></div>`).join('\n                        ')}
                    </dl>
                </div>

                <div class="servitor-prose">
                    <p>The letters are a dial, not a diagnosis. What matters is that an ESTJ and an INFP, handed the same scene, the same memory and the same world, <strong>propose different actions</strong> — not the same action in a different accent. The type governs how the character takes a situation in, what she weighs, and how settled or open she wants the outcome.</p>
                    <p>Two innkeepers of the same type are still two people, because the name, the memory and the relationships come from your game. The type shapes the thinking, not the person.</p>
                    <p>And because a character's type is written into the memory your studio keeps, a soul summoned once is the same soul when you call her back.</p>
                </div>
            </div>

            <div class="servitor-pair">
                <section class="servitor-does">
                    <h3>Decisions it can actually make</h3>
                    <ul>
                        <li><strong>Reads consequence.</strong> What follows from what, before anything is committed.</li>
                        <li><strong>Weighs your values, not its own.</strong> It reasons from the moral frame your world supplies — a paladin's code, a guild's rules, a corrupt institution, or no explicit frame at all.</li>
                        <li><strong>Notices when duties conflict</strong> and chooses between them for a reason you can read back.</li>
                        <li><strong>Holds a commitment</strong> across turns instead of re-deciding from nothing every time the character is spoken to.</li>
                        <li><strong>Changes its mind on evidence</strong> — and only on evidence, not on whoever pushed hardest.</li>
                        <li><strong>Explains the choice.</strong> The line the character says and the action it proposes come out of the same thought, so the two cannot contradict each other.</li>
                    </ul>
                </section>

                <section class="servitor-wont">
                    <h3>Things it will never do</h3>
                    <ul>
                        <li><strong>Speak a self.</strong> No name, backstory or opinion of its own, because it holds none to leak.</li>
                        <li><strong>Overwrite your canon.</strong> Your world is the only world it knows; it cannot correct you with facts it prefers.</li>
                        <li><strong>Invent to fill a silence.</strong> What you did not supply comes back as an honest unknown, not a plausible detail.</li>
                        <li><strong>Be talked into someone else.</strong> A player cannot rewrite who the character is, because the character is only ever what you supplied.</li>
                        <li><strong>Drift to a house style.</strong> No default morality, no favourite personality, no quiet pull toward the same disposition across all sixteen types.</li>
                    </ul>
                </section>
            </div>

            <section class="servitor-proof">
                <h3>Trained, proved, and grown</h3>
                <p>Servitor is scored claim by claim, not answer by answer: every sentence it produces is checked against what the supplied persona and world actually support, so one fluent paragraph cannot carry three invented facts. Three properties decide whether a release ships — how much of a persona survives a long exchange, how often a gap in context comes back as an honest unknown instead of an invention, and how far apart the sixteen types stay when handed the same scene.</p>
                <p>Promotion requires disjoint, game-agnostic interactions across all sixteen coordinates, including the cases that break most character models: a fact nobody supplied, and evidence that contradicts what the character already believed. A candidate that cannot clear its trials does not take the seat — the qualified release keeps answering until a successor earns it.</p>
                <p class="servitor-caveat">We publish numeric results only from a deployed release's passing, artifact-bound comparison. We do not have one to show you yet, so we are not going to print a number and call it a floor. When the comparison exists, the numbers go here.</p>
            </section>

            <p class="servitor-moat">We hold no player data and no world state, so nothing compounds for us in a database — that is deliberate, and it is why a studio's legal review passes. What compounds is the bench: every world a release is qualified against stays in it, and the bar it cleared becomes the floor for the next one. A competitor starts that at zero no matter whose API they rent.</p>

            <p class="servitor-moat">Every other layer of an NPC stack is a quarter's work for a competent team. A model that can be sixteen different minds, hold a world it was never trained on, and refuse to invent its way out of a gap is not — it is curriculum, qualification and measured growth, accumulated. That is the part of ForbocAI that compounds, and it is the part a competitor cannot reach by wiring up somebody else's API.</p>
        </div>
    </section>
    `;
};
