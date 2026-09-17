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
                    <p class="chapter-lead">A character who has been somewhere should be able to leave with what she learned. A Soul is that character gathered up — who she is, what she remembers, who she trusts — in a form that can be carried out of your game and set down in another.</p>
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

            <p class="soul-decouple"><strong>None of this touches the character layer.</strong> A studio ships memory, validated actions and Ghost without holding, buying or billing a token, and those plans are priced in ordinary money. $FAI settles the Soul economy, and Souls are opt-in.</p>

            <p class="soul-card">The nearest familiar thing is a trading card, and the comparison is useful right up to the point where it stops. A card is the same card in every hand that holds it. A Soul arrives carrying what she did in the world she came from — who she trusted there, what she refused, the argument she is still having. Two players holding the same character are not holding the same character. That is the part no card game has ever been able to sell, and it is the reason a Soul is worth carrying rather than collecting.</p>

            <p class="soul-market">The appetite is not hypothetical, and it is one of the few numbers on this site we can source. Trading card games were an <a href="https://www.gminsights.com/industry-analysis/trading-card-games-market" target="_blank" rel="noopener noreferrer">$8.4&nbsp;billion market in 2025</a>, with a further <a href="https://straitsresearch.com/report/collectible-card-games-market" target="_blank" rel="noopener noreferrer">$2.1&nbsp;billion a year</a> moving on the secondary market in graded and sealed product. The sharper signal is digital: Pokémon's TCG Pocket took roughly <a href="https://vtmvending.com/pages/pokemon-trading-card-market-usa" target="_blank" rel="noopener noreferrer">$1.25&nbsp;billion in player spending in its first year</a> on cards that are identical in every collection holding them.</p>

            <p class="soul-market">There is already a market for characters that own themselves — autonomous agents with their own tokens, making their own calls. No studio can ship one, because a character who can act outside your canon breaks the world she is standing in. Souls are the other shape: ownership for the player, authority for the studio, and a character who is only ever what your game made her.</p>

                <p class="soul-market">Whether a character who is <em>not</em> identical is worth more than one who is — that is the question, and only a shipped marketplace answers it. We do not have one yet. We are pointing at the number because it sizes the appetite, not because we are claiming a share of it.</p>

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
