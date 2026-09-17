import { Lantern } from './Lantern.js';

/**
 * Vision Component
 * Souls and the public $FAI utility — the first section after nightfall.
 *
 * Gathering and restoring are two steps of one protocol, so they sit on the
 * same ruled spine the capability ledger uses. $FAI is a different kind of
 * claim — economics, not protocol — so it is pulled out rather than given a
 * third equal cell.
 */
export const Vision = () => {
    return `
    <section id="souls" class="chapter chapter-night">
        ${Lantern({ className: "lantern-souls", size: 1 })}
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛋ</span>
                <div>
                    <h2>Souls</h2>
                    <p class="chapter-lead">A character who has been somewhere should be able to leave with what she learned. The Soul Garden is our name for where she goes. A Soul is that character gathered up — who she is, what she remembers, who she trusts — in a form that can be carried out of your game and set down in another.</p>
                </div>
            </header>

            <ol class="ledger ledger-night">
                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>She leaves whole, or not at all</h3>
                        <p>Identity, memory, relationships, and temperament are collected together. A Soul that arrives half-remembered is not a Soul, so the protocol moves all of it or none of it.</p>
                    </div>
                    <p class="ledger-fact">Collected locally, encrypted, uploaded, and proved retrievable before the export is called done.</p>
                </li>

                <li class="ledger-row">
                    <div class="ledger-body">
                        <h3>She comes back under a verified name</h3>
                        <p>Arriving in a new world is not a matter of presenting a file. The payload is confirmed remotely, verified, and only then restored into a character the receiving game can trust.</p>
                    </div>
                    <p class="ledger-fact">No listing, receipt, or market claim substitutes for that verification. The chain is not optional and does not bend.</p>
                </li>
            </ol>

            <aside class="soul-economy">
                ${Lantern({ className: "lantern-gate", size: 0.75, tone: "bright" })}
                <h3>What $FAI is for</h3>
                <p>The token is live and trading. It is what mints a Soul, what pays for an upgrade as a character grows, and what settles marketplace operations as the ecosystem opens. Souls and the marketplace themselves are in active development — we would rather say that plainly than imply a shipped economy.</p>
                <div class="hero-buttons">
                    <a href="#whitepaper" class="btn btn-primary" data-link>Read the whitepaper</a>
                    <a href="https://pump.fun/coin/7zwfQkkPv9aUF6VXA8CbZabJYpXCRJTYbQnjxjynpump" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">Look up $FAI</a>
                </div>
            </aside>
        </div>
    </section>
    `;
};
