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
        <div class="hero-horizon" aria-hidden="true"></div>
        <div class="container hero-grid">
            <div class="hero-copy">
                <p class="kicker">ForbocAI — the NPC language model company</p>
                <h1>The next great language model is the characters in your game.</h1>
                <p class="hero-potion"><strong><span class="beat">Dev born. Player grown.</span> <span class="beat">Yours to carry.</span></strong> <span class="hero-gloss">Your writers author them. Players make them specific — a different version of the same cast in every save. Then who they became together belongs to the player, and leaves with them.</span></p>
                <div class="hero-buttons hero-buttons-lead">
                    <a href="mailto:hello@forboc.ai?subject=Bring%20one%20character%20to%20life" class="btn btn-primary">Bring one character to life</a>
                    <span class="row-break" aria-hidden="true"></span>
                    <a href="#turn" class="text-link" data-link>See one judgment</a>
                    <a href="https://docs.forboc.ai" class="text-link" target="_blank" rel="noopener noreferrer">Read the docs</a>
                </div>
                <p class="hero-ground">The companies that own a layer of language intelligence are valued <a href="https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/" target="_blank" rel="noopener noreferrer">near a trillion dollars</a>. Character intelligence is the layer beneath every cast, and this is its ground floor.</p>
            </div>

            <div class="hero-vista" aria-hidden="true"></div>

            <div class="hero-side">
            <figure class="memory-panel">
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
                        <span class="memory-what">You sat with the miner the night he came up short.</span>
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
            <dl class="hero-figures">
                <div><dt><a href="https://www.cnbc.com/2024/08/02/ex-google-engineers-from-characterai-re-join-company-with-new-ai-partnership-.html" target="_blank" rel="noopener noreferrer">$2.7B</a></dt><dd>paid to license one company’s character technology</dd></div>
                <div><dt><a href="https://www.prnewswire.com/news-releases/inworld-ai-99-of-gamers-are-excited-by-the-potential-of-smart-npcs-powered-by-advanced-artificial-intelligence-301747635.html" target="_blank" rel="noopener noreferrer">81%</a></dt><dd>of players would pay more for characters like these</dd></div>
                <div><dt><a href="https://playerdriven.io/articles/the-global-games-market-in-2025-growth-shifts-and-what-comes-next" target="_blank" rel="noopener noreferrer">3.6B</a></dt><dd>players in the worlds they enter</dd></div>
            </dl>
            </div>
        </div>
    </section>
    `;
};
