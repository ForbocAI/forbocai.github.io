import { Deeper } from './Deeper.js';

export const TurnWalkthrough = () => `
    <section id="turn-walkthrough" class="chapter turn-band">
        <div class="container">
            <div class="turn-authored">
                <div class="turn-authored-head">
                    <p class="turn-label">What your writer hands us</p>
                    <h3>The document is the character, and every one of yours has one. We do not write them and we cannot.</h3>
                    <p class="turn-note">This is <code>maeve</code> — what the call below passes as <code>structuredPersona</code>. Every line is typed by someone on your narrative team, and it is the most load-bearing asset in your build. The better it is written, the better she judges.</p>
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
      bond: 'Asked after Aldren when nobody in town did. Promised to return before the thaw.' },
  ],
  world: ['Lanternbough, the night the thaw comes',
          'The letter is in the drawer behind her'],
  speakingStyle: ['Short sentences. Never explains a refusal twice.'],
  constraints: ['The letter does not open on a debt. Only on news of Aldren.'],
}</code></pre>
                ${Deeper({
                    summary: 'How a narrative lead approves a cast before you ship',
                    body: `<p class="turn-note"><strong>Your narrative lead approves the cast before you ship, by reading where it argued with itself.</strong> Every turn is a payload, so a cast re-runs against a corpus of them sorted by disagreement — judgments that went against the document, characters drifting toward one another, refusals that stopped refusing. Nobody reads four hundred people's reasoning. They read the exceptions, the way an editor reads a diff. Release pinning, the Standard’s seventh term, holds one build across that window, so the cast you signed is the cast that answers on launch day.</p>`,
                })}
                <p class="turn-note"><strong>Your writers do not edit her lines. They edit what she reasons from.</strong> Every turn hands back her reason in her own words, and that is what your narrative lead reviews. A line that lands wrong is usually a missing loyalty, or a constraint the document implied instead of stating. Change the document, run the scene, read the reason — a morning, not a milestone.</p>
                ${Deeper({
                    summary: 'What it costs to author four hundred of these',
                    body: `<p class="turn-note">Four hundred pages. A writer-week buys about a dozen, so a cast is a season for a small room — against the hundreds of thousands of words of branch it replaces. Your bible already has most of a persona document in it. What changes is where it goes: today it becomes thirty thousand words of branch nobody walks, and here it stays a page. A cast gets dearer to imagine and far cheaper to cover.</p>`,
                })}
                <p class="turn-note turn-authored-foot"><em>The letter does not open on a debt</em> is a writer's constraint, typed on a Tuesday. At the counter, with this player in front of her, it costs her the letter. Nobody typed the second one — and your writer authors the half that decides it.</p>
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
                    <p class="turn-note"><strong>You write what she is allowed to do. You do not write what she says while doing it.</strong> <code>offer_item</code> and <code>refuse</code> are the two actions on the table; she takes the refusal, then gives the road anyway — in the line itself, nowhere in your tree. The vocabulary is yours and stays yours.</p>
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
    reasoningText: "My brother asked me to keep it sealed. This one asked after him when nobody else in town did — then swore to be back before the thaw, and was not. I kept the lamp lit anyway. That earns the road. It does not earn the letter.",
    responseText: "He went north. That is all I can give you tonight.",
  },
  action: {
    type: 'refuse',
    payload: { item: 'brothers_letter' },
  },
  metadata: { valid: true },
}</code></pre>
                    <p class="turn-note">She has <code>offer_item</code> on the table and does not take it.</p>
                    ${Deeper({
                        summary: 'How your QA files a bug against a line nobody wrote',
                        body: `<p class="turn-note">They attach the payload, not a video. Every judgment is a function of four things your build already holds — the persona document, the memory excerpt, the world context and the legal action set — against one recorded model and runtime build. QA files the payload and it replays. A tester who cannot reproduce a line cannot file it, which is why the turn is a record before it is a performance. Release pinning holds that build across your ship window, so the record stays stable through certification.</p>`,
                    })}
                    ${Deeper({
                        summary: 'What <code>valid: true</code> does and does not cover',
                        body: `<p class="turn-note">It means the turn met its deadline and passed its checks. It does not mean every word she says is true about your world — that limit is printed below, on our own demo.</p>`,
                    })}
                    <p class="turn-note"><strong>Look at <em>He went north.</em></strong> The refusal is guaranteed — your state never moved. The road is prose, and nothing checked it. If act two moved her brother south, it is in the player's quest log by morning. Grounding her prose in your world is the next term to open.</p>
                    <p class="turn-note"><strong>One judgment, one call.</strong> Not a chain of calls per line, not a re-roll to get a parseable action.</p>
                    ${Deeper({
                        summary: 'What happens when a turn misses its deadline',
                        body: `<p class="turn-note">It authorizes nothing. Nothing is authorized — no action, no memory write, no change to your state. The line the player hears in that moment is yours to author, and a turn that fails is a turn your game never hears from.</p>`,
                    })}
                </div>
            </div>
        </div>
    </section>
`;
