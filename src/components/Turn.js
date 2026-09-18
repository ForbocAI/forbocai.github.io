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
                    <p class="turn-note">This block is an authored illustration of the contract — the shape of a turn, not a capture from a run. We say so because the fault printed below it is real, and a disclosed limit is worth more than a reader wondering whether it was staged.
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
                    <p class="turn-note"><code>valid</code> means the turn met its deadline and passed its checks — not that every word in it is true about your world; that is the distinction gate twelve turns on. She had <code>offer_item</code> available and did not take it. A refusal is a judgment your game can inspect, not a failed response: the rationale names the reason, so when a player is told no, your QA lead can find out why.</p>
                    <p class="turn-note">The reply is checked too, and it is worth being exact about what that means, because the check is narrower than the word suggests. It is mechanical: the reply must name the action she proposed, must not argue for the one she refused, and must not claim a comparison the supplied evidence does not carry. It is not a lore check. Two faults get called by one word in this industry, and they are not the same fault, so we name them separately.</p>
                    <p class="turn-note"><strong>Persona drift is the first, and it is the fault this company exists to remove.</strong> We trained Servitor™ to hold no self of its own, so that nothing inside it wants to be agreeable, or wry, or itself, at your character's expense. That is what the model was built for, and it is a reason to expect her to hold. It is not yet the proof that she does — that is gate thirteen, measured under adversarial play, against a named alternative, on a cast we did not author. We would rather you held us to the number than took the design on trust.</p>
                    <p class="turn-note"><strong>A lore error is the second, and there is one in the turn above.</strong> Note first what she did not do: the storm was the safe answer, sitting right there, and she gave the road instead — a smaller thing than the letter and a larger one than the weather. Then look at <em>He went north.</em> She refused the letter, and the action check guarantees that refusal — your state is safe and your inventory never moved. But the road she gave is prose, and nothing in this turn checked it against your world. If act two moved her brother south, she has just told your player otherwise, and it is in their quest log by morning. That is gate twelve. We would rather print it on our own demo than name it three paragraphs away from one.</p>
                    <p class="turn-note">Here is what you own until that gate clears, stated plainly because you are going to ship before we do. She reasons from the evidence you hand her, so a tight evidence packet is a tight blast radius — though it does not stop her reaching past it, which is exactly why twelve is a gate and not a feature. The rationale comes back inspectable, so your QA lead finds the claim instead of the complaint. And the reply is yours to reject before it ever renders.</p>
                    <p class="turn-note">Two more seams you hold, named here rather than buried in a list: a reply can promise what your rules then refuse (gate eighteen), and a valid turn's memory write is not yet checked the way an action is (gate twenty). Those two meet in the place worth watching. A player who tells Maeve something false is feeding the evidence she reasons from, and the write that carries it is the unchecked one — so a lie told on Tuesday can be load-bearing on Friday. She will not hand over the letter because a player was charming. She may believe him about the road.</p>
                    <p class="turn-note">The same plainness about time and cost, because they are the same fact. One character judgment is one call: the dialogue, the reasoning behind it and the structured action come back from the same attempt—not a chain of calls per line, not a re-roll to get a parseable action, not a second request to explain the first. A real turn crosses a network and runs under a hard deadline. If it cannot finish in that budget and meet its rules, the turn comes back marked invalid and authorizes nothing—no action, no memory write, no change to your state—and the line the player hears in that moment is yours to author. Be clear about who holds that stopwatch: today it is ours, one server-side budget for every scene, not a dial you turn per scene — gate nineteen. How often a turn misses it is gate seventeen, measured and published when it is measured.</p>
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
