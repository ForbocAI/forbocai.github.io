import { Lantern } from './Lantern.js';

/**
 * Three active horizons: the working layer, the development track, and the
 * destination. The compact sequence keeps the future vivid without borrowing
 * evidence from the present.
 */
export const Roadmap = () => {
    return `
    <section id="roadmap" class="chapter chapter-night">
        ${Lantern({ className: "lantern-path", size: 0.85 })}
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛏ</span>
                <div>
                    <h2>The intelligence expands from inside the world</h2>
                    <p class="chapter-lead">Servitor™ is the center. The ForbocAI NPC Protocol governs how its judgments enter game law. Engine paths, world exploration and opt-in continuity extend outward from that intelligence without replacing the studio as author.</p>
                </div>
            </header>

            <ol class="timeline">
                <li class="timeline-item is-done">
                    <span class="timeline-marker" aria-hidden="true"></span>
                    <div class="timeline-content">
                        <p class="timeline-status">In evaluation now</p>
                        <h3>Receive one bounded judgment</h3>
                        <p>Servitor™ Character Intelligence through TypeScript and native Unreal Engine 5 paths, with studio-controlled memory, structured action proposals and rules that keep every state change inside the game.</p>
                    </div>
                </li>
                <li class="timeline-item is-active">
                    <span class="timeline-marker" aria-hidden="true"></span>
                    <div class="timeline-content">
                        <p class="timeline-status">Ghost reports in development</p>
                        <h3>See the world before players do</h3>
                        <p>Ghost already drives our own test worlds. It walks a level the way a thousand players would, finds the room nobody can reach and the loop nobody closes, and hands a producer the map before a player ever sees it.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <span class="timeline-marker" aria-hidden="true"></span>
                    <div class="timeline-content">
                        <p class="timeline-status">Continuity in development</p>
                        <h3>Carry earned history between worlds</h3>
                        <p>Every named character meets the unscripted and still chooses as that person, inside law the studio owns. The opt-in path carries earned character history into a receiving world without surrendering canon, law or game state.</p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
    `;
};
