/**
 * Root Reducer
 * Combines all domain reducers into the main state tree.
 */
import { combineReducers } from './store.js';
import { navigationReducer } from './navigationSlice.js';

export const rootReducer = combineReducers({
    navigation: navigationReducer,
    // Add other domain reducers here as needed
});
