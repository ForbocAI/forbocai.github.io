export const Hero = () => `
    <section class="hero-stage" aria-labelledby="hero-title">
        <div class="wrap hero-grid">
            <div class="hero-copy">
                <p class="eyebrow">AI infrastructure for interactive worlds</p>
                <h1 id="hero-title" class="display hero-title">Characters that do more than <span>talk.</span></h1>
                <p class="hero-line">Game characters should respond to what happens in the world — not just follow dialogue written in advance.</p>
                <p class="hero-line hero-line-sub">Powered by Servitor™, ForbocAI gives game characters the ability to interpret game context, respond to player actions, and propose what to do next. Your game stays in control of the world.</p>
                <div class="actions">
                    <a href="#product" class="button button-primary">See the product in action <span aria-hidden="true">→</span></a>
                    <a href="#company" class="button button-secondary">For investors <span aria-hidden="true">→</span></a>
                </div>
            </div>

            <figure class="hero-card theme-dark" aria-label="One character turn">
                <p class="hero-card-who"><strong>Brannoc</strong> A miner who owes you a favour</p>
                <div class="hero-card-step">
                    <span>Your game sends</span>
                    <p>The innkeeper is refusing you a room. Last autumn, you covered Brannoc’s rent.</p>
                    <p class="hero-card-actions">Allowed actions <code>speak_up</code> <code>stay_silent</code></p>
                </div>
                <div class="hero-card-step">
                    <span>ForbocAI returns dialogue and one proposed action</span>
                    <p class="hero-card-line">“They covered my rent last autumn. Hear them out.”</p>
                    <p class="hero-card-action">Proposed action <strong>speak_up</strong></p>
                </div>
                <div class="hero-card-step">
                    <span>Your game decides</span>
                    <p>Its rules allow <code>speak_up</code>, so it plays the line. What the innkeeper does next is the next turn.</p>
                </div>
                <figcaption>Illustrative scene from Lanternbough, a ForbocAI test world.</figcaption>
            </figure>
        </div>
    </section>
`;
