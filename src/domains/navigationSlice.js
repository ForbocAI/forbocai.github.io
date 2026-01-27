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

// Initial State
const initialState = {
    currentPath: getPathFromHash()
};

// Pure Reducer
export const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE:
            return {
                ...state,
                currentPath: action.payload.replace('#', '') || 'hero'
            };
        default:
            return state;
    }
};

// Selectors
export const selectCurrentPath = (state) => state.navigation.currentPath;

export const selectCurrentPage = (state) => {
    const path = selectCurrentPath(state);
    if (path === 'whitepaper') return 'whitepaper';
    if (path.startsWith('pitch')) return 'pitch';
    return 'index';
};

export const selectPitchSlide = (state) => {
    const path = selectCurrentPath(state);
    if (!path.startsWith('pitch')) return 1;
    const parts = path.split('/');
    if (parts.length > 1) {
        return parseInt(parts[1], 10) || 1;
    }
    return 1;
};
