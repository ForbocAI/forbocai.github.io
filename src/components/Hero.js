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
                <p class="kicker">AI infrastructure for game NPCs</p>
                <h1>Characters who decide.</h1>
                <p class="hero-premise">You can still name a character from a game you finished five years ago. She could not name you the second time you walked through her door.</p>
                <p class="hero-lead">We build the character layer game studios plug in. Your NPCs weigh a situation, hold a position, change their minds on evidence and act — all of it inside the rules you wrote. Memory is the floor they reason from. The product is what they do with it.</p>
                <p class="hero-engines">Shipping today for <strong>TypeScript</strong>, in Node and the browser, and for <strong>Unreal&nbsp;Engine&nbsp;5</strong>. Unity is an integration scaffold rather than a shipped binding — if that is your engine, the honest answer is not yet.</p>
                <div class="hero-buttons">
                    <a href="https://docs.forboc.ai" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Read the developer docs</a>
                    <a href="#turn" class="text-link" data-link>See a turn, end to end</a>
                </div>
                <p class="hero-try">Or skip the docs for now. No engine code, one command, three minutes once your key lands — we cut them by hand, same day, until the portal ships: <code>forbocai npc chat maeve --text "her brother"</code></p>
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
                <p class="memory-title">What she is weighing</p>
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
                <p class="memory-weigh" style="--i:3">She could open with the storm. It is the safer thing to say, and she has said it to everyone else tonight.</p>
                <p class="memory-foot" style="--i:4">So tonight she opens with the brother. That is the judgment, not the recall.</p>
            </figure>
        </div>
    </section>
    `;
};
