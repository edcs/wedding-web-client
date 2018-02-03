import { AppContainer } from 'react-hot-loader';
import bugsnag from 'bugsnag-js';
import bugsnagReact from 'bugsnag-react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const client = bugsnag(process.env.BUGSNAG_API_KEY);
const ErrorBoundary = client.use(bugsnagReact(React));
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

render(App);

if (module.hot) {
  module.hot.accept();
}
