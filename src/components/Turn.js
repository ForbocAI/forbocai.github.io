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
                    <p class="turn-note"><strong>You wrote the verbs. She gave neither.</strong> <code>offer_item</code> and <code>refuse</code> were the two actions you allowed, and what came back was the road — smaller than the letter, larger than the weather, and nowhere in your tree. The vocabulary is yours and stays yours; that is the only reason she is safe to ship. The judgment inside it was never yours to write.</p>
                    <p class="turn-note">Memory is a store your studio created and can read without us. World context and the legal action set belong to this turn. In Unreal, the equivalent entry is <code>UForbocAISubsystem::ProcessNPC</code>; Blueprint exposes <code>Process NPC</code>.</p>
                </div>

                <div class="turn-col">
                    <p class="turn-label">Servitor™ returns one complete character judgment</p>
                    <p class="turn-note">This block is an authored illustration of the contract — the shape of a turn, not a capture from a run. We say so because the fault printed below it is real, and a disclosed limit is worth more than a reader wondering whether it was staged.</p>
                    <pre class="turn-code"><code>{
  dialogue: "He went north. That is all I can give you tonight.",
  reasoningResult: {
    reasoningText: "My brother asked me to keep it sealed. This one asked after him when nobody else in town did — then swore he would be back before the thaw, and was not. I kept the lamp lit anyway. That earns the road. It does not earn the letter.",
    responseText: "He went north. That is all I can give you tonight.",
  },
  action: {
    type: 'refuse',
    payload: { item: 'brothers_letter' },
  },
  metadata: { valid: true },
}</code></pre>
                    <p class="turn-note">She had <code>offer_item</code> on the table and did not take it. <code>valid</code> means the turn met its deadline and passed its checks — not that every word is true about your world.</p>
                    <p class="turn-note"><strong>There is a lore error in the turn above.</strong> Look at <em>He went north.</em> The refusal is guaranteed — your state never moved. The road is prose, and nothing here checked it against your world. If act two moved her brother south, it is in the player's quest log by morning. That is gate twelve, and we print it on our own demo rather than three paragraphs away from one.</p>
                    <p class="turn-note">One judgment, one call. A real turn runs under a hard deadline, and a turn that misses it authorizes nothing — no action, no memory write, no change to your state. The line the player hears in that moment is yours to author.</p>
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

            <p class="turn-refusal"><strong>The magic remains authored.</strong> Servitor™ creates the possibility; the Protocol makes it legible to the world; your game turns it into history. Eighteen months from now a player will describe this scene to a friend and get the details wrong. They will still get Maeve right.</p>
        </div>
    </section>
    `;
};
