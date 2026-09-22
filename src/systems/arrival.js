import { selectCurrentPage } from '../domains/navigationSlice.js';

let lastPage = '';

// Post-render: Scroll to hash if present.
//
// Two things here were wrong and both delivered readers to the footer.
// A page ROUTE whose hash names no element (#scenes) fell through every
// branch and kept the previous scrollY on a shorter document — both
// buttons into /#scenes landed at scrollY 4346 of 5246. And a hash that
// does name an element scrolled with scroll-behavior: smooth, so coming
// BACK from a page route animated for two seconds from the top of the
// home page down through the whole daylight half. A page change is a
// cut, not a pan: when the route changed, the scroll is instant.
// Ask the store which page this is. The first version read the class
// on <main>, and the scenes route rendered as page-home, so the class
// never changed, routeChanged was never true, and the branch below
// picked a smooth scroll: a JS `behavior` option overrides CSS
// scroll-behavior, so the page glided for 1.5s across 4,600px and every
// probe read it mid-flight.
export const arrive = (state) => {
    const hash = window.location.hash;
    const pageNow = selectCurrentPage(state);
    const routeChanged = pageNow !== lastPage;
    lastPage = pageNow;
    if (hash) {
        // Only scroll if it's a valid ID selector (starts with # and no slashes/special chars)
        // This prevents "SyntaxError: '#pitch/1' is not a valid selector"
        if (/^#[a-zA-Z][\w-]*$/.test(hash)) {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: routeChanged ? 'instant' : 'smooth' });
            } else {
                // A route, not an anchor: #scenes, #whitepaper.
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        } else {
            // #pitch/N and anything else that is not a selector.
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
};
