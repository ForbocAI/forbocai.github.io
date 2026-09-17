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
                        <h3>She reasons, and you can read the reasoning</h3>
                        <p>A character weighs what a situation will cost, compares it against the values your world gave her, notices when two duties pull against each other, and commits. Push back with something new and she revises — because the evidence changed, not because you pushed.</p>
                    </div>
                    <p class="ledger-fact">The line she speaks and the action she proposes are projections of one thought, so the two cannot disagree. Ask for the rationale and you get the reasoning behind that same decision, not a plausible story written after it.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>Memory is the floor she reasons from</h3>
                        <p>Companions and neighbours keep their habits, their loyalties and the things you did in front of them — and a returning player is picked up mid-conversation rather than reintroduced. Recall on its own is a database; what makes it feel like a person is what she does with it.</p>
                    </div>
                    <p class="ledger-fact">Memory is written to a store your studio owns. ForbocAI issues the instruction; your build does the writing, and can read it back without us.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>Nothing reaches the world unchecked — and the check is yours</h3>
                        <p>A character proposes; she never mutates. We hand back structured intent and never touch your state. Your build measures it against your inventory, your quest state and your rules, and only a pass moves anything on screen. The SDK ships the validation path; the rules inside it are yours, because they are the part nobody outside your studio can know.</p>
                    </div>
                    <p class="ledger-fact">An answer that cannot be validated comes back as an explicit failure you can handle — never as invented dialogue or an action you never authored.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>Ghost will walk the content first</h3>
                        <p>Ghost characters play your build headless, over and over, through the encounters and social loops a human tester would need a fortnight to reach. Coverage reporting lands in Q4 2026 — the harness that drives it is what we qualify Servitor releases against today.</p>
                    </div>
                    <p class="ledger-fact">Dead ends, unreachable quests and broken loops surface as coverage you can read. Ghost drives the same entry points your automated tests already use — if your build cannot run headless today, that is the work, and we will say so before you sign anything.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>No model to package or host</h3>
                        <p>ForbocAI's proprietary NPC model Servitor runs on our infrastructure. You do not ship a runtime, qualify a GPU path, or discover on launch day that a player's laptop cannot think.</p>
                    </div>
                    <p class="ledger-fact">A five-year-old laptop gets the same character as a gaming rig, because it is the same machine thinking — the hardware in front of the player never decides how well she thinks. Studios keep their game-owned world state and SDK-local memory; hosted cognition stays a ForbocAI service. The trade is explicit: cognition needs a connection.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>It fails closed, not quietly</h3>
                        <p>Cognition runs under a configured deadline, and the worst case is a failure rather than a wait. A turn that cannot make it comes back as a typed invalid result authorizing no action, no memory write and no state change — your build chooses what the character does instead, usually the barks it already has.</p>
                    </div>
                    <p class="ledger-fact">We never manufacture substitute dialogue to cover a miss. When the connection goes, the character does not improvise and does not stall: the turn returns invalid, your build falls through to whatever you authored, and nothing is written to memory. We have no offline model today and we will not imply one — if your title has to think on a plane or pass cert on a closed network, we are not your layer this year, and we would rather say that now than in month three of an integration. We measure complete turns through the SDK and will publish regional figures when a release benchmark passes, not before.</p>
                </li>
            </ul>
        </div>
    </section>
    `;
};
