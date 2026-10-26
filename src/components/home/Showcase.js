const SAVES = [
    {
        id: 'broken',
        n: 'History 01',
        tab: 'You broke the seal',
        memory: 'You opened and read her brother’s letter.',
        reply: 'You’ve read it once already. It stays with me until he comes home.',
        proposal: 'Refuse',
        outcome: 'The action is allowed. The letter stays behind the counter.',
    },
    {
        id: 'kept',
        n: 'History 02',
        tab: 'You kept it sealed',
        memory: 'You returned the letter with its seal unbroken.',
        reply: 'You could have read it, and you didn’t. Take it — you’ll know what to do.',
        proposal: 'Give the letter',
        outcome: 'The action is allowed. The letter changes hands.',
    },
];

const Panel = (save, i) => `
    <ol class="scene-panel scene-flow" id="save-${save.id}" role="tabpanel" aria-labelledby="save-tab-${save.id}" ${i ? 'hidden' : ''}>
        <li class="flow-game">
            <p class="flow-role">Your game supplies the context</p>
            <dl class="flow-context">
                <div><dt>Character</dt><dd>Maeve, an innkeeper who keeps her word</dd></div>
                <div><dt>Situation</dt><dd>You ask, “Any word from your brother?”</dd></div>
                <div><dt>Allowed actions</dt><dd>Give the letter · Refuse</dd></div>
                <div class="is-changed"><dt>Player history</dt><dd>${save.memory}</dd></div>
            </dl>
        </li>
        <li class="flow-forboc">
            <p class="flow-role">ForbocAI generates a response and proposed action</p>
            <p class="scene-reply">“${save.reply}”</p>
            <p class="flow-proposal">Proposed action <strong>${save.proposal}</strong></p>
        </li>
        <li class="flow-game">
            <p class="flow-role">Your game decides</p>
            <p class="flow-outcome">${save.outcome}</p>
        </li>
    </ol>
`;

export const Showcase = () => `
    <section id="product" class="showcase theme-dark" aria-labelledby="product-title">
        <div class="wrap">
            <div class="showcase-head">
                <p class="eyebrow">The product</p>
                <h2 id="product-title" class="title">A character turn, shaped by player history.</h2>
                <p class="lead">Maeve, an innkeeper, is keeping her brother’s sealed letter. The player returns after a previous visit. What Maeve says and proposes to do depends on what happened last time.</p>
            </div>

            <div class="scene" data-tabs>
                <div class="scene-ui">
                    <div class="scene-tabs" role="tablist" aria-label="Choose the player’s history">
                        ${SAVES.map((save, i) => `
                        <button type="button" role="tab" class="scene-tab" id="save-tab-${save.id}" aria-controls="save-${save.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}"><span>${save.n}</span>${save.tab}</button>`).join('')}
                    </div>
                    ${SAVES.map(Panel).join('')}
                </div>
                <figure class="scene-still">
                    <img src="maeve-letter-scene.webp" alt="Maeve, the innkeeper, holds a sealed letter across the Lanternbough counter." width="1672" height="941" loading="lazy">
                </figure>
            </div>
            <div class="scene-explain">
                <p>The same character and situation can produce different responses when the player’s history changes.</p>
                <p>ForbocAI uses the context supplied by your game to generate a character response and propose an action. Your game defines the available actions and decides whether the proposed action can happen.</p>
            </div>
            <p class="scene-more"><a href="#scenes" class="arrow-link">See a full turn, step by step</a></p>
            <p class="scene-note"><em>Illustrative scene from Lanternbough, a ForbocAI test world. Dialogue and outcomes are examples, not recorded product output.</em></p>
        </div>
    </section>
`;
