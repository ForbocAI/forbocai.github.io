/**
 * Main Entry Point
 * Bootstraps the functional application.
 */
import { createStore } from './domains/store.js';
import { rootReducer } from './domains/rootReducer.js';
import { navigate } from './domains/navigationSlice.js';
import { App } from './components/App.js';

// Initialize Store
const store = createStore(rootReducer, undefined);

// Render Loop
const render = () => {
    const state = store.getState();
    const appElement = document.getElementById('app');
    
    if (appElement) {
        // Pure functional rendering: State -> UI
        appElement.innerHTML = App(state);

        // Post-render: Scroll to hash if present
        const hash = window.location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView();
            } else if (hash === '#whitepaper') {
                window.scrollTo(0, 0);
            }
        } else {
            window.scrollTo(0, 0);
        }
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
