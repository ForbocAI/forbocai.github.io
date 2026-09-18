/**
 * Hero Component
 *
 * The hero shows the product rather than an emblem: one Lanternbough character
 * and the record ForbocAI keeps for her. The lines write themselves once on
 * load and then hold still — the page's only motion that nobody asked for.
 */
export const Hero = () => {
    return `
    <section class="hero">
        <div class="container hero-grid">
            <div class="hero-copy">
                <p class="kicker">ForbocAI — the NPC language model company</p>
                <h1>The next great language model is a person in your game.</h1>
                <p class="hero-premise"><strong>Every other surface of a game came alive. The people did not.</strong> Worlds render weather you can feel and water that behaves, and then the person standing in them runs out of script the moment a player asks something nobody wrote. You already know which of your NPCs players quote back to you, and you already know it is not the one with the most lines. That is the last unfinished surface in the medium, and it is the one that decides what a player carries away. In the panel of what Servitor™ is weighing, Maeve turns three sessions of history into one decision.</p>
                <figure class="maeve-scene hero-maeve-glimpse">
                    <img src="maeve-letter-scene.webp" alt="Maeve offers her brother's sealed letter across the Lanternbough counter during a storm." width="1672" height="941">
                    <figcaption>The storm is the safe opening. Her brother's letter is the judgment.</figcaption>
                </figure>
                <p class="hero-lead"><strong>The ForbocAI NPC LM Servitor™ is the intelligence behind the living cast.</strong> It reads who she is, what she remembers, what she owes and what her world will allow — then reasons past the end of your script and decides as her. Not a line retrieved. A judgment made, in the moment, by someone.</p>
                <p class="hero-engines"><strong>The ForbocAI NPC Protocol is how that intelligence enters a world without being able to change your state.</strong> Servitor™ proposes; your game alone makes it real. She decides like a person and she cannot touch your world — that is the whole invention, and it is what turns an open-ended model into a cast you can ship.</p>
                <div class="hero-buttons">
                    <a href="mailto:hello@forboc.ai?subject=Bring%20one%20character%20to%20life" class="btn btn-primary">Bring one character to life</a>
                    <a href="https://docs.forboc.ai" class="text-link" target="_blank" rel="noopener noreferrer">Read the docs</a>
                </div>
            </div>

            <figure class="memory-panel">
                <img src="Lanternbough.png" class="memory-panel-art" alt="" aria-hidden="true" width="640" height="640">
                <figcaption class="memory-panel-head">
                    <span class="memory-who">
                        <strong>Maeve Ashlin</strong>
                        <span class="memory-role">Innkeeper, Lanternbough</span>
                    </span>
                    <span class="memory-mood">Warm toward you</span>
                </figcaption>
                <p class="memory-title">What Servitor™ is weighing</p>
                <ul class="memory-lines">
                    <li style="--i:0">
                        <span class="memory-when">Three sessions back</span> 
                        <span class="memory-what">You covered the miner's room when he came up short.</span>
                    </li>
                    <li style="--i:1">
                        <span class="memory-when">Two sessions back</span> 
                        <span class="memory-what">You asked after her brother. Nobody else in town had.</span>
                    </li>
                    <li style="--i:2">
                        <span class="memory-when">Last session</span> 
                        <span class="memory-what">You said you would come back before the thaw. You did not. She kept the lamp burning anyway.</span>
                    </li>
                </ul>
                <p class="memory-weigh" style="--i:3">The storm is the safe answer. Her brother asked her to keep the letter sealed. This player is the only one who ever asked after him—and that is still not the same as being asked by her brother.</p>
                <p class="memory-foot" style="--i:4">Memory is the evidence. Judgment is the intelligence.</p>
            </figure>
        </div>
    </section>
    `;
};
