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
                    <p class="chapter-lead"><strong>The model category beneath the world's most consequential creative medium is being settled now, from inside it.</strong> The casts are being authored, the law they enter through is written, and every gate that authority still waits on is published rather than implied.</p>
                </div>
            </header>

            <div class="investors-body">
                <p>The studios that define the next era will not ship the most generated dialogue. They will ship the first casts players believe are alive. ForbocAI is putting the model, the Protocol and the commercial standard beneath that shift. It is being defined now, by the people already working inside it.</p>
                <figure class="investor-portal">
                    <span class="portal-window" aria-hidden="true">
                        <img src="Lanternbough.png" alt="" width="640" height="640">
                    </span>
                    <figcaption>Inside the living world</figcaption>
                </figure>
            </div>

            <p class="investors-takeaway">Those casts are being authored now. Servitor™ is their intelligence. The ForbocAI NPC Protocol is how they enter the world. Character Intelligence is the new creative medium.</p>

            <div class="hero-buttons">
                <a href="mailto:hello@forboc.ai?subject=Bring%20the%20character%20players%20will%20remember" class="btn btn-primary">Bring the character players will remember</a>
                <a href="#pitch/1" class="btn btn-ghost" data-link>Enter the category</a>
            </div>
        </div>
    </section>
    `;
};
