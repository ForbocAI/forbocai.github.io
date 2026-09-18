import { ChapterMark } from './Sigil.js';

import { Lantern } from './Lantern.js';

/**
 * Three active horizons: the working layer, the development track, and the
 * destination. The compact sequence keeps the future vivid without borrowing
 * evidence from the present.
 */
export const Roadmap = () => {
    return `
    <section id="roadmap" class="chapter is-quiet chapter-night">
        ${Lantern({ className: "lantern-path", size: 0.85 })}
        <div class="container">
            <header class="chapter-head">
                ${ChapterMark({ rune: 'ᛏ' })}
                <div>
                    <h2>The intelligence expands from inside the world</h2>
                    <p class="chapter-lead">Servitor™ is the center. The ForbocAI NPC Protocol governs how its judgments enter game law. Engine paths, world exploration and the characters players carry between worlds extend outward from that intelligence without replacing the studio as author.</p>
                </div>
            </header>

            <ol class="timeline">
                <li class="timeline-item is-done">
                    <span class="timeline-marker" aria-hidden="true"></span>
                    <div class="timeline-content">
                        <p class="timeline-status">Answering</p>
                        <h3>Receive one bounded judgment</h3>
                        <p>Servitor™ Character Intelligence through TypeScript and native Unreal Engine 5 paths, with studio-controlled memory, structured action proposals and rules that keep every state change inside the game.</p>
                    </div>
                </li>
                <li class="timeline-item is-active">
                    <span class="timeline-marker" aria-hidden="true"></span>
                    <div class="timeline-content">
                        <p class="timeline-status">Walking worlds</p>
                        <h3>See the world before players do</h3>
                        <p>Ghost walks our own test worlds today, the way a thousand players would. Turning what it finds — the room nobody can reach, the loop nobody closes — into a map a producer outside this building can act on is clause ten.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <span class="timeline-marker" aria-hidden="true"></span>
                    <div class="timeline-content">
                        <p class="timeline-status">Crossing</p>
                        <h3>Carry earned history between worlds</h3>
                        <p>Every named character meets the unscripted and still chooses as that person, inside law the studio owns. She crosses when the player who made her carries her, and the receiving world admits what it chooses to admit — no canon, law or game state surrendered.</p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
    `;
};
