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
                <h1>The next great language model is already inside the game.</h1>
                <p class="hero-premise"><strong>Every other surface of a game came alive. The people did not.</strong> Worlds render weather you can feel and physics you can trust, and then the person standing in them runs out of script the moment a player asks something nobody wrote. That is the last unfinished surface in the most consequential creative medium there is—and it is the one players actually remember. Right now, in this scene, Maeve weighs what happened and decides as herself.</p>
                <figure class="maeve-scene hero-maeve-glimpse">
                    <img src="maeve-letter-scene.webp" alt="Maeve offers her brother's sealed letter across the Lanternbough counter during a storm." width="1672" height="941">
                    <figcaption>The storm is the safe opening. Her brother's letter is the judgment.</figcaption>
                </figure>
                <p class="hero-lead"><strong>The ForbocAI NPC LM Servitor™ is the intelligence behind the living cast.</strong> Servitor™ reads authored identity, memory, motive, relationships and world evidence; reasons through the unforeseen; and makes the character judgment.</p>
                <p class="hero-engines"><strong>The ForbocAI NPC Protocol gives that intelligence a lawful place inside the world.</strong> Servitor™ proposes. Your game alone makes the choice real.</p>
                <div class="hero-buttons">
                    <a href="mailto:hello@forboc.ai?subject=Bring%20one%20character%20to%20life" class="btn btn-primary">Bring one character to life</a>
                    <a href="#pitch/1" class="text-link" data-link>Enter the category</a>
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
                        <span class="memory-what">You left ahead of the storm. She kept the lamp burning anyway.</span>
                    </li>
                </ul>
                <p class="memory-weigh" style="--i:3">The storm is safe. Her brother asked her to keep the letter sealed. This player is the only one who ever asked after him—and that is still not the same as being asked by her brother.</p>
                <p class="memory-foot" style="--i:4">Memory is the evidence. Judgment is the intelligence.</p>
            </figure>
        </div>
    </section>
    `;
};
