import { createStore } from './domains/store.js';
import { rootReducer } from './domains/rootReducer.js';
import { navigate, selectCurrentPage, selectPitchSlide } from './domains/navigationSlice.js';
import { App } from './components/App.js';
import { setupMobileMenu } from './systems/mobileMenu.js';
import { setupHeaderState } from './systems/headerState.js';
import { setupDocContents } from './systems/docContents.js';
import { setupNavCurrent } from './systems/navCurrent.js';
import { setupTabs } from './systems/tabs.js';
import { arrive } from './systems/arrival.js';

const store = createStore(rootReducer, undefined);

const viewOf = (state) => `${selectCurrentPage(state)}/${selectPitchSlide(state)}`;
let shownView = null;

const render = () => {
    const state = store.getState();
    const appElement = document.getElementById('app');

    if (appElement && viewOf(state) === shownView) {
        arrive(state);
        return;
    }

    if (appElement) {
        shownView = viewOf(state);
        appElement.innerHTML = App(state);

        setupMobileMenu();
        setupHeaderState();
        setupDocContents();
        setupNavCurrent(state);
        setupTabs();

        arrive(state);
    }
};

store.subscribe(render);

window.addEventListener('hashchange', () => {
    if (window.location.hash === '#main-content') {
        document.getElementById('main-content')?.focus();
        return;
    }
    store.dispatch(navigate(window.location.hash));
});

render();

window.__STORE__ = store;
