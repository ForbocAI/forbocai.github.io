const POINTS = [
    ['More choices mean more authored content.', 'Every additional player decision can require new dialogue, branches, and conditions. Keeping characters responsive becomes harder as possible interactions grow.'],
    ['Player history is hard to carry through.', 'A character’s response should reflect previous encounters, current events, and their own motivations. Maintaining that continuity across a game requires substantial custom logic and content.'],
    ['Dynamic characters need boundaries.', 'Character behavior must work within the rules of the game. Developers need to define what characters can propose, validate what happens, and retain control over gameplay.'],
];

export const Problem = () => `
    <section id="why" class="why" aria-labelledby="why-title">
        <div class="wrap why-grid">
            <div>
                <p class="eyebrow">The problem</p>
                <h2 id="why-title" class="title">Players change the world. Characters often follow the script.</h2>
                <p class="why-lead">Game worlds respond to player actions through physics, combat, and evolving environments. But character interactions are often built around dialogue trees and predefined branches.</p>
            </div>
            <ol class="why-points">
                ${POINTS.map(([head, line]) => `<li><strong>${head}</strong><span>${line}</span></li>`).join('')}
            </ol>
        </div>
    </section>
`;
