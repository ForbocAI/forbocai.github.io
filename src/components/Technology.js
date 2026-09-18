/**
 * Technology Component
 *
 * Four parallel entries on one ruled spine rather than four boxes: the
 * structure says "these are the things you plug in", which is what they are.
 * No icons — the rail already marks the section, and four abstract line glyphs
 * were saying less than the rules do.
 */
export const Technology = () => {
    return `
    <section id="technology" class="chapter chapter-day">
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᚠ</span>
                <div>
                    <h2>Every game system comes alive through the people inside it</h2>
                    <p class="chapter-lead">Combat creates danger. Quests create direction. Economies create pressure. Character Intelligence turns each one into motive, loyalty, betrayal and choice.</p>
                </div>
            </header>

            <ul class="ledger">
                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>Drama that remembers</h3>
                        <p>Rivals remember mercy. Companions carry unfinished arguments. Betrayal changes the next encounter because it changed the person entering it.</p>
                    </div>
                    <p class="ledger-fact">The past does not decorate the dialogue. It changes the next decision.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>Strategy with a point of view</h3>
                        <p>A captain may disobey, a faction may fracture, and an ally may choose the costly plan because identity—not a random branch—made that decision inevitable.</p>
                    </div>
                    <p class="ledger-fact">Tactics become personal when every decision belongs to someone.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>Worlds that answer through people</h3>
                        <p>Quests, economies, factions and social systems stop reacting as machinery alone. They answer through characters with loyalties, motives and judgment.</p>
                    </div>
                    <p class="ledger-fact">The world does not merely update. Someone inside it responds.</p>
                </li>
            </ul>

            <div class="ledger-note production-gates">
                <h3>The surprise belongs inside your authorship</h3>
                <p>You still author the laws of the world. Servitor™ gives the people inside those laws the power to surprise you.</p>
            </div>

            <div class="hero-buttons">
                <a href="mailto:hello@forboc.ai?subject=Bring%20the%20scene%20your%20dialogue%20tree%20cannot%20hold" class="btn btn-primary">Bring the scene your dialogue tree cannot hold</a>
                <a href="#whitepaper" class="text-link" data-link>See how intelligence enters the world</a>
            </div>
        </div>
    </section>
    `;
};
