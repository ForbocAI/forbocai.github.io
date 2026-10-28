import { Room } from './Room.js';
import { TurnWalkthrough } from './Turn.js';
import { ChapterMark } from './Sigil.js';

/**
 * Scenes — the niche page.
 *
 * The home page's job is to make a studio want to look. It was doing that job
 * across 19.4 screens, against an AAA benchmark of six or seven, because every
 * proof lived inline: two full demonstrations, four code blocks and the
 * apparatus around them, all in the scroll of someone who has not decided to
 * care yet.
 *
 * Nothing is cut. The second demonstration lives here, whole, for the reader
 * who has decided — which is the same argument the Deeper disclosures make one
 * layer down, made one page across. A landing page that is short because its
 * substance is gone is a worse page; this one is short because its substance
 * has somewhere to be.
 *
 * It is a page, so it has a head. The first version opened on 224px of bare
 * ground and a back link, with no h1 and no h2 for 2,500px — a reader arriving
 * from a button had nothing telling them where they were. The back link goes
 * to the top of the home page, not to #room: a reader may have come from
 * either of two buttons, and "back" that lands you halfway down a different
 * page is not back.
 */
export const Scenes = () => `
    <div class="nightfall nightfall-page">
        <section id="scenes" class="chapter turn-band scenes-head">
            <div class="container">
                <p class="doc-return"><a class="btn btn-quiet" href="#">&larr; Back to the home page</a></p>
                <header class="chapter-head">
                    ${ChapterMark({ rune: 'ᚹ' })}
                    <div>
                        <h1>One night at the counter, line by line</h1>
                        <p class="chapter-lead">Everything the home page claims, shown in full: the persona document a writer typed, the call your game makes, the judgment that comes back — and then the rest of the room deciding what to do about it.</p>
                    </div>
                </header>
            </div>
        </section>
        ${TurnWalkthrough()}
        ${Room()}
    </div>
`;
