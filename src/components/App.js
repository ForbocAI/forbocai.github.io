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
    const isHomePage = page !== 'whitepaper' && page !== 'pitch';

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
    <a class="skip-link" href="#main-content">Skip to content</a>

    <div class="tech-layer ${isHomePage ? 'tech-layer-home' : ''}" aria-hidden="true">
        ${isHomePage ? `
        <span class="diagnostic-label canopy-label" aria-hidden="true">ᚠ ᛟ ᚱ ᛒ ᛟ ᚲ ᛫ ᛚ ᚨ ᚾ ᛏ ᛖ ᚱ ᚾ ᛫ ᛋ ᛟ ᚢ ᛚ</span>
        <div class="lantern-motes" aria-hidden="true"></div>
        <div class="rune-garland rune-garland-top" aria-hidden="true">ᚠ ᛫ ᛚ ᛫ ᚨ ᛫ ᚾ ᛫ ᛏ ᛫ ᛖ ᛫ ᚱ ᛫ ᚾ ᛫ ᚺ ᛖ ᚨ ᚱ ᛏ ᚺ</div>
        <div class="rune-garland rune-garland-left" aria-hidden="true">ᛗ ᛖ ᛗ ᛟ ᚱ ᛁ ᛫ ᛒ ᛚ ᛟ ᛟ ᛗ</div>
        <div class="rune-garland rune-garland-right" aria-hidden="true">ᛋ ᛟ ᚢ ᛚ ᛫ ᚷ ᚨ ᚱ ᛞ ᛖ ᚾ</div>
        <div class="big-runic" aria-hidden="true">ᚠᛟᚱᛒᛟᚲ</div>
        <div class="rune-ribbon" aria-hidden="true">ᚹ ᚨ ᚱ ᛗ ᛫ ᚹ ᛟ ᚱ ᛚ ᛞ ᛋ ᛫ ᛚ ᛁ ᚢ ᛁ ᚾ ᚷ ᛫ ᛋ ᛟ ᚢ ᛚ ᛋ</div>
        ` : `
        <div class="big-runic" aria-hidden="true">ᚠᛟᚱᛒᛟᚲ</div>
        `}
    </div>

    ${Header(state)}

    <main id="main-content" tabindex="-1">
        ${renderContent()}
    </main>

    ${Footer()}
    `;
};
