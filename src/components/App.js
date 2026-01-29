/**
 * App Component
 * Assemble the application.
 */
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Hero } from './Hero.js';
import { Technology } from './Technology.js';
import { Vision } from './Vision.js';
import { Roadmap } from './Roadmap.js';
import { Investors } from './Investors.js';
import { Whitepaper } from './Whitepaper.js';
import { PitchDeck } from './PitchDeck.js';
import { selectCurrentPage } from '../domains/navigationSlice.js';

export const App = (state) => {
    const page = selectCurrentPage(state);

    const renderContent = () => {
        if (page === 'whitepaper') {
            return Whitepaper();
        }

        if (page === 'pitch') {
            return PitchDeck(state);
        }

        return `
            ${Hero()}
            
            <section id="technology" class="features">
                <div class="container">
                    ${Technology()}
                    ${Vision()}
                    ${Roadmap()}
                    ${Investors()}
                </div>
            </section>
        `;
    };

    return `
    <div class="tech-layer">
        <span class="diagnostic-label diagnostic-flicker" style="top: 2rem; right: 2rem; position: fixed;">ENV.STABLE // FORBOC.V1</span>
        <div class="tech-grid"></div>
        <div class="tech-markings">
            <div class="marking-tl"></div>
            <div class="marking-tr"></div>
            <div class="marking-bl"></div>
            <div class="marking-br"></div>
        </div>
        <div class="big-runic">ᚠᛟᚱᛒᛟᚲ</div> <!-- Forboc -->
        <div class="barcode-strip"></div>
    </div>

    ${Header(state)}

    <main>
        ${renderContent()}
    </main>

    ${Footer()}
    `;
};
