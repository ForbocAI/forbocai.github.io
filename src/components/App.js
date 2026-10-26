import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Hero } from './home/Hero.js';
import { Showcase } from './home/Showcase.js';
import { Problem } from './home/Problem.js';
import { Platform } from './home/Platform.js';
import { Approach } from './home/Approach.js';
import { Vision } from './home/Vision.js';
import { Closing } from './home/Closing.js';
import { Company } from './company/Company.js';
import { DevelopersPage } from './developers/Page.js';
import { Scenes } from './Scenes.js';
import { Whitepaper } from './Whitepaper.js';
import { PitchDeck } from './PitchDeck.js';
import { selectCurrentPage } from '../domains/navigationSlice.js';

const Home = () => `
    ${Hero()}
    ${Showcase()}
    ${Problem()}
    ${Platform()}
    ${Approach()}
    ${Vision()}
    ${Closing()}
`;

const PAGES = {
    index: { render: Home, className: 'site-main page-home' },
    company: { render: Company, className: 'site-main page-company' },
    developers: { render: DevelopersPage, className: 'site-main page-developers' },
    whitepaper: { render: Whitepaper, className: 'site-main page-doc' },
    scenes: { render: Scenes, className: 'site-main theme-dark page-scenes' },
    pitch: { render: PitchDeck, className: 'page-inner' },
};

export const App = (state) => {
    const page = PAGES[selectCurrentPage(state)] ?? PAGES.index;

    return `
    <a class="skip-link" href="#main-content">Skip to content</a>

    ${Header(state)}

    <main id="main-content" class="${page.className}" tabindex="-1">
        ${page.render(state)}
    </main>

    ${Footer()}
    `;
};
