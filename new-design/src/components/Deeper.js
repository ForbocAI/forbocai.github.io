/**
 * Deeper
 *
 * Urbit's one structural idea worth stealing: a page states the thing, and the
 * reader chooses the depth. Their "Go Deeper" toggles let a landing page be
 * short without the substance being gone — it is one layer down, in place, and
 * the reader decides whether they are buying or auditing.
 *
 * That is the exact shape of this site's problem. Every qualification we owe is
 * true and worth publishing, and every one of them, read in sequence by someone
 * who has not decided yet, sounds like a company arguing with itself. The
 * answer is not to cut them — a limit we stop printing is a limit we stopped
 * honouring. The answer is that the pitch runs at full speed on the surface and
 * the proof sits one click under it.
 *
 * Native <details>, so it works with no JavaScript, the content is in the DOM
 * for search and for anyone reading the page as text, and a reader who wants
 * everything can open everything.
 */
export const Deeper = ({ summary, body, tone = '' }) => `
    <details class="deeper${tone ? ` deeper-${tone}` : ''}">
        <summary>
            <span class="deeper-label">${summary}</span>
            <span class="deeper-karat" aria-hidden="true"></span>
        </summary>
        <div class="deeper-body">${body}</div>
    </details>
`;
