import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import root reducer
import rootReducer from './reducers/index';

// Import data for default state if necessary
const urls = {};

// create object from default data
const defaultState = {urls};
const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = rootReducer;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
