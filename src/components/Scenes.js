import { Room } from './Room.js';
import { TurnWalkthrough } from './Turn.js';

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
 */
export const Scenes = () => `
    <div class="nightfall">
        <div class="container doc-return">
            <a class="btn btn-quiet" href="#room">&larr; Back to the home page</a>
        </div>
        ${TurnWalkthrough()}
        ${Room()}
    </div>
`;
