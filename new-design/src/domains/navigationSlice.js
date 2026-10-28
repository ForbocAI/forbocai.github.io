const NAVIGATE = 'navigation/NAVIGATE';

export const navigate = (path) => ({
    type: NAVIGATE,
    payload: path
});

const getPathFromHash = () => {
    const hash = window.location.hash.substring(1);
    return hash || 'hero';
};

const initialState = {
    currentPath: getPathFromHash()
};

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

export const selectCurrentPath = (state) => state.navigation.currentPath;

export const selectCurrentPage = (state) => {
    const path = selectCurrentPath(state);
    if (path === 'whitepaper' || path.startsWith('wp-')) return 'whitepaper';
    if (path === 'company' || path.startsWith('co-')) return 'company';
    if (path === 'developers' || path.startsWith('dev-')) return 'developers';
    if (path === 'scenes') return 'scenes';
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
