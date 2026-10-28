const STEPS = [
    ['Send the game state.', 'Through the SDK, your game supplies character information, the current situation, relevant player history, and available actions.'],
    ['Receive dialogue and an action proposal.', 'ForbocAI returns what the character says alongside a proposed action. Your game can evaluate that output against its own gameplay systems.'],
    ['Validate and execute.', 'Your game checks the proposed action against its rules and executes it if permitted. World state, gameplay logic, and action permissions remain under your control.'],
];

export const Platform = () => `
    <section id="platform" class="platform" aria-labelledby="platform-title">
        <div class="wrap">
            <div class="platform-head">
                <p class="eyebrow">The platform</p>
                <h2 id="platform-title" class="title">Connect character behavior to your game systems.</h2>
                <p class="lead">ForbocAI provides hosted character models, runtime infrastructure, and SDKs that generate contextual dialogue and proposed actions for your game.</p>
            </div>

            <ol class="loop" aria-label="How ForbocAI fits into a game">
                ${STEPS.map(([title, line], i) => `
                <li class="loop-step${i === 1 ? ' is-forboc' : ''}">
                    <span class="loop-node" aria-hidden="true">${i === 1 ? '<span class="brand-icon"></span>' : i + 1}</span>
                    <h3 class="loop-title"><strong>${title}</strong></h3>
                    <p>${line}</p>
                </li>`).join('')}
            </ol>

            <div class="platform-foot">
                <p class="platform-sdks"><span>TypeScript SDK</span> · <span>Unreal Engine 5 SDK</span></p>
                <a href="#developers" class="arrow-link">Explore the SDKs</a>
            </div>
        </div>
    </section>
`;
