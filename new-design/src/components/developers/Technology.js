const COLUMNS = [
    {
        tone: 'live',
        status: 'In production',
        title: 'What runs today',
        items: [
            ['A purpose-built NPC language model', 'Servitor™ — small, quantised models served on ForbocAI infrastructure, so performance does not depend on a player’s hardware.'],
            ['One judgment, one call', 'Dialogue, reasoning and a structured action come back from the same attempt — no chain of calls, no re-roll for a parseable action.'],
            ['A deadline that fails safely', 'Turns run under a hard server-side deadline. A miss is a typed invalid result that authorises nothing.'],
            ['Memory with recall', 'Local vector storage and semantic recall in the SDK, written to a store the studio owns.'],
        ],
    },
    {
        tone: 'building',
        status: 'In development',
        title: 'What we are building',
        items: [
            ['Ghost', 'Automated playtesting. It already drives our own test worlds; coverage reports for producers are being built.'],
            ['Souls', 'A player-owned, encrypted record of who a character became, which another game can inspect and admit on its own terms.'],
            ['The studio path', 'SDK 1.0, account and billing qualification, and engine distribution.'],
        ],
    },
    {
        tone: 'next',
        status: 'Measured in public',
        title: 'What we will prove',
        items: [
            ['Persona hold', 'An authored character keeps her voice, loyalties and refusals under adversarial play.'],
            ['Cast separation', 'Hundreds of characters on one model stay distinct from one another.'],
            ['Faithful reasons', 'The reason a character gives is the one that decided.'],
            ['Grounded prose', 'What she says is checked against the world you supplied.'],
        ],
    },
];

export const Technology = () => `
    <section id="dev-technology" class="band band-alt technology" aria-labelledby="technology-title">
        <div class="wrap">
            <div class="band-head band-head-split">
                <div>
                    <p class="eyebrow">Technology</p>
                    <h2 id="technology-title" class="title">Built for characters, not for conversation.</h2>
                </div>
                <div>
                    <p class="lead">General models arrive with a voice of their own and wear your character over the top. Servitor™ is trained the other way: to hold the person your writers authored, and to decide as her.</p>
                    <p class="fine">That is our approach and our bet. The right-hand column is how we intend to prove it — published, and open to any rival on the same terms.</p>
                </div>
            </div>

            <div class="tech-grid">
                ${COLUMNS.map((col) => `
                <article class="tech-col tech-${col.tone}">
                    <p class="status status-${col.tone}">${col.status}</p>
                    <h3 class="subtitle">${col.title}</h3>
                    <dl class="tech-list">
                        ${col.items.map(([t, d]) => `<div><dt>${t}</dt><dd>${d}</dd></div>`).join('')}
                    </dl>
                </article>`).join('')}
            </div>

            <div class="actions">
                <a href="#whitepaper" class="arrow-link">Read the whitepaper and the Character Intelligence Standard</a>
            </div>
        </div>
    </section>
`;
