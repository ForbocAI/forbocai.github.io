/**
 * Mission Component
 *
 * The vision, sold the way a moonshot is sold: name the destination first, make
 * the stakes plain, then show the ladder — and let the credibility come from
 * labelling each rung honestly rather than from adjectives.
 *
 * The strategic spine is the Empty Vessel doctrine read as value innovation.
 * Every competitor is adding to the model: more lore, more persona, more
 * parameters. ForbocAI took the self out. That is the blue-ocean move, it is
 * already true, and it is the one sentence a competitor cannot copy without
 * rebuilding from nothing.
 *
 * Rung statuses are bound to classified's brochure claim contracts. "Shipped"
 * means deployed; anything else says so plainly, because a ladder you can check
 * is the only reason to believe the top of it.
 */

const RUNGS = [
    {
        key: 'shipped',
        state: 'Shipped',
        title: 'She reasons from what happened',
        body: 'Memory that survives the session, written to a store your studio owns — and a character who weighs it rather than reciting it.',
    },
    {
        key: 'shipped',
        state: 'Shipped',
        title: 'She cannot break your world',
        body: 'Every action is checked against your rules before anything moves. An unqualified turn fails where you can catch it.',
    },
    {
        key: 'shipped',
        state: 'Shipped',
        title: 'She is someone in particular',
        body: 'Sixteen composable minds, and a vessel with no self of its own to leak into them.',
    },
    {
        key: 'building',
        state: 'Q4 2026',
        title: 'She walks the content before players do',
        body: 'Ghost characters walk your content headless and hand back coverage. Reporting lands Q4 2026.',
    },
    {
        key: 'building',
        state: 'Q4 2026',
        title: 'She can be carried out',
        body: 'A Soul gathers identity, memory and relationships into something that survives leaving your game.',
    },
    {
        key: 'destination',
        state: 'The reason for the other five',
        title: 'She walks into a world we never built',
        body: 'A character a player met in your game, remembered years later, in somebody else\'s. The hard part of that is rights, not encryption — no publisher lets a stranger\'s character into their IP by accident. We are building the protocol; the licensing is a conversation the industry has not had yet.',
    },
];

export const Mission = () => {
    return `
    <section id="mission" class="chapter chapter-day mission">
        <div class="container">
            <header class="chapter-head">
                <span class="chapter-mark" aria-hidden="true">ᛟ</span>
                <div>
                    <h2>The part of the world that never woke up</h2>
                </div>
            </header>

            <div class="mission-statement">
                <p class="mission-lead">Games are the only medium where the audience stands <em>inside</em> the story. Everything in there got real — the light, the weather, the faces, the way cloth falls. Everything except the people.</p>
                <p>They still forget you between visits. They still say the line they said last time. They still cannot be surprised, and they cannot be persuaded, and nothing you do to them lasts past the loading screen. We have built worlds worth living in and filled them with nobody.</p>
                <p class="mission-destination">So here is what we are actually building: <strong>a character who is genuinely someone.</strong> Who remembers what you did to her a year ago. Who decides — and gets it wrong sometimes, for reasons you could argue with. Who is still herself when the credits roll, and can walk out of our world and into yours carrying everything she learned.</p>
            </div>

            <div class="mission-turn">
                <p class="mission-turn-label">Why nobody has it yet</p>
                <p>Everyone is making the model <em>more</em>. More lore, more persona, more parameters, a bigger self. And a model with a self of its own will always, eventually, defend it — against your canon, your character, your world.</p>
                <p>We went the other way and took the self out. Servitor knows no name, no history, no morality, no world. It cannot contradict your canon because it holds none of its own; it cannot leak a persona because there is none in there to leak. Everything it is, your game hands it at runtime, and it gives all of it back when the turn ends.</p>
                <p class="mission-turn-punch">That is the whole bet. Not a bigger mind — an empty one, and the discipline to keep it empty.</p>
            </div>

            <div class="mission-ladder">
                <p class="mission-ladder-label">The ladder, and where we actually are on it</p>
                <ol>
                    ${RUNGS.map(({ key, state, title, body }) => `
                    <li class="rung rung-${key}">
                        <span class="rung-state">${state}</span>
                        <div class="rung-body">
                            <h3><span class="rung-state-inline">${state}</span>${title}</h3>
                            <p>${body}</p>
                        </div>
                    </li>`).join('')}
                </ol>
                <p class="mission-ladder-note">Three of those are running today and you can call them from a terminal this afternoon. Two are being built. One is the reason the other five exist. We will tell you which is which every time you ask.</p>
            </div>

            <p class="mission-resolve">Characters who decide. That is the whole of the intention, and everything above is only how far along it we are.</p>
        </div>
    </section>
    `;
};
