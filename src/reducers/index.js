import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import other reducers to here
import urls from './url';

// Combine the reducers passing in as args before routing
const rootReducer = combineReducers({ urls, routing: routerReducer });

export default rootReducer;
