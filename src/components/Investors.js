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
                    <p class="chapter-lead"><strong>The model category beneath the world's most consequential creative medium is being settled now, from inside it.</strong> The casts are being authored, the law they enter through is written, and the thirteen gates that authority still waits on are published rather than implied.</p>
                </div>
            </header>

            <div class="investors-body">
                <p>You ran the experiment yourself, on your own titles, without meaning to: the characters players quote back to you were never the ones with the most lines. You proved the thesis before anyone pitched it to you. What did not exist until now was a model that can produce that character on demand instead of by luck, a boundary that lets her decide without letting her rewrite your world, and a price in ordinary money. Those exist. What is still owed is a list, and the list is public.</p>
                <figure class="investor-portal">
                    <span class="portal-window" aria-hidden="true">
                        <img src="Lanternbough.png" alt="" width="640" height="640">
                    </span>
                    <figcaption>Inside the living world</figcaption>
                </figure>
            </div>

            <p class="investors-takeaway">Servitor™ is the intelligence. The ForbocAI NPC Protocol is the law she enters through. Character Intelligence is the medium the two of them make possible—and the casts are already being authored. The only open question on this page is whose.</p>

            <div class="hero-buttons">
                <a href="mailto:hello@forboc.ai?subject=Bring%20the%20character%20players%20will%20remember" class="btn btn-primary">Bring the character players will remember</a>
                <a href="#pitch/1" class="btn btn-ghost" data-link>See the vision deck</a>
            </div>
        </div>
    </section>
    `;
};
