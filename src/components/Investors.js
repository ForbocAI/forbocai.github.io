import { Deeper } from './Deeper.js';
import { ChapterMark } from './Sigil.js';


/** The final choice: test the character or fund the proof path. */
export const Investors = () => {
    return `
    <section id="investors" class="chapter chapter-night investors-section">
        <div class="lantern-glow" aria-hidden="true"></div>
        <div class="container">
            <div class="chapter-spread">
            <header class="chapter-head">
                ${ChapterMark({ rune: 'ᛞ' })}
                <div>
                    <h2>The layer every character thinks with</h2>
                    ${Deeper({
                        summary: 'What a studio gets if it trains its own instead',
                        body: `<p>A studio with a budget can fine-tune an open model on its own documents, and some do. What they get is that studio's cast, frozen at that studio's last training run, with a machine-learning team to staff forever — and a house voice that overfits to itself, which is a general model's homeland made smaller and harder to see from inside. We are the layer underneath every cast, improving for all of them at once.</p>`,
                    })}
                </div>
            </header>

            <div class="chapter-body investors-body">
                <p class="chapter-lead"><strong>Games are already filling with people who decide.</strong> Not branches that fire — people who keep a loyalty when it costs them, and refuse a player who earns a yes. Nobody scheduled it, and it waits on no one's roadmap. The only open question is who builds the layer they think with.</p>
                <p><strong>Studios run the experiment on every title without meaning to.</strong> The characters players quote back are never the ones with the most lines. Every studio proves the thesis before anyone pitches it.</p>
                <p>What has never existed is a way to get that character on purpose instead of by luck. The boundary is built and you can read it today. The model answers today.</p>
                <p><strong>Every studio wants characters who think.</strong> Wanting them is never the problem; having them is. An open-ended voice loose in your world with your character's name on it is not a feature, it is an incident.</p>
                <p><strong>So neither half ships without the other.</strong> A model that reasons like a person and cannot be stopped from moving your state is a liability, and a boundary with nothing behind it is a config file. Servitor™ needs the Protocol's law to enter a world at all. That is why they are one thing, and why the thing is served rather than shipped loose.</p>
                <p><strong>The moat is not the boundary.</strong> It is the model, and what is in it cannot be prompted back out. <strong>Selflessness is weights, not a prompt.</strong></p>
                <p>We write this category’s measure. Every rival is held to it, as we are. Whoever writes a category's measurement writes its purchasing criteria.</p>

                <p class="investors-takeaway"><strong>No budget line can order the character players quote.</strong> She makes a decision nobody wrote.</p>
                ${Deeper({
                    summary: 'The position, argued',
                    body: `<p class="investors-takeaway">A handful of studios come through this door first. After them, it is a hallway everyone walks. In here, a character refuses a player for a reason she can name and hands you the reason she holds. Out there, it is still a tree you pay to build whole so one player can walk one path through it. You are reading this from one side of that.</p>
<p class="investors-takeaway">First worlds are being chosen now. Whoever is inside when the first cast ships holds a position in the only market that has a standard, beside the company that writes it.</p>`,
                })}
                <p class="investors-takeaway">Send us one character. We take her to the moment your tree ends. Eighteen months on, a player forgets the scene and still remembers her.</p>
                <p class="investors-takeaway"><strong>The seed round is open.</strong> It takes the first partner worlds live and brings Souls and Ghost into play.</p>
            </div>
            </div>

            <figure class="investor-portal">
                <span class="portal-window" aria-hidden="true">
                    <img src="Lanternbough.png" alt="" width="640" height="640">
                </span>
                <figcaption>Inside the living world</figcaption>
            </figure>

            <div class="hero-buttons">
                <a href="mailto:hello@forboc.ai?subject=Investor%20introduction" class="btn btn-primary">Investors, come inside</a>
                <a href="mailto:hello@forboc.ai?subject=Bring%20the%20character%20players%20remember" class="btn btn-ghost">Bring the character players remember</a>
            </div>
        </div>
    </section>
    `;
};
