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
                    <p class="ledger-fact">The line she speaks and the action she proposes are projections of one thought, so the two cannot disagree. Ask for the rationale and you get the reasoning behind that same decision — the same thought, read out.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>Memory is the floor she reasons from</h3>
                        <p>Companions and neighbours keep their habits, their loyalties and the things you did in front of them — and a returning player is picked up mid-conversation rather than reintroduced. Recall on its own is a database. A person is what happens next.</p>
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
                        <p>Ghost characters will play your build headless, over and over, through the encounters and social loops a human tester would need a fortnight to reach. The harness that drives them is what we qualify Servitor releases against today; the coverage a producer can read lands Q4 2026.</p>
                    </div>
                    <p class="ledger-fact">Dead ends, unreachable quests and broken loops will surface as coverage you can read. QA is the line item every producer has already tried to cut twice, and this is the part of it a machine should be doing. Ghost drives the same entry points your automated tests already use — if your build cannot run headless today, that is the work, and we will say so before you sign anything.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>What a player says to her is your submission, not ours</h3>
                        <p>Everything above keeps a character in character under pressure. None of it is a content policy. The two are not the same thing. Model output is structurally validated and cannot authorize a game action unless your rules accept it — that is canon integrity and gameplay legality, and that is where it stops.</p>
                    </div>
                    <p class="ledger-fact">We do not classify what a character says for your ratings board, and we do not claim console-certification readiness. A player working to make her say something ugly produces a line a platform holder will read as the studio's, not the player's — that is a harder problem than a chat box, and pretending otherwise would only waste your first call. It stays with you because the submission is yours and so is the territory list. If your rating needs generated lines classified before a player sees them, that classifier sits between our answer and your renderer, on your side of the boundary — the same side your validation rules already live on, and the same place they already run. It is the question we get asked latest and the one that should be asked first, so ask it on the first call.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>No model to package or host</h3>
                        <p>ForbocAI's proprietary NPC model Servitor runs on our infrastructure. You do not ship a runtime, qualify a GPU path, or discover on launch day that a player's laptop cannot think.</p>
                    </div>
                    <div class="ledger-fact"><p>A five-year-old laptop gets the same character as a gaming rig, because it is the same machine thinking — the hardware in front of the player never decides how well she thinks. Studios keep their game-owned world state and SDK-local memory; hosted cognition stays a ForbocAI service. The trade is explicit: cognition needs a connection.</p>

                    <p>You are pinned to a release, not to whatever we deployed this morning — a qualified release keeps answering for a supported window, and it does not change under a shipped title. How long that window runs and how much notice retiring it takes belong in your contract rather than on this page. What we will say here is that both numbers exist: make us write them down before you sign, and hold us to having told you to.</p>

                    <p>What it costs is shaped like this — plans priced by request volume rather than by tokens spoken. The billable unit is a turn we answered, counted where the request arrives, on our side of the boundary: nothing in your build reports usage back to us, and a character who only talks costs what one who asks for the world to change costs. A turn we could not answer — our deadline, our ceiling, or an honest refusal — is not a request you paid for. A turn your own rules then reject is, because we answered it and your rules are yours alone to run.</p>

                    <p>Billing itself is not shipped yet: keys are cut by hand until the account portal lands, which is the first thing queued behind Ghost. The numbers come on the call, and the shape does not change between here and there.</p>

                    <p>What you take on in exchange is our capacity. At launch-week concurrency the ceiling is ours rather than the player's hardware, and when it is reached a turn comes back invalid and your barks carry it — the same failure as a missed deadline, not a new one to design around. What that ceiling is, and what we owe you when we miss it, belong in the contract beside the pin window. They are the second thing to make us write down.</p></div>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>It fails closed, not quietly</h3>
                        <p>Cognition runs under a configured deadline, so the worst case is bounded — a failure you can handle, not an open-ended wait. A turn that cannot make it comes back as a typed invalid result authorizing no action, no memory write and no state change — your build chooses what the character does instead — the bark floor described below, which is a line item rather than a leftover.</p>
                    </div>
                    <div class="ledger-fact"><p>We never manufacture substitute dialogue to cover a miss. When the connection goes, the character does not improvise and does not stall: the turn returns invalid, your build falls through to whatever you authored, and nothing is written to memory.</p>

                    <p>The bug your QA cannot reproduce is one we have to answer for too, and we have not solved it. Cognition is probabilistic: the same scene twice is not a promise of the same sentence twice. What does hold still is the release — your pin does not move under a shipped title, so the thing that produced your tester's transcript is the thing still answering you, and the reasoning behind a turn comes back with it rather than having to be inferred from the line. A per-turn release stamp your tools can read is not built today. It is a fair thing to ask us for, and a fairer one to ask before you sign than after.</p>

                    <p>We have no offline model today and we will not imply one — if your title has to think on a plane or pass cert on a closed network, we are not your layer this year, and you should hear that now rather than in month three of an integration. We measure complete turns through the SDK and will publish regional figures when a release benchmark passes, not before.</p></div>
                </li>
            </ul>

            <p class="ledger-boundary"><strong>Everything above is quoted, invoiced and paid in ordinary money.</strong> There is a token further down this page. No part of what a studio buys from us in order to ship a title — SDK and API access, memory, validated actions, Ghost — requires holding, receiving or billing one, at any point. If Souls are not for you, you can stop reading at the end of this section and still have the whole product.</p>

            <p class="ledger-boundary">Everything this page defers lands on one of two calls. The technical one covers the pin window, the capacity ceiling, the moderation boundary and the forty-turn run — an hour, with your engineers in it. The commercial one covers pricing and pilot terms, and it follows. Book the technical one; nothing on it needs a lawyer.</p>

            <div class="ledger-note"><p><strong>And if we are not here in three years?</strong> It is the right question to ask a seed-stage company selling hosted cognition, and it deserves better than a slogan. What is already true: your memory store is yours and readable without us, your validation rules never left your build, and nothing in your save file depends on us having answered.</p>

            <p>What stops is the thinking. In a shipped title that looks like the fallback you already wrote: the turn returns invalid, the character speaks the barks you authored, and the game keeps running with worse characters in it. That is the honest worst case, and it is the one to put in front of a producer — not a service that vanished, but a title falling back to a floor you paid to author.</p>

            <p>That fallback is not free, and pricing it at zero would be doing you a disservice. Shipping on us means authoring a bark floor for every character a player can reach — not the first handful of lines you would have written regardless, but a deliberate pass across all of them, costed as its own milestone. What you stop writing is the long tail. What you keep writing is the floor you fall to, and it belongs in the budget as insurance rather than arriving later as a surprise.</p>

            <p>Continuity beyond that is contractual rather than technical, and a marketing page cannot bind what only a signature can: ask on the first call, not in month three.</p></div>
        </div>
    </section>
    `;
};
