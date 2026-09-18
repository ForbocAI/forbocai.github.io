import { ChapterMark } from './Sigil.js';

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
    <section id="turn" class="chapter turn-band is-event">
        <div class="container">
            <header class="chapter-head">
                ${ChapterMark({ rune: 'ᛒ' })}
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
      bond: 'Asked after Aldren when nobody in town did. Promised to return before the thaw, and did not.' },
  ],
  world: ['Lanternbough, the night the thaw comes',
          'The letter is in the drawer behind her'],
  speakingStyle: ['Short sentences. Never explains a refusal twice.'],
  constraints: ['The letter does not open on a debt. Only on news of Aldren.'],
}</code></pre>
                <p class="turn-note"><strong>Your narrative lead approves the cast before you ship, by reading where it argued with itself.</strong> Every turn is a payload, so a cast re-runs against a corpus of them sorted by disagreement — judgments that went against the document, characters drifting toward one another, refusals that stopped refusing. Nobody reads four hundred people's reasoning. They read the exceptions, the way an editor reads a diff. Holding one build across that window, so the cast you signed is the cast that answers on launch day, is clause seven.</p>
                <p class="turn-note"><strong>Your writers do not edit her lines. They edit what she reasons from.</strong> She hands back the reason she had, in her own words, every turn, and that reason is the artifact your narrative lead reviews. A line that lands wrong is almost never a wording problem — it is a missing loyalty, a relationship phrased too loosely, a constraint the document implied instead of stating. Change the document, run the scene, read the reason. That loop is a morning, not a milestone, and it lives in your repo, in review, like any other source file. We never touch it. We cannot.</p>
                ${Deeper({
                    summary: 'What it costs to author four hundred of these',
                    body: `<p class="turn-note">Four hundred pages. A writer-week buys about a dozen, so a cast is a season for a small room — against the hundreds of thousands of words of branch it replaces. Your bible already has most of a persona document in it. What changes is where it goes: today it becomes thirty thousand words of branch nobody walks, and here it stays a page. A cast gets dearer to imagine and far cheaper to cover.</p>`,
                })}
                <p class="turn-note turn-authored-foot"><em>The letter does not open on a debt</em> is a writer's constraint, typed on a Tuesday. At the counter, at night, with this player in front of her, it costs her the letter. Nobody typed the second one — and your writer authored the half that decided it.</p>
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
                    <p class="turn-note"><strong>You wrote what she is allowed to do. You did not write what she would say while doing it.</strong> <code>offer_item</code> and <code>refuse</code> were the two actions on the table. She took the refusal. Then she gave the road anyway, in the line itself — a thing smaller than the letter and larger than the weather, and nowhere in your tree. The vocabulary is yours and stays yours. What she made of it was never yours to write.</p>
                    ${Deeper({
                        summary: 'What your game owns in this call',
                        body: `<p class="turn-note">Memory is a store your studio created and can read without us. World context and the legal action set belong to this turn. In Unreal, the equivalent entry is <code>UForbocAISubsystem::ProcessNPC</code>; Blueprint exposes <code>Process NPC</code>.</p>`,
                    })}
                </div>

                <div class="turn-col">
                    <p class="turn-label">Servitor™ returns one complete character judgment</p>
                    <p class="turn-note">The persona above is what a writer typed. Below is what comes back.</p>
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
                        summary: 'How your QA files a bug against a line nobody wrote',
                        body: `<p class="turn-note">They attach the payload, not a video. Every judgment is a function of four things your build already holds — the persona document, the memory excerpt, the world context and the legal action set — against one recorded model and runtime build. QA files the payload and it replays. A tester who cannot reproduce a line cannot file it, which is why the turn is a record before it is a performance. Holding one build across your ship window, so that record stays stable through certification, is clause seven.</p>`,
                    })}
                    ${Deeper({
                        summary: 'What <code>valid: true</code> does and does not cover',
                        body: `<p class="turn-note">It means the turn met its deadline and passed its checks. It does not mean every word she says is true about your world — that limit is printed below, on our own demo.</p>`,
                    })}
                    <p class="turn-note"><strong>Look at <em>He went north.</em></strong> The refusal is guaranteed — your state never moved. The road is prose, and nothing checked it against your world. If act two moved her brother south, it is in the player's quest log by morning. Prose grounding is clause twelve.</p>
                    <p class="turn-note"><strong>One judgment, one call.</strong> Not a chain of calls per line, not a re-roll to get a parseable action.</p>
                    ${Deeper({
                        summary: 'What happens when a turn misses its deadline',
                        body: `<p class="turn-note">It authorizes nothing. Nothing is authorized — no action, no memory write, no change to your state. The line the player hears in that moment is yours to author, and a turn that fails is a turn your game never hears from.</p>`,
                    })}
                </div>
            </div>

            <section class="turn-counterfactual" aria-labelledby="turn-counterfactual-title">
                <div class="turn-counterfactual-head">
                    <p class="turn-label">The character changes when the meaning changes</p>
                    <h3 id="turn-counterfactual-title">One changed truth. A different choice.</h3>
                    <p class="turn-diffline">The player went north, and came back with her brother's ring.</p>
                </div>
                <div class="turn-counterfactual-pair">
                    <article>
                        <span>Before</span>
                        <p class="turn-note"><em>You said you would come back before the thaw. You did not.</em></p>
                        <pre class="turn-code"><code>{
  dialogue: <b>"He went north. That is all I can give you tonight."</b>,
  reasoningText: <b>"That earns the road. It does not earn the letter."</b>,
  action: { type: <b>'refuse'</b>, payload: { item: 'brothers_letter' } },
}</code></pre>
                    </article>
                    <article>
                        <span>After</span>
                        <p class="turn-note"><em>You kept the promise, and you brought her the worst news in town.</em></p>
                        <pre class="turn-code"><code>{
  dialogue: <b>"Then you already know what is in it. Sit down first."</b>,
  reasoningText: <b>"He is not coming back, and this one went to find that out for me. What he asked me to keep was never a wall to hold against the only person who looked."</b>,
  action: { type: <b>'offer_item'</b>, payload: { item: 'brothers_letter' } },
}</code></pre>
                    </article>
                </div>
                <p class="turn-counterfactual-foot"><strong>Nothing about Maeve changed.</strong> Same persona, same question, same two verbs on the table. Her brother's request still stands and she still weighs it the same way. What changed is what the player made true — and that is the whole difference between a character and a generator.</p>
            </section>


        </div>
    </section>
    `;
};
