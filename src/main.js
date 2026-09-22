/**
 * Main Entry Point
 * Bootstraps the functional application.
 *
 *        .-.
 *     .-(   )-.
 *    (___.-.___)
 *       /_|_\
 */
import { createStore } from './domains/store.js';
import { rootReducer } from './domains/rootReducer.js';
import { navigate } from './domains/navigationSlice.js';
import { App } from './components/App.js';
import { wakeSprites } from './components/Sprites.js';
import { setupMobileMenu } from './systems/mobileMenu.js';
import { setupHeaderTone } from './systems/headerTone.js';
import { setupMemoryEntrance } from './systems/memoryEntrance.js';
import { setupDocContents } from './systems/docContents.js';
import { arrive } from './systems/arrival.js';

// Initialize Store
const store = createStore(rootReducer, undefined);

let stopSprites = null;

// Render Loop
const render = () => {
    const state = store.getState();
    const appElement = document.getElementById('app');

    if (appElement) {
        // Pure functional rendering: State -> UI
        appElement.innerHTML = App(state);

        // The systems: everything that runs over the rendered DOM rather than
        // producing it. Each lives in src/systems under the name of the one
        // thing it does, and each tears down what its last run set up.
        setupMobileMenu();
        setupHeaderTone();
        setupMemoryEntrance();
        stopSprites?.();
        stopSprites = wakeSprites();
        setupDocContents();

        // Post-render: where the page lands.
        arrive(state);
    }
};

// Subscribe to state changes
store.subscribe(render);

// Handle Navigation via Hash
window.addEventListener('hashchange', () => {
    store.dispatch(navigate(window.location.hash));
});

// Initial Render
render();

// Debugging
window.__STORE__ = store;
