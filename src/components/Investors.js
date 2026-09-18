import { Lantern } from './Lantern.js';

/** The final choice: test the character or fund the proof path. */
export const Investors = () => {
    return `
    <section id="investors" class="chapter chapter-night investors-section">
        <div class="lantern-glow" aria-hidden="true"></div>
        ${Lantern({ className: "lantern-investors", size: 1.5, tone: "bright" })}
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛞ</span>
                <div>
                    <h2>The category is already inhabited</h2>
                    <p class="chapter-lead"><strong>This is not a proposal for a world that might exist.</strong> Servitor™ is reasoning inside one right now. The Protocol is the law she enters it through. The thirteen gates between here and production authority are numbered and public, because a category being settled from the inside can afford to publish its own itinerary. You are reading it from the outside.</p>
                </div>
            </header>

            <div class="investors-body">
                <p>You ran the experiment yourself, on your own titles, without meaning to: the characters players quote back to you were never the ones with the most lines. You proved the thesis before anyone pitched it to you. What has never existed is a way to get that character on purpose instead of by luck. Three things have to be true at once: a model trained to hold an authored person rather than its own, a boundary that lets her decide without letting her rewrite your world, and a way to buy it by the judgment. The boundary is built and you can read it today. The model exists and is reasoning right now; gate thirteen is where its persona-hold becomes a public number. The price is being signed into place at gate four. That is the whole position, and the rest of the itinerary is published in the same voice.</p>
                <figure class="investor-portal">
                    <span class="portal-window" aria-hidden="true">
                        <img src="Lanternbough.png" alt="" width="640" height="640">
                    </span>
                    <figcaption>Inside the living world</figcaption>
                </figure>
            </div>

            <p class="investors-takeaway">Servitor™ is the intelligence. The ForbocAI NPC Protocol is the law she enters through. Together they are the medium, and the first casts are being authored in it now. The only question left on this page is whose.</p>

            <div class="hero-buttons">
                <a href="mailto:hello@forboc.ai?subject=Bring%20the%20character%20players%20will%20remember" class="btn btn-primary">Bring the character players will remember</a>
                <a href="#pitch/1" class="btn btn-ghost" data-link>See the vision deck</a>
            </div>
        </div>
    </section>
    `;
};
