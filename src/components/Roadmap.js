import { Lantern } from './Lantern.js';

/**
 * Roadmap Component
 *
 * A genuine sequence, so it is the one place on the page that gets a numbered
 * spine. Status is written as shipped / in progress / next rather than as fixed
 * quarters, so a date passing does not quietly make the page a lie.
 */
export const Roadmap = () => {
    return `
    <section id="roadmap" class="chapter chapter-night">
        ${Lantern({ className: "lantern-path", size: 0.85 })}
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛏ</span>
                <div>
                    <h2>The Lantern Path</h2>
                    <p class="chapter-lead">Our roadmap, as of September 2026 — where the work actually stands, rather than where we would like it to be.</p>
                </div>
            </header>

            <ol class="timeline">
                <li class="timeline-item is-done">
                    <span class="timeline-marker" aria-hidden="true"></span>
                    <div class="timeline-content">
                        <p class="timeline-status">Shipped</p>
                        <h3>The hearth is lit</h3>
                        <ul class="roadmap-list">
                            <li>Characters that hold memory across sessions, with semantic and time-aware recall</li>
                            <li>Rule checking between a character's intent and your world state</li>
                            <li>Sixteen personality profiles selectable from a persona file, governing the action a character proposes rather than the accent she says it in</li>
                            <li>Servitor answering on our own infrastructure, with the TypeScript and Unreal&nbsp;Engine&nbsp;5 SDKs against it</li>
                            <li>Developer docs at docs.forboc.ai, playable demos, and $FAI live on the market</li>
                        </ul>
                    </div>
                </li>
                <li class="timeline-item is-active">
                    <span class="timeline-marker" aria-hidden="true"></span>
                    <div class="timeline-content">
                        <p class="timeline-status">In progress</p>
                        <h3>Ghost on the road, keys at the gate</h3>
                        <ul class="roadmap-list">
                            <li>Ghost playtesting with coverage reports a producer can read — <strong>Q4 2026</strong>, and it is the only date we are committing to on this page</li>
                            <li>Then the account portal — keys, usage and billing in one place</li>
                            <li>Then Soul minting end to end: gather, encrypt, upload, verify, restore</li>
                            <li>Then SDK 1.0 and a Fab listing for Unreal; Unity stays an integration scaffold until it meets the same contract</li>
                            <li>Those four are deliberately undated and strictly ordered, because three people do not ship four things at once. Dating them would be a guess dressed as a commitment, and you would find out which in month three.</li>
                        </ul>
                    </div>
                </li>
                <li class="timeline-item">
                    <span class="timeline-marker" aria-hidden="true"></span>
                    <div class="timeline-content">
                        <p class="timeline-status">Next</p>
                        <h3>Characters that cross the fence</h3>
                        <ul class="roadmap-list">
                            <li>Marketplace operations for Soul trading and NPC template licensing</li>
                            <li>Souls carried between titles with their continuity intact — as fast as the rights conversation allows. The protocol is ours to date. The licensing is not, and we will not put a year on somebody else's signature.</li>
                            <li>Further engine bindings, each held to the same contract the shipped ones meet</li>
                        </ul>
                    </div>
                </li>
            </ol>
        </div>
    </section>
    `;
};
