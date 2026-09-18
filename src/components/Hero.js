import { Sigil } from './Sigil.js';

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
                <p class="hero-potion"><strong>Dev born. Player grown. Yours to carry.</strong> Your writers author her. A player makes her specific. Then she belongs to them, and she can leave with them.</p>
                <div class="hero-buttons hero-buttons-lead">
                    <a href="mailto:hello@forboc.ai?subject=Bring%20one%20character%20to%20life" class="btn btn-primary">Send her tonight</a>
                    <a href="#turn" class="text-link" data-link>Watch one judgment</a>
                    <a href="https://docs.forboc.ai" class="text-link" target="_blank" rel="noopener noreferrer">Read the docs</a>
                </div>
            </div>

            <figure class="memory-panel">
                <img src="Lanternbough.png" class="memory-panel-art" alt="" aria-hidden="true" width="640" height="640">
                <figcaption class="memory-panel-head">
                    <span class="memory-who sigil-pair">
                        ${Sigil({ name: 'Maeve Ashlin, Lanternbough', size: 54, tone: 'honey' })}
                        <span>
                            <strong>Maeve Ashlin</strong>
                            <span class="memory-role">Innkeeper, Lanternbough</span>
                        </span>
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
                <p class="memory-weigh" style="--i:3">The weather is the safe answer. Her brother asked her to keep the letter sealed. This player is the only one who ever asked after him — and that is still not the same as being asked by her brother.</p>
                <p class="memory-foot" style="--i:4">Memory is the evidence. Judgment is the intelligence.</p>
            </figure>
        </div>
        <span class="drift" aria-hidden="true"><span class="drift-spore"></span><span class="drift-spore"></span><span class="drift-spore"></span></span>
    </section>
    `;
};
