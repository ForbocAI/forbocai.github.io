import { Deeper } from './Deeper.js';
import { ChapterMark } from './Sigil.js';

/**
 * Mission Component
 *
 * The vision, sold the way a moonshot is sold: name the destination first, make
 * the stakes plain, then show the ladder — and let the credibility come from
 * labelling each rung honestly rather than from adjectives.
 *
 * The strategic spine is the Empty Vessel doctrine read as value innovation.
 * Every competitor is adding to the model: more lore, more persona, more
 * parameters. ForbocAI took the self out. That is the blue-ocean move, it is
 * already true, and it is the one sentence a competitor cannot copy without
 * rebuilding from nothing.
 *
 * Rung statuses are bound to classified's brochure claim contracts. "Shipped"
 * means deployed; anything else says so plainly, because a ladder you can check
 * is the only reason to believe the top of it.
 */

export const Mission = () => {
    return `
    <section id="mission" class="chapter chapter-day mission">
        <div class="container">
            <div class="chapter-spread">
            <header class="chapter-head">
                ${ChapterMark({ rune: 'ᛟ' })}
                <div>
                    <h2>Someone is home in the world you built</h2>
                    <div class="mission-turn">
                        <p class="mission-turn-label">The category: Character Intelligence</p>
                        ${Deeper({
                            summary: 'Why a general model cannot do this, and what it costs a studio today',
                            body: `<p><strong>Servitor™ is how open-ended intelligence arrives as your person instead of as itself.</strong> That intelligence is a spring already running into every world; the Protocol is the channel it runs through.</p>
                <p><strong>Games render impossible worlds and let players cross every horizon.</strong> The people inside them are the last surface that still ends at the edge of a branch — one at a time, and never with each other. A party that argues on the road, a warband that turns on its captain, a council that cannot agree in front of you: none of that is written, because none of it can be.</p>
                <p>Branch content is the most expensive writing in the building. Hundreds of thousands of words, written, revised, localized, often performed — and most of it is never seen once. The character they quote afterwards is rarely the one who got the budget. The tree costs more with every line of depth and never once gets taller.</p>
                <p><strong>Here is what having no self actually means.</strong> A general model arrives with a homeland it defends — its own voice, its own agreeableness, its own opinions — and wears your character over the top. It always finds its way back to yes. That is not a prompting failure; it is disposition, and it is in the weights. Servitor™ has no homeland. The self goes quiet, and someone else comes through.</p>
                <p><strong>This is the one market on earth where the model having a self is the defect.</strong> Every improvement our competitors ship makes their problem worse: a better general model is a stronger self to talk over. There is no version of their roadmap that arrives where we are standing.</p>
                <p><strong>A chatbot answers. A character chooses.</strong> Servitor™ reads identity, memory, motive and world evidence to make the judgment that belongs to this person. The Protocol gives that judgment a lawful place inside your game.</p>
                <p class="mission-turn-punch">A character may reason beyond the script. Only her world can make the consequence real.</p>`,
                        })}
                    </div>
                </div>
            </header>

            <div class="chapter-body">
                <p class="mission-opening"><strong>Every other surface of a game is alive. The people are not.</strong> Even the finest-written of them are portraits: beautiful, and never looking back at you.</p>
                <p class="mission-turn-line"><strong>Not anymore.</strong></p>
                <p class="mission-opening"><strong>Everyone else is making the model more itself. We take the self out.</strong> The ForbocAI NPC LM Servitor™ has no self to defend, so the people your writers authored are the ones who answer — reasoning past the end of your script and deciding as themselves. Not lines retrieved. Judgments made, in the moment, by someone.</p>
                <p class="mission-opening"><strong>The ForbocAI NPC Protocol is how they enter your world without being able to change it.</strong> They decide like people and cannot move your state. The model is the invention. The Protocol is why it can be handed to anyone at all.</p>

            <p class="mission-destination"><strong>Every company gets one destination. We are standing in ours: a world that keeps living after you walk out of the room.</strong> The innkeeper weighing her brother’s letter against her own heart. The miner carrying a debt nobody asked him to carry. The child deciding who they will become, and knowing they are deciding. Four hundred of them, each awake to their own life — and every one of them remembers you.</p>

            <p class="mission-felt"><strong>Full strength is a whole settlement, no two alike.</strong> A captain disobeys because her authored loyalty outweighed the order. A town receives you differently in spring for the winter you walked away from. Servitor™ supplies every one of those decisions; your faction system still rules what they cost.</p>
            <p class="mission-felt">The first cast that answers the question nobody wrote becomes the reference for a decade, in front of <a href="https://playerdriven.io/articles/the-global-games-market-in-2025-growth-shifts-and-what-comes-next" target="_blank" rel="noopener noreferrer">3.6&nbsp;billion players</a>. Every cast after it is measured against it, yours too.</p>
            </div>
            </div>
        </div>
    </section>
    `;
};
