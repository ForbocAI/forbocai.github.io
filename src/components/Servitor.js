import { ChapterMark } from './Sigil.js';

import { Deeper } from './Deeper.js';

/**
 * The named model reveal.
 *
 * Servitor is the product. The Protocol gives it a lawful place inside an
 * authored world; SDKs are distribution; the game remains truth.
 */
export const Servitor = () => `
    <section id="servitor" class="chapter chapter-day servitor">
        <div class="container">
            <div class="chapter-spread">
            <figure class="maeve-scene servitor-scene">
                    <img src="maeve-letter-scene.webp" alt="Maeve offers her brother's sealed letter across the Lanternbough counter during a storm." width="1672" height="941" loading="lazy">
                    <figcaption>Maeve does not search for the nearest line. She chooses who receives the letter.</figcaption>
            </figure>

            <header class="chapter-head">
                ${ChapterMark({ rune: 'ᛗ' })}
                <div>
                    <h2>Meet The ForbocAI NPC LM Servitor<span class="tm">™</span></h2>
                    ${Deeper({
                        summary: 'What is actually trained in',
                        body: `<p>Not <em>which</em> person she is — you still hand us your character on every turn, and the cast is yours and stays yours. What is trained in is <em>how</em> a person is held: one character judgment carrying identity, evidence, motive, reasoning, dialogue and structured intent through the same decision.</p>`,
                    })}
                </div>
            </header>

            <div class="chapter-body servitor-intelligence">
                    <p class="chapter-lead"><strong>Servitor™ is not a general model wearing a character prompt.</strong> A general model performs itself through a persona, which is why a cast of a hundred sounds like one actor doing accents. Four hundred of your people can share this model without sharing a personality.</p>
                    <p class="kicker">The cognitive motion of a living character</p>
                    <h3>What she does with what she remembers</h3>
                    <p>Dialogue is what the player hears. Servitor™ carries authored identity through evidence, motive and consequence to decide what the character means — and what she may propose next.</p>
                    <ol class="servitor-cognition" aria-label="Character Intelligence sequence">
                        <li><span>Identity</span> <strong>Who am I?</strong></li>
                        <li><span>Memory</span> <strong>What happened?</strong></li>
                        <li><span>Motive</span> <strong>What matters?</strong></li>
                        <li><span>Reasoning</span> <strong>What follows?</strong></li>
                        <li><span>Judgment</span> <strong>Where do I stand?</strong></li>
                        <li><span>Action</span> <strong>What may I propose?</strong></li>
                    </ol>
            </div>
            </div>

            <div class="character-intelligence-grid">
                <article>
                    <span>Consequence</span>
                    <h3>Reasons beyond the next line</h3>
                    <p>Servitor™ is trained to read what follows from a choice before the world commits it.</p>
                </article>
                <article>
                    <span>Conflict</span>
                    <h3>Chooses when duties collide</h3>
                    <p>Authored values, loyalties and relationships remain active when there is no clean answer.</p>
                </article>
                <article>
                    <span>Evidence</span>
                    <h3>Changes for a reason</h3>
                    <p>New facts can change the judgment. Goodwill alone does not: she can refuse a player who earned a yes, when a loyalty she was authored with outweighs the debt in front of her.</p>
                </article>
                <article>
                    <span>Intent</span>
                    <h3>Returns more than words</h3>
                    <p>Dialogue, rationale and structured action arrive from the same attempt for the game to inspect.</p>
                </article>
            </div>

            <div class="model-hierarchy" aria-label="ForbocAI product hierarchy">
                <p><span>Intelligence</span> <strong>Servitor<span class="tm">™</span> creates a character's next possibility.</strong></p>
                <p><span>Law</span> <strong>The Protocol makes it native to the world.</strong></p>
                <p><span>Authorship</span> <strong>Your game turns choice into history and play.</strong></p>
            </div>

            <div class="hero-buttons">
                <a href="#turn" class="btn btn-primary" data-link>See one judgment</a>
                <a href="https://docs.forboc.ai" class="text-link" target="_blank" rel="noopener noreferrer">Read the developer docs</a>
            </div>
        </div>
    </section>
`;
