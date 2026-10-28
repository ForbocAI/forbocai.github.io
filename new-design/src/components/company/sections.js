const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export const THESIS = [
    ['The people are the unfinished surface of games', 'Worlds react to players through physics, combat and economies. Characters still end at the edge of a branch: their range is whatever was written.'],
    ['Branch writing is the most expensive writing in the building', 'Written, revised, localised and often performed — and most of it is never seen. More depth costs more lines.'],
    ['A general model is the wrong shape', 'It arrives with a voice and opinions of its own and wears the character over the top. A character model should hold the authored person instead.'],
    ['Neither half ships without the other', 'A model that reasons like a person is a liability if it can change your game. A boundary with nothing behind it is a config file. ForbocAI is both, served together.'],
];

export const SIGNALS = [
    [ext('https://gdconf.com/article/gdc-2025-state-of-the-game-industry-devs-weigh-in-on-layoffs-ai-and-more/', 'More than half'), 'of game developers already work at companies where generative AI is in use.', 'GDC State of the Game Industry, 2025'],
    [ext('https://www.cnbc.com/2024/08/02/ex-google-engineers-from-characterai-re-join-company-with-new-ai-partnership-.html', '$2.7B'), 'paid to license one company’s character technology.', 'CNBC, 2024'],
    [ext('https://www.prnewswire.com/news-releases/inworld-ai-99-of-gamers-are-excited-by-the-potential-of-smart-npcs-powered-by-advanced-artificial-intelligence-301747635.html', '81%'), 'of players surveyed would pay more for games with smarter characters.', 'Industry survey, via PR Newswire'],
];

export const MARKET = [
    [ext('https://www.globenewswire.com/news-release/2026/01/29/3228744/0/en/Non-Player-Character-NPC-Generation-Artificial-Intelligence-Research-Report-2026-5-51-Bn-Market-Opportunities-Trends-Competitive-Analysis-Strategies-Forecasts-2019-2024-2024-2029F-.html', '$5.51B'), 'AI NPC generation by 2029, from $1.41B in 2024'],
    [ext('https://www.markettrendsanalysis.com/product/ai-in-games-market/', '$12.8B'), 'AI in games by 2033'],
    [ext('https://newzoo.com/', '~$188B'), 'global games market'],
    [ext('https://playerdriven.io/articles/the-global-games-market-in-2025-growth-shifts-and-what-comes-next', '3.6B'), 'players worldwide'],
];

export const SHIPPED = [
    'Servitor™, served through the ForbocAI NPC Protocol',
    'TypeScript SDK for Node and the browser',
    'Native Unreal Engine 5 plugin, C++ and Blueprint',
    'Memory writes to studio-controlled local storage',
    'Structured action proposals, with separate reply and action checks',
    'Internal test worlds, with the exact model and runtime build recorded',
];

export const BUILDING = [
    'Ghost coverage reports, opening to producers',
    'SDK 1.0, account and billing qualification',
    'Engine distribution and further engine bindings',
    'Souls: minting, upgrades and cross-title restoration',
];

export const MILESTONES = [
    ['Partner integration', 'Studios integrate a character into their game with support from the ForbocAI team.'],
    ['First external game launch', 'A partner studio ships the first game featuring Servitor-powered characters.'],
    ['Character performance benchmark', 'We publish results comparing Servitor with a named alternative across character consistency, action validity, and end-to-end latency in defined test scenarios.'],
    ['Commercial launch readiness', 'We establish pricing, capacity limits, versioning, and data-handling terms so studios can evaluate and adopt Servitor for production games.'],
    ['Character continuity across games', 'We develop a way for studios to carry a character’s profile and selected history between titles, allowing players to continue relationships across game worlds while studios retain control over what data is shared.'],
];

export const DIFFERENCE = [
    ['Character behavior shaped by the studio', 'Servitor is built to generate character responses from the identity, history, and behavioral constraints a studio provides. Rather than relying on a general model to imitate a character, it is designed to keep the character’s voice, loyalties, and decisions consistent as game situations change.<span class="co-measure">We are evaluating this through character consistency across changing scenarios, including situations that challenge a character’s established behavior.</span>'],
    ['A defined boundary between AI and gameplay', 'The ForbocAI NPC Protocol defines how generated responses and proposed actions are checked against the constraints supplied by the game. The game retains authority over permissions, world state, and execution. AI-generated behavior does not change the world unless the game accepts it.'],
    ['Dialogue and proposed actions in one turn', 'Servitor is designed to return character dialogue, a decision rationale, and a structured action proposal from the same model call. This connects what a character says to what it proposes to do, without requiring separate generation steps for each.<span class="co-measure">We will measure this through response latency, action validity, failure rates, and model calls per turn.</span>'],
    ['An evaluation standard for character models', 'The Character Intelligence Standard defines measurable criteria for character models, including consistency, contextual behavior, action validity, and reliability.<span class="co-measure">We intend to publish Servitor’s results against these criteria, with reproducible test scenarios and evaluation methods that other models can use. The standard will matter if it enables developers to compare character models on the same tasks and verify the results.</span>'],
];

export const MODEL = [
    ['Studios', 'Subscribe in ordinary money, in tiers that grow with the cast.'],
    ['Publishers', 'Enterprise terms across many titles.'],
    ['Price', 'Arrives bound to the commercial release terms, the Standard’s fourth term.'],
    ['Souls and $FAI', '$FAI is live. Its stated product uses are Soul minting, upgrades, registration and marketplace operations.'],
];
