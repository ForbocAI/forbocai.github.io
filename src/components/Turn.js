import { Deeper } from './Deeper.js';

/**
 * One complete SDK turn, kept concrete so the category promise has a contract.
 *
 * Everything this turn owes a careful reader is still here. What changed is
 * that the mechanical disclosures — what the illustration is, what `valid`
 * covers, what a missed deadline authorizes — sit under a toggle instead of
 * between the reader and the judgment. The one that stays in the open is the
 * lore error, because that is not a caveat, it is the argument.
 */
export const Turn = () => {
    return `
    <section id="turn" class="chapter turn-band">
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛒ</span>
                <div>
                    <h2>The moment an NPC becomes someone</h2>
                    <p class="chapter-lead">Late, at the counter of the Lanternbough inn, with the thaw coming and her brother's letter in the drawer behind her. A player asks the question nobody wrote. Servitor™ gathers who Maeve has been, what now matters and what her world permits — then makes the choice only she could make.</p>
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
                    <p class="turn-note"><strong>You wrote the verbs. You did not write what she did inside one.</strong> <code>offer_item</code> and <code>refuse</code> were the two actions you allowed. She took the refusal — and then gave him the road anyway, a thing smaller than the letter and larger than the weather that is nowhere in your tree. The vocabulary is yours and stays yours; that is the only reason she is safe to ship. The judgment inside it was never yours to write.</p>
                    ${Deeper({
                        summary: 'What your game owns in this call',
                        body: `<p class="turn-note">Memory is a store your studio created and can read without us. World context and the legal action set belong to this turn. In Unreal, the equivalent entry is <code>UForbocAISubsystem::ProcessNPC</code>; Blueprint exposes <code>Process NPC</code>.</p>`,
                    })}
                </div>

                <div class="turn-col">
                    <p class="turn-label">Servitor™ returns one complete character judgment</p>
                    ${Deeper({
                        summary: 'Is this a capture from a real run?',
                        body: `<p class="turn-note">No. It is an authored illustration of the contract — the shape of a turn, not a recording of one. We say so because the fault printed below it is real, and a disclosed limit is worth more than a reader wondering whether it was staged.</p>`,
                    })}
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
                    <p class="turn-note">She had <code>offer_item</code> on the table and did not take it.</p>
                    ${Deeper({
                        summary: 'What <code>valid: true</code> does and does not cover',
                        body: `<p class="turn-note">It means the turn met its deadline and passed its checks. It does not mean every word is true about your world — that is the gate twelve limit printed below.</p>`,
                    })}
                    <p class="turn-note"><strong>There is a lore error in the turn above.</strong> Look at <em>He went north.</em> The refusal is guaranteed — your state never moved. The road is prose, and nothing here checked it against your world. If act two moved her brother south, it is in the player's quest log by morning. That is gate twelve, and we print it on our own demo rather than three paragraphs away from one.</p>
                    <p class="turn-note"><strong>One judgment, one call.</strong> Not a chain of calls per line, not a re-roll to get a parseable action.</p>
                    ${Deeper({
                        summary: 'What happens when a turn misses its deadline',
                        body: `<p class="turn-note">Nothing is authorized — no action, no memory write, no change to your state. The line the player hears in that moment is yours to author, and a turn that fails is a turn your game never hears from.</p>`,
                    })}
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
                        <p class="turn-note">One line of memory: <em>You said you would come back before the thaw. You did not.</em></p>
                        <pre class="turn-code"><code>{
  dialogue: "He went north. That is all I can give you tonight.",
  reasoningText: "That earns the road. It does not earn the letter.",
  action: { type: 'refuse', payload: { item: 'brothers_letter' } },
}</code></pre>
                    </article>
                    <article>
                        <span>Same persona. Same question. One memory changed.</span>
                        <p class="turn-note">The player came back from the north road with her brother's ring: <em>You kept the promise, and you brought her the worst news in town.</em></p>
                        <pre class="turn-code"><code>{
  dialogue: "Then you already know what is in it. Sit down first.",
  reasoningText: "He is not coming back, and this one went to find that out for me. What he asked me to keep was never a wall to hold against the only person who looked.",
  action: { type: 'offer_item', payload: { item: 'brothers_letter' } },
}</code></pre>
                    </article>
                </div>
                <p class="turn-note turn-counterfactual-foot">Nothing about Maeve changed. Her brother's request still stands, and she still weighs it the same way. What changed is what the player made true, and that is the whole difference between a character and a generator.</p>
            </section>

            <p class="turn-consequence"><strong>Think about the arc your narrative director cut this cycle.</strong> Not for quality — for the localization lock. If a character could hold the loyalty your writers authored and still surprise you in hour forty, what would you have put back in?</p>

            <p class="turn-consequence"><strong>A refusal becomes the next piece of evidence too.</strong> The letter stays sealed, the world remembers that it was asked for, and Maeve enters the next encounter as the person who kept her brother's confidence — and who knows this player asked after him anyway.</p>

            <p class="turn-refusal"><strong>The magic remains authored.</strong> Servitor™ creates the possibility; the Protocol makes it legible to the world; your game turns it into history. Eighteen months from now a player will describe this scene to a friend and get the details wrong. They will still get Maeve right.</p>
        </div>
    </section>
    `;
};
