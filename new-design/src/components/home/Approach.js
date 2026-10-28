const PARTS = [
    {
        title: 'Character behaviour',
        today: 'Character models built for games rather than conversation. A turn returns a proposed action your game can use, as well as the character’s line.',
        next: 'Measuring how well characters hold their personality under pressure.',
    },
    {
        title: 'Game context',
        today: 'Each turn is generated from what your game sends: the character, the situation, the allowed actions, and any history worth recalling — kept in a store your studio owns.',
        next: 'Checking what a character stores as history against your rules, and how actions are checked.',
    },
    {
        title: 'Runtime performance',
        today: 'Small, purpose-built models served on ForbocAI’s infrastructure, with a hard time limit on every turn.',
        next: 'Publishing typical and worst-case response times by region.',
    },
    {
        title: 'Reliability and control',
        today: 'If a turn runs late or fails a check, it comes back marked as failed and nothing in your game changes. What happens next is up to you.',
        next: 'Automated playtesting that explores your world and reports what players could get stuck on.',
    },
];

export const Approach = () => `
    <section id="technology" class="approach" aria-labelledby="technology-title">
        <div class="wrap">
            <div class="approach-head">
                <p class="eyebrow">Technology</p>
                <h2 id="technology-title" class="title">Built for the demands of interactive worlds.</h2>
                <p class="lead">Game characters need more than a chat endpoint: output shaped as actions, grounded in game context, delivered on a time limit, and safe when something fails. Here is where each stands.</p>
            </div>

            <ol class="approach-list">
                ${PARTS.map((p) => `
                <li>
                    <h3 class="approach-title">${p.title}</h3>
                    <p class="approach-today"><span class="status status-live">Today</span>${p.today}</p>
                    <p class="approach-next"><span class="status status-next">Next</span>${p.next}</p>
                </li>`).join('')}
            </ol>

            <p class="approach-foot"><a href="#dev-technology" class="arrow-link">The technology in more detail</a></p>
        </div>
    </section>
`;
