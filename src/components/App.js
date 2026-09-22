/**
 * App Component
 * Assemble the application.
 *
 * The home page descends from day into night: the hero and the capability
 * ledger sit on parchment, and everything from the Soul Garden onward sits on
 * deep moss so the lantern light in the brand finally has something to light.
 */
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Sprites } from './Sprites.js';
import { Hero } from './Hero.js';
import { Mission } from './Mission.js';
import { Servitor } from './Servitor.js';
import { Technology } from './Technology.js';
import { Turn } from './Turn.js';
import { RoomTeaser } from './Room.js';
import { Scenes } from './Scenes.js';
import { Roadmap } from './Roadmap.js';
import { Vision } from './Vision.js';
import { Investors } from './Investors.js';
import { Whitepaper } from './Whitepaper.js';
import { PitchDeck } from './PitchDeck.js';
import { selectCurrentPage } from '../domains/navigationSlice.js';

// Ten motes spread down the night half. They live inside .nightfall so they sit
// above its ground and below its prose. As a fixed layer they could only do one
// of two wrong things: hide under the opaque night background, or land on top
// of the glyphs.
const fly = ({ left, top, size, glow, dur, delay, dx, dy }) =>
    `<div class="firefly" style="left:${left};top:${top};--size:${size}px;--glow:${glow}px;--dur:${dur}s;--delay:${delay}s;--dx:${dx}px;--dy:${dy}px"></div>`;

const MOTES = [
    { left: '6%', top: '12%', size: 4, glow: 10, dur: 15, delay: 0, dx: 14, dy: -90 },
    { left: '22%', top: '26%', size: 6, glow: 16, dur: 18, delay: 2, dx: -10, dy: -120 },
    { left: '47%', top: '9%', size: 3, glow: 8, dur: 11, delay: 4, dx: 22, dy: -70 },
    { left: '63%', top: '34%', size: 5, glow: 13, dur: 16, delay: 1, dx: -18, dy: -110 },
    { left: '81%', top: '19%', size: 4, glow: 11, dur: 13, delay: 6, dx: 12, dy: -85 },
    { left: '12%', top: '52%', size: 3, glow: 8, dur: 20, delay: 3, dx: -8, dy: -75 },
    { left: '88%', top: '61%', size: 5, glow: 14, dur: 15, delay: 5, dx: -20, dy: -100 },
    { left: '34%', top: '71%', size: 4, glow: 10, dur: 17, delay: 7, dx: 18, dy: -80 },
    { left: '70%', top: '84%', size: 3, glow: 9, dur: 12, delay: 2, dx: -14, dy: -65 },
    { left: '19%', top: '90%', size: 5, glow: 12, dur: 19, delay: 8, dx: 16, dy: -95 },
];

const Fireflies = () => `
    <div class="firefly-field" aria-hidden="true">
        ${MOTES.map(fly).join('\n        ')}
    </div>
`;

export const App = (state) => {
    const page = selectCurrentPage(state);
    // Exact, not a list of exceptions. The exception list was written when
    // there were two inner pages, and /#scenes silently became a third one
    // that still rendered as page-home — which is why the router could not
    // see a route change when a reader clicked into it.
    const isHomePage = page === 'index';

    const renderContent = () => {
        if (page === 'whitepaper') {
            return Whitepaper();
        }

        if (page === 'scenes') {
            return Scenes();
        }

        if (page === 'pitch') {
            return PitchDeck(state);
        }

        return `
            <div class="daylight">
                ${Hero()}
                ${Mission()}
                ${Servitor()}
                ${Technology()}
            </div>
            <div class="nightfall">
                <div class="nightfall-edge" aria-hidden="true"></div>
                ${Fireflies()}
                ${Turn()}
                ${RoomTeaser()}
                ${Roadmap()}
                ${Vision()}
                ${Investors()}
            </div>
        `;
    };

    return `
    <a class="skip-link" href="#main-content">Skip to content</a>

    ${Header(state)}

    <main id="main-content" class="${isHomePage ? 'page-home' : 'page-inner'}${page === 'scenes' ? ' page-night' : ''}" tabindex="-1">
        ${renderContent()}
    </main>

    ${Footer()}
            ${Sprites()}
    `;
};
