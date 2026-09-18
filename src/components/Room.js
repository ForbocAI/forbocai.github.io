import { Deeper } from './Deeper.js';
import { Sigil, ChapterMark } from './Sigil.js';

/**
 * The room.
 *
 * The turn chapter proves one character deciding. This one proves the thing
 * branch writing cannot buy at any price: a second authored person with
 * standing, responding to a judgment nobody wrote, in front of a player.
 * It was the back half of #turn, which had grown to 6.4 screens — a third of
 * the page under a single heading, which is a wall rather than a chapter.
 */
export const Room = () => {
    return `
    <section id="room" class="chapter turn-band">
        <div class="container">
            <header class="chapter-head">
                ${ChapterMark({ rune: 'ᛖ' })}
                <div>
                    <h2>The rest of the room was listening</h2>
                    <p class="chapter-lead">A tree gives you a conversation. A world gives you everyone who can hear it.</p>
                </div>
            </header>

            <section class="turn-room" aria-labelledby="turn-room-title">
                <div class="turn-counterfactual-head">
                    <p class="turn-label">One night, one counter, three judgments</p>
                    <h3 id="turn-room-title">Nobody wrote a branch for what the miner does while she refuses.</h3>
                    <p>Brannoc is at the end of the counter. The player covered his room in the autumn when he came up short, and he has never mentioned it. He is close enough to hear Maeve say no.</p>
                </div>
                ${Deeper({
                    summary: 'The document your writer handed us, and what he did about it',
                    body: `<div class="turn-counterfactual-pair">
                    <article>
                        <span class="sigil-pair">${Sigil({ name: 'Brannoc, miner, Lanternbough', size: 40, tone: 'creek' })} What your writer handed us</span>
                        <pre class="turn-code"><code>const brannoc = {
  traits: ['Owes more than he can say out loud',
           'Slow to speak in a room he does not own'],
  goals: ['Clear the debt before the thaw'],
  relationships: [
    { who: 'the player', bond: 'Covered his room in the autumn. Never mentioned since.' },
    { who: 'Maeve', bond: 'Her lodger two winters. Her word runs this room.' },
  ],
  speakingStyle: ['Says the smallest true thing, then stops.'],
  constraints: ['Will not contradict Maeve in her own house.'],
}</code></pre>
                    </article>
                    <article>
                        <span>What he did about it — your game fired this call, not us</span>
                        <pre class="turn-code"><code>// legalActions: ['speak_to', 'stay_silent']
{
  dialogue: "Maeve. It was the two of them that covered my room in the autumn.",
  reasoningText: "She is not wrong about the letter, and I will not say she is. But she is weighing what this one is owed without knowing the half of it. The half she is missing is mine to give her.",
  action: { type: 'speak_to', payload: { target: 'maeve' } },
}</code></pre>
                    </article>
                </div>`,
                })}

                <div class="turn-answer">
                    <p class="turn-label">And then she answers her own lodger</p>
                    ${Deeper({
                        summary: 'The call she answered with',
                        body: `<pre class="turn-code"><code>// legalActions: ['offer_item', 'refuse'] — the same two, again
{
  dialogue: "Then I owe them a bed, not a letter. The corner room is yours tonight. Do not ask me for the drawer again.",
  reasoningText: "Brannoc would not say that in my house unless it were true, and he would not say it at all unless he thought I was being hard. I am not. The letter is still my brother's and that has not moved. But what this one is owed just got larger than I knew, and I have a room.",
  action: { type: 'offer_item', payload: { item: 'corner_room_key' } },
}</code></pre>`,
                    })}
                    <p class="turn-note"><strong>Nothing in that call established that the corner room exists, is empty, or is hers to give.</strong> She reasons from the evidence you send, and evidence you do not send is evidence she can reach past. Your validation rules refuse the key or they do not. Clause twelve, again.</p>
                    <p class="turn-note"><strong>She held.</strong> Leaned on publicly, in her own house, by a lodger whose word carries — and the letter is still sealed, because her writer typed <em>the letter does not open on a debt</em> and that is not a thing the room can talk her out of. What moved is what she paid instead. She found the debt somewhere else and settled it out of the inn.</p>
                </div>

                <p class="turn-note turn-counterfactual-foot"><strong>He never contradicts her.</strong> His constraint holds. He changes what is true in the room instead, and now she is weighing a debt she did not know about, in front of a player who never asked him to speak. <strong>There is no tree in which that scene exists.</strong> Two people in a room is not two branches; it is every pair, and three is every triple. That is why party banter gets cut in month thirty of every game ever made — the one thing branch writing does not make expensive so much as impossible.</p>
            </section>
                ${Deeper({
                    summary: 'What this costs a narrative team: localisation, voice, and what a refusal becomes',
                    body: `<p class="turn-consequence"><strong>Think about the arc your narrative director cut this cycle.</strong> Not for quality — for the localization lock. If a character could hold the loyalty your writers authored and still surprise you in hour forty, what would you have put back in?</p>

            <p class="turn-consequence"><strong>Her judgment was never a string, so it was never on the string table, and the lock that cut your arc has nothing to hold her against.</strong> That is the freedom and it is also the problem. She reaches the decision once and a decision is language-independent — but delivery is not: register, idiom, honorifics, and what a refusal sounds like in a language where refusing is done sideways. Shipping her in nine languages means trusting her to be the same person in all nine and native in each. That is clause twenty-five, the hardest line in the Standard.</p>

            <p class="turn-consequence"><strong>A line nobody wrote is a line nobody recorded, so she starts where a cast is largest and least served — the hundreds your budget was always going to subtitle, who have been reading the same six barks since launch.</strong> Your performed principals stay performed, exactly as written and recorded. Where a studio wants her reaching voice, that is a contract between the studio and the performer, and the standard we hold is the one we would want on the other side of it: a voice is a person's work, it is used with their consent, and it is paid for.</p>

            <p class="turn-consequence"><strong>A refusal becomes the next piece of evidence too.</strong> The letter stays sealed, the world remembers that it was asked for, and Maeve enters the next encounter as the person who kept her brother's confidence — and who knows this player asked after him anyway.</p>`,
                })}

            <p class="turn-refusal"><strong>The magic remains authored.</strong> Servitor™ creates the possibility; the Protocol makes it legible to the world; your game turns it into history.</p>
        </div>
    </section>
    `;
};
