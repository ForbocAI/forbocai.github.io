/**
 * Navigation Domain
 * Handles the application's routing state (hash-based).
 */

// Actions
const NAVIGATE = 'navigation/NAVIGATE';

// Action Creators
export const navigate = (path) => ({
    type: NAVIGATE,
    payload: path
});


const getPathFromHash = () => {
    const hash = window.location.hash.substring(1);
    return hash || 'hero';
};

const getPageFromPath = () => {
    const path = window.location.pathname;
    if (path.includes('whitepaper.html')) return 'whitepaper';
    return 'index';
};

// Initial State
const initialState = {
    currentPath: getPathFromHash(),
    currentPage: getPageFromPath()
};

// Pure Reducer
export const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE:
            return {
                ...state,
                currentPath: action.payload.replace('#', '')
            };
        default:
            return state;
    }
};

// Selectors
export const selectCurrentPath = (state) => state.navigation.currentPath;
export const selectCurrentPage = (state) => state.navigation.currentPage;
