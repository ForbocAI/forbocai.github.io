/**
 * One complete SDK turn, kept concrete so the category promise has a contract.
 */
export const Turn = () => {
    return `
    <section id="turn" class="chapter turn-band">
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛒ</span>
                <div>
                    <h2>The moment an NPC becomes someone</h2>
                    <p class="chapter-lead">A player asks the question nobody wrote. Servitor™ gathers who this person has been, what now matters and what the world permits—then creates the next choice only this character could make.</p>
                </div>
            </header>

            <div class="turn-grid">
                <div class="turn-col">
                    <p class="turn-label">Your game asks</p>
                    <pre class="turn-code"><code>const response = await store.dispatch(
  processNPC({
    npcId: 'maeve',
    structuredPersona: maeve,
    text: 'Anything I should know before I go?',
    context: worldState,
    memory,
    legalActions: ['offer_item', 'refuse'],
  }),
).unwrap()</code></pre>
                    <p class="turn-note">Memory is a store your studio created and can read without us. World context and the legal action set belong to this turn. In Unreal, the equivalent entry is <code>UForbocAISubsystem::ProcessNPC</code>; Blueprint exposes <code>Process NPC</code>.</p>
                </div>

                <div class="turn-col">
                    <p class="turn-label">Servitor™ returns one complete character judgment</p>
                    <pre class="turn-code"><code>{
  dialogue: "He went north. That is all I can give you tonight.",
  reasoningResult: {
    reasoningText: "He asked me to keep it sealed. This one asked after him — that earns the road, not the letter.",
    responseText: "He went north. That is all I can give you tonight.",
  },
  action: {
    type: 'refuse',
    payload: { item: 'brothers_letter' },
  },
  metadata: { valid: true },
}</code></pre>
                    <p class="turn-note">She had <code>offer_item</code> available and did not take it. A refusal is a judgment your game can inspect, not a failed response: the rationale names the reason, so when a player is told no, your QA lead can find out why.</p>
                    <p class="turn-note">The reply is checked too, and it is worth being exact about what that means. It must name the action she actually took, must not argue for the one she refused, and must not claim a comparison the supplied evidence does not carry. Two different faults get called the same thing, and only one of them is ours to claim. <strong>She does not drift out of character</strong>—the model holds no self to leak into her, so her voice, her loyalties and her refusals stay the ones you authored, however far past the script the player goes. <strong>She can still get a fact about your world wrong.</strong> Her prose is not checked against your lore; the action boundary is what protects your state. That second one is the twelfth gate, and it is on the list precisely so it is owed to you rather than disclaimed.</p>
                    <p class="turn-note">The same plainness about time and cost, because they are the same fact. One character judgment is one call: the dialogue, the reasoning behind it and the structured action come back from the same attempt—not a chain of calls per line, not a re-roll to get a parseable action, not a second request to explain the first. This turn crossed a network and ran under a hard deadline. If it cannot finish in that budget and meet its rules, the turn comes back marked invalid and authorizes nothing—no action, no memory write, no change to your state—and the line the player hears in that moment is yours to author. Active cognition needs a connection; that is the trade, stated once.</p>
                </div>
            </div>

            <section class="turn-counterfactual" aria-labelledby="turn-counterfactual-title">
                <div class="turn-counterfactual-head">
                    <p class="turn-label">The character changes when the meaning changes</p>
                    <h3 id="turn-counterfactual-title">One changed truth. A different choice.</h3>
                    <p>Maeve does not vary because a generator rolled another line. She changes because the player changed what the moment means.</p>
                </div>
                <div class="turn-counterfactual-pair">
                    <article>
                        <span>Tonight</span>
                        <strong><code>refuse</code> — the asking earned the road, not the letter. A broken promise about the thaw is still sitting between them.</strong>
                    </article>
                    <article>
                        <span>After the player brings her brother's ring back from the north road</span>
                        <strong><code>offer_item</code> — the evidence changed, so the judgment did. Same character, same values, different verdict.</strong>
                    </article>
                </div>
            </section>

            <p class="turn-consequence"><strong>A refusal becomes the next piece of evidence too.</strong> The letter stays sealed, the world remembers that it was asked for, and Maeve enters the next encounter as the person who kept her brother's confidence—and who knows this player asked after him anyway.</p>

            <p class="turn-refusal"><strong>The magic remains authored.</strong> Servitor™ creates the possibility; the Protocol makes it legible to the world; your game turns it into history. This is the moment an NPC stops filling space and starts becoming someone the player can never forget.</p>
        </div>
    </section>
    `;
};
