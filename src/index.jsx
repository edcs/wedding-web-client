import { AppContainer } from 'react-hot-loader';
import bugsnag from 'bugsnag-js';
import bugsnagReact from 'bugsnag-react';
import Promise from 'es6-promise';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

let ErrorBoundary = Fragment;

if (process.env.NODE_ENV === 'production') {
  const client = bugsnag(process.env.BUGSNAG_API_KEY);
  ErrorBoundary = client.use(bugsnagReact(React));
}

const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    </AppContainer>,
    root,
  );
};

Promise.polyfill();

render(App);

if (module.hot) {
  module.hot.accept();
}
