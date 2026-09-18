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

            <div class="turn-authored">
                <div class="turn-authored-head">
                    <p class="turn-label">What your writer hands us</p>
                    <h3>The document is the character. We do not write it and we cannot.</h3>
                    <p class="turn-note">This is <code>maeve</code> — the object the call below passes as <code>structuredPersona</code>. Every line of it was typed by a person on your narrative team, and it is the most load-bearing asset in your build. The better it is written, the better she judges.</p>
                </div>
                <pre class="turn-code"><code>const maeve = {
  traits: ['Keeps a confidence past the point it costs her',
           'Warm first, exact second'],
  goals: ['Hold the inn through the thaw',
          'Find out what became of her brother'],
  relationships: [
    { who: 'Aldren, her brother',
      bond: 'Asked her to keep the letter sealed. Gone since autumn.' },
    { who: 'the player',
      bond: 'Asked after Aldren when nobody in town did. Promised to
             return before the thaw, and did not.' },
  ],
  world: ['Lanternbough, the night the thaw comes',
          'The letter is in the drawer behind her'],
  speakingStyle: ['Short sentences. Never explains a refusal twice.'],
  constraints: ['The letter does not open on a debt. Only on news of Aldren.'],
}</code></pre>
                <p class="turn-note turn-authored-foot"><strong>Read the last line, then read her reasoning below.</strong> <em>The letter does not open on a debt</em> is a writer's constraint, typed on a Tuesday. <em>That earns the road. It does not earn the letter.</em> is what it costs her at the counter, at night, with this particular player in front of her. Nobody typed the second one. That is the entire product, and your writer authored the half that decides it.</p>
            </div>

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
                    <p class="turn-note"><strong>You wrote what she is allowed to do. You did not write what she would say while doing it.</strong> <code>offer_item</code> and <code>refuse</code> were the two actions on the table, and she took the refusal — then gave him the road anyway, in the line itself: a thing smaller than the letter and larger than the weather, nowhere in your tree. The vocabulary is yours and stays yours. What she made of it was never yours to write.</p>
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
                        body: `<p class="turn-note">It means the turn met its deadline and passed its checks. It does not mean every word she says is true about your world — that limit is printed below, on our own demo.</p>`,
                    })}
                    ${Deeper({
                        summary: 'There is a lore error in the turn above',
                        body: `<p class="turn-note">Look at <em>He went north.</em> The refusal is guaranteed — your state never moved. But the road is prose, and nothing here checked it against your world. If act two moved her brother south, it is in the player's quest log by morning. We print that on our own demo rather than three paragraphs away from one.</p>`,
                    })}
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

            <section class="turn-room" aria-labelledby="turn-room-title">
                <div class="turn-counterfactual-head">
                    <p class="turn-label">The rest of the room was listening</p>
                    <h3 id="turn-room-title">Nobody wrote a branch for what the miner does while she refuses.</h3>
                    <p>Brannoc is at the end of the counter. The player covered his room in the autumn when he came up short, and he has never mentioned it. He is close enough to hear Maeve say no.</p>
                </div>
                <div class="turn-counterfactual-pair">
                    <article>
                        <span>What your writer handed us</span>
                        <pre class="turn-code"><code>const brannoc = {
  traits: ['Owes more than he can say out loud',
           'Slow to speak in a room he does not own'],
  goals: ['Clear the debt before the thaw'],
  relationships: [
    { who: 'the player',
      bond: 'Covered his room in the autumn. Never mentioned since.' },
    { who: 'Maeve', bond: 'Her lodger two winters. Her word runs this room.' },
  ],
  speakingStyle: ['Says the smallest true thing, then stops.'],
  constraints: ['Will not contradict Maeve in her own house.'],
}</code></pre>
                    </article>
                    <article>
                        <span>What he did about it</span>
                        <pre class="turn-code"><code>{
  dialogue: "Maeve. It was them that covered my room in the autumn.",
  reasoningText: "She is not wrong about the letter and I will not say
    she is. But she is weighing what this one is owed without knowing
    the half of it, and the half she is missing is mine to give her.",
  action: { type: 'speak_to', payload: { target: 'maeve' } },
}</code></pre>
                    </article>
                </div>
                <p class="turn-note turn-counterfactual-foot"><strong>He never contradicts her.</strong> His constraint holds — he will not take her side down in her own house. He changes what is true in the room instead, and now she is weighing a debt she did not know about, in front of a player who never asked him to speak. <strong>There is no tree in which that scene exists.</strong> Two people in a room is not two branches; it is every pair, and three is every triple. That is why party banter gets cut in month thirty of every game ever made, and it is the one thing branch writing does not make expensive so much as impossible.</p>
            </section>

            <p class="turn-consequence"><strong>Think about the arc your narrative director cut this cycle.</strong> Not for quality — for the localization lock. If a character could hold the loyalty your writers authored and still surprise you in hour forty, what would you have put back in?</p>

            <p class="turn-consequence"><strong>A refusal becomes the next piece of evidence too.</strong> The letter stays sealed, the world remembers that it was asked for, and Maeve enters the next encounter as the person who kept her brother's confidence — and who knows this player asked after him anyway.</p>

            <p class="turn-refusal"><strong>The magic remains authored.</strong> Servitor™ creates the possibility; the Protocol makes it legible to the world; your game turns it into history.</p>
        </div>
    </section>
    `;
};
