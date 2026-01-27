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
