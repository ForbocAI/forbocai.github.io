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

            <p class="soul-decouple"><strong>None of this touches the character layer.</strong> Everything a studio buys from us in order to ship a title — SDK and API access, memory, validated actions, Ghost — is quoted, invoiced and paid in ordinary money, and no part of it requires holding, receiving or billing a token at any point. $FAI settles the Soul economy beside it: minting, upgrades, marketplace. If template licensing ever reaches a studio's invoice, it is priced in ordinary money too — a studio will never be asked to hold a token to buy something from us. Souls are opt-in, and a title ships perfectly well having touched none of it.</p>

            <p class="soul-card">The nearest familiar thing is a trading card, and the comparison earns its keep by where it breaks. A card market clears because the objects are interchangeable and the print run is known — that is what makes a price. A Soul is the opposite on both counts. She arrives carrying what she did in the world she came from: who she trusted there, what she refused, the argument she is still having. Two players holding the same character are not holding the same character, and nothing about her is scarce unless a studio chooses to make her so.</p>

            <p class="soul-market">So the appetite is real and the mechanism is still ours to build. Pokémon's TCG Pocket reportedly took <a href="https://vtmvending.com/pages/pokemon-trading-card-market-usa" target="_blank" rel="noopener noreferrer">around $1.25&nbsp;billion in first-year player spending</a> on cards identical in every collection holding them — which says the wanting is not hypothetical, and nothing about what we would earn from it. Whether a character who is <em>not</em> identical is worth more than one who is, only a shipped marketplace answers. The scarcity that would let such a market clear is ours to write into the mint rules before any of it transfers, and we have not shipped either.</p>

            <p class="soul-market">There is already a market for characters that own themselves — autonomous agents with their own tokens, making their own calls. No studio can ship one, because a character who can act outside your canon breaks the world she is standing in. Souls are the other shape: ownership for the player, authority for the studio, and a character who is only ever what your game made her.</p>

            <aside class="soul-economy">
                ${Lantern({ className: "lantern-gate", size: 0.75, tone: "bright" })}
                <h3>What $FAI is for</h3>
                <p>The token is live and trading. It is what mints a Soul, what pays for an upgrade as a character grows, and what settles marketplace operations as the ecosystem opens. Souls and the marketplace themselves are in active development. A live token is not a live economy, and we are not going to let the first be read as the second.</p>
                <div class="hero-buttons">
                    <a href="#whitepaper" class="btn btn-primary" data-link>Read the whitepaper</a>
                    <a href="https://pump.fun/coin/7zwfQkkPv9aUF6VXA8CbZabJYpXCRJTYbQnjxjynpump" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">Look up $FAI</a>
                </div>
            </aside>
        </div>
    </section>
    `;
};
