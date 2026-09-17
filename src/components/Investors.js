import { Lantern } from './Lantern.js';

/**
 * Investors Component
 *
 * The lit window at the end of the path. The light comes from the section
 * itself rather than from a bordered card: a fourth container treatment was
 * pushing the section mark 127px off the rail every other section sits on.
 */
export const Investors = () => {
    return `
    <section id="investors" class="chapter chapter-night investors-section">
        <div class="lantern-glow" aria-hidden="true"></div>
        ${Lantern({ className: "lantern-investors", size: 1.5, tone: "bright" })}
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛞ</span>
                <div>
                    <h2>Investors</h2>
                    <p class="chapter-lead">ForbocAI, Inc. is a Delaware C corporation raising a seed round to put persistent, rule-checked character AI in front of every studio building a world worth returning to.</p>
                </div>
            </header>

            <div class="investors-body">
                <p>The character layer is shipping and paid from day one. The Soul economy is the second act: the same stack that makes a character feel alive gives her somewhere to go when the credits roll.</p>
                <p>We are talking with people who build at the seam where games, AI, and ownership meet — and who would rather back infrastructure a studio depends on than a demo that only impresses in a clip.</p>
            </div>

            <div class="hero-buttons">
                <a href="#pitch/1" class="btn btn-primary" data-link>Open the seed deck</a>
                <a href="mailto:hello@forboc.ai" class="btn btn-ghost">hello@forboc.ai</a>
            </div>
        </div>
    </section>
    `;
};
