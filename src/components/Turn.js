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
  dialogue: "He took the north road in spring.",
  reasoningResult: {
    reasoningText: "They noticed him when others did not.",
    responseText: "He took the north road in spring.",
  },
  action: {
    type: 'offer_item',
    payload: { item: 'brothers_letter' },
  },
  metadata: { valid: true },
}</code></pre>
                    <p class="turn-note"><code>offer_item</code> is a proposal, not a mutation. Your validation rules check it against the contracts your game supplied; only then may the letter change hands.</p>
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
                        <span>Brother evidence withheld</span>
                        <strong>Maeve must not invent him, the letter or a reason to offer it.</strong>
                    </article>
                    <article>
                        <span>Brother evidence supplied</span>
                        <strong>Can Maeve surface him and propose the letter for a reason the writer accepts?</strong>
                    </article>
                </div>
            </section>

            <p class="turn-consequence"><strong>One accepted choice becomes the next piece of evidence.</strong> The letter changes hands, the world remembers, and Maeve enters the next encounter as the person who chose to trust this player.</p>

            <p class="turn-refusal"><strong>The magic remains authored.</strong> Servitor™ creates the possibility; the Protocol makes it legible to the world; your game turns it into history. This is the moment an NPC stops filling space and starts becoming someone the player can never forget.</p>
        </div>
    </section>
    `;
};
