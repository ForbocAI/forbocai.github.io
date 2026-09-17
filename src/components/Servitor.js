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
                    <p class="plate-note">Four preferences compose sixteen minds. Name the four letters and the whole mind arrives — <strong>ISTJ</strong> answers when you name none.</p>
                    <dl class="plate-legend">
                        ${DICHOTOMIES.map(([term, gloss]) => `<div><dt>${term}</dt><dd>${gloss}</dd></div>`).join('\n                        ')}
                    </dl>
                </div>

                <div class="servitor-prose">
                    <p>The type is not a voice filter over one default character. It governs how the NPC takes a situation in, what she weighs, how she commits, and how settled or open she wants the outcome. Two innkeepers of the same type are still two people, because the name, the memory and the relationships come from your game — the type shapes the thinking, not the person.</p>
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
                        <li><strong>Holds a commitment</strong> across turns instead of re-deciding from nothing every time she is spoken to.</li>
                        <li><strong>Changes its mind on evidence</strong> — and only on evidence, not on whoever pushed hardest.</li>
                        <li><strong>Explains the choice.</strong> The line she says and the action she proposes come out of the same thought, so they cannot contradict each other.</li>
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
                <p>Servitor is built against the published research on persona fidelity and model alignment, and it is qualified the way that research qualifies: behaviour scored claim by claim rather than a whole answer given one flattering number; many situations rather than one rehearsed recital; and long exchanges, which is exactly where a supplied personality usually collapses.</p>
                <p>Every release is tried on worlds it has never seen. Coverage is measured, not asserted, and a release that cannot clear its trials does not ship — the previously qualified one keeps answering until a successor earns the seat. Growth is the same discipline repeated: each measured gain becomes the floor for the next round.</p>
            </section>

            <p class="servitor-moat">Every other layer of an NPC stack is a quarter's work for a competent team. A model that can be sixteen different minds, hold a world it was never trained on, and refuse to invent its way out of a gap is not — it is curriculum, qualification and measured growth, accumulated. That is the part of ForbocAI that compounds, and it is the part a competitor cannot reach by wiring up somebody else's API.</p>
        </div>
    </section>
    `;
};
