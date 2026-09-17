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

// The four parameters. Named as axes rather than traits: each is a binary
// choice the API composes into the prompt, not a claim about human psychology.
const AXES = [
    ['Attention', 'reaches outward, or turns inward'],
    ['Evidence', 'trusts the concrete, or reads the pattern'],
    ['Judgment', 'decides on reasons, or on relationships'],
    ['Closure', 'wants it settled, or keeps it open'],
];

export const Servitor = () => {
    return `
    <section id="servitor" class="chapter chapter-day servitor">
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛗ</span>
                <div>
                    <h2>Servitor</h2>
                    <p class="chapter-lead">Players forgive rough edges in almost everything. What they notice, every time, is a character who forgets them, argues with the world, or falls apart the moment someone pushes. Characters are the part of a game people carry home — and <strong>Servitor</strong> is ForbocAI's proprietary NPC model, built for that one job: to be someone else, inside someone else's world, and never forget whose world it is.</p>
                </div>
            </header>

            <div class="servitor-body">
                <div class="plate">
                    <p class="plate-label">A type system for minds</p>
                    <ul class="plate-grid">
                        ${TYPES.map((t) => `<li${t === 'ISTJ' ? ' class="is-default"' : ''}>${t}</li>`).join('\n                        ')}
                    </ul>
                    <p class="plate-note">Personality here is <strong>configuration, not content</strong>. Four independent dials compose sixteen profiles of one vessel — modular, swappable, and small enough for a writer to hold in their head. Four letters in a persona file select one. Name none and you get <strong>ISTJ</strong> — a stated default, not a resting state the other fifteen drift toward. We borrowed a vocabulary your writers already speak; we are not claiming the types are real. The claim is that setting them differently produces different actions from the same scene, which is measurable whether or not the instrument behind the letters ever was.</p>
                    <dl class="plate-legend">
                        ${AXES.map(([term, gloss]) => `<div><dt>${term}</dt><dd>${gloss}</dd></div>`).join('\n                        ')}
                    </dl>
                </div>

                <div class="servitor-prose">
                    <p>Four dials, not a diagnosis. What matters is that an ESTJ and an INFP, handed the same scene, the same memory and the same world, <strong>propose different actions</strong> — not the same action in a different accent. The type governs how the character takes a situation in, what she weighs, and how settled or open she wants the outcome.</p>
                    <figure class="divergence">
                        <figcaption>Same innkeeper, same memory, same world. A stranger asks her to hold a sealed letter overnight.</figcaption>
                        <dl>
                            <div><dt>ESTJ</dt><dd>Takes it, enters it in the ledger, names a price — and mentions that the constable reads the ledger.</dd></div>
                            <div><dt>INFP</dt><dd>Takes it for nothing, tells no one, and moves it behind the barrel when the room fills up.</dd></div>
                        </dl>
                        <p class="divergence-note">Two different actions from one scene. A prompt can do that once. Run the same two characters forty turns deep with a player leaning on them the whole way, and a prompted persona drifts — toward agreeableness, toward the house voice underneath it. Every candidate we have run does. What a release is measured on is how far apart the profiles still are at the end of that. So do not take it on our word, and do not take the easy half of it either: the scene above is three minutes from the CLI, and it is turn one, which a prompt can also pass. The run that settles anything is the long one — forty turns, two profiles, a world you supply, both transcripts side by side for your writers to read rather than for us to score. That is the run our own qualification does. Ask for it on the first call.</p>
                    </figure>
                    <p>Two innkeepers of the same type are still two people, because the name, the memory and the relationships come from your game. The type shapes how she thinks. Your game supplies who she is.</p>
                    <p>And because a character's profile is written into the memory your studio keeps, the character you summoned once is the same one when you call her back.</p>
                </div>
            </div>

            <div class="servitor-pair">
                <section class="servitor-does">
                    <h3>Decisions it can actually make</h3>
                    <ul>
                        <li><strong>Reads consequence.</strong> What follows from what, before anything is committed.</li>
                        <li><strong>Weighs your values, not its own.</strong> It reasons from the moral frame your world supplies — a paladin's code, a guild's rules, a corrupt institution. Supply none and she reasons only from the goals your scene handed her and what she has seen — which reads thinner, because the frame is the part worth writing. There is no appetite underneath it supplying one for you.</li>
                        <li><strong>Notices when duties conflict</strong> and chooses between them for a reason you can read back.</li>
                        <li><strong>Holds a commitment</strong> across turns instead of re-deciding from nothing every time the character is spoken to.</li>
                        <li><strong>Changes its mind on evidence</strong> — and only on evidence, not on whoever pushed hardest.</li>
                        <li><strong>Explains the choice.</strong> The line the character says and the action it proposes come out of the same thought, so the two cannot contradict each other.</li>
                    </ul>
                </section>

                <section class="servitor-wont">
                    <h3>Things a release is not allowed to do</h3>
                    <ul>
                        <li><strong>Speak a self.</strong> No name, backstory or opinion of its own, because it holds none to leak.</li>
                        <li><strong>Overwrite your canon.</strong> Your world is the only world it knows; it cannot correct you with facts it prefers.</li>
                        <li><strong>Invent to fill a silence.</strong> What you did not supply comes back as an honest unknown, not a plausible detail.</li>
                        <li><strong>Be talked into someone else.</strong> A player cannot rewrite who the character is, because the character is only ever what you supplied.</li>
                        <li><strong>Collapse to a house voice.</strong> No default morality, no preferred profile, no quiet pull that folds all sixteen configurations back toward the same disposition.</li>
                    </ul>
                    <p class="servitor-gate-note">Each of those is a property a candidate is measured against before it takes the seat — not a promise about what a model is incapable of. When one fails in qualification the release does not ship, which is the only version of "never" anyone should accept about a model.</p>
                </section>
            </div>

            <section class="servitor-proof">
                <h3>Trained, proved, and grown</h3>
                <p>In qualification, Servitor is scored claim by claim rather than answer by answer: every sentence a candidate produces is checked against what the supplied persona and world actually support, so one fluent paragraph cannot carry three invented facts. Three properties decide whether a release ships — how much of a persona survives a long exchange, how often a gap in context comes back as an honest unknown instead of an invention, and how far apart the profiles stay when handed the same scene.</p>
                <p>Promotion requires disjoint, game-agnostic interactions across every one of the sixteen profiles, including the cases that break most character models: a fact nobody supplied, and evidence that contradicts what the character already believed. A candidate that cannot clear its trials does not take the seat — the qualified release keeps answering until a successor earns it.</p>
                <p class="servitor-caveat">We publish numeric results only from a deployed release's comparison that passed, and only when we can hand you the evidence behind it. We do not have one to show you yet, so we are not going to print a number and call it a floor. When the comparison exists, the numbers go here. What Servitor is built from, and how, is the one thing that never goes on this page — it is the asset. It opens under NDA on the first call, with the qualification harness beside it, so you run the comparison rather than read ours.</p>
            </section>

            <div class="servitor-moat">
                <p>We hold no player data and no world state, so nothing compounds for us in a database — that is deliberate, and it means the first question your legal team asks has a one-line answer.</p>

                <p>What compounds is the bench: every world a release is qualified against stays in it, and the bar it cleared becomes the floor for the next one. Today that bench is entirely ours — three playable builds and the worlds behind the harness that qualifies each release. That is small, and it is exactly what this round buys.</p>

                <p>A pilot leaves behind a qualification world — scenarios, rules and edge cases agreed in writing — never its runtime data and never its players'. That is not a test suite we could have written for ourselves. It is a real studio's canon, with the rules that world actually enforces and the places its writers know it strains. You cannot commission it. You can only be let in. It is the hardest thing we ask a pilot for, and we have not closed one yet. What the first studio gets for it is the one thing no later studio can buy: a release qualified against its own canon before anybody else's, with the commercial terms that go with being early. We will put those in writing on the first call — it is the only currency we have this round, and we would sooner spend it than describe it. We are asking for the rules of a world, in writing. Never the people in it.</p>

                <p>Every other layer of an NPC stack is a quarter's work for a competent team. A model that composes into sixteen minds, holds a world it was never trained on, and refuses to invent its way out of a gap is not — and headcount buys less of it than you would expect, because the work is sequential: each release is qualified against the bar the last one cleared, and the bar is built from worlds a studio had to agree to let us inside. A larger team reaches the first gate sooner. It does not get to skip the gate. A competitor starts the bench at zero no matter whose API they rent, and the first thing they have to do is persuade a studio to let them inside its canon.</p>
            </div>
        </div>
    </section>
    `;
};
