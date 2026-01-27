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

// Mobile Menu State
let mobileMenuOpen = false;

// Setup Mobile Menu Event Listeners
const setupMobileMenu = () => {
    const toggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (toggle && mobileNav) {
        toggle.addEventListener('click', () => {
            mobileMenuOpen = !mobileMenuOpen;
            toggle.classList.toggle('active', mobileMenuOpen);
            mobileNav.classList.toggle('active', mobileMenuOpen);
        });
        
        // Close menu when a link is clicked
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOpen = false;
                toggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }
};

// Render Loop
const render = () => {
    const state = store.getState();
    const appElement = document.getElementById('app');
    
    if (appElement) {
        // Pure functional rendering: State -> UI
        appElement.innerHTML = App(state);
        
        // Setup mobile menu after render
        setupMobileMenu();

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

