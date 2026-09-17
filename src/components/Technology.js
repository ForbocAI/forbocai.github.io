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
                    <h2>The character layer</h2>
                    <p class="chapter-lead">This is what you plug in. ForbocAI sits between your game and the model: your game keeps the world, the rules, and the save file, and we keep the character thinking coherent.</p>
                </div>
            </header>

            <ul class="ledger">
                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>Memory that outlives the session</h3>
                        <p>Companions and neighbours keep their habits, their loyalties, and the things you did in front of them. A returning player gets picked up mid-conversation, not reintroduced.</p>
                    </div>
                    <p class="ledger-fact">Memory is written to a store your studio owns. ForbocAI issues the instruction; your build does the writing, and can read it back without us.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>Nothing reaches the world unchecked</h3>
                        <p>A character proposes; she never mutates. Every intended action is measured against your inventory, your quest state, and your rules before a single thing moves on screen.</p>
                    </div>
                    <p class="ledger-fact">An answer that cannot be validated comes back as an explicit failure you can handle — never as invented dialogue or an action you never authored.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>Ghost walks the content first</h3>
                        <p>Ghost characters play your build headless, over and over, through the encounters and social loops a human tester would need a fortnight to reach.</p>
                    </div>
                    <p class="ledger-fact">Dead ends, unreachable quests, and broken loops surface as coverage you can read. QA is 15–25% of a game budget before anyone ships.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>No model to package or host</h3>
                        <p>ForbocAI's proprietary NPC model Servitor runs on our infrastructure. You do not ship a runtime, qualify a GPU path, or discover on launch day that a player's laptop cannot think.</p>
                    </div>
                    <p class="ledger-fact">One SDK call, one predictable bill. Behaviour is identical on a gaming rig and a five-year-old laptop, because it is the same machine answering.</p>
                </li>
            </ul>
        </div>
    </section>
    `;
};
