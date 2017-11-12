import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

// Import components
import App from './components/App';
import UrlView from './components/UrlView';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={UrlView} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.body.appendChild(document.createElement('div')));
