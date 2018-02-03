import animateScrollTo from 'animated-scroll-to';
import React, { PureComponent } from 'react';
import { ThemeProvider } from 'glamorous';

import './styles/app.css';
import Home from './components/pages/Home';

import tailwind from '../tailwind';

class App extends PureComponent {
  componentDidMount() {
    if (window.location.pathname !== '/') {
      animateScrollTo(document.querySelector(window.location.pathname.replace('/', '#')));
    }
  }

  render() {
    return (
      <ThemeProvider theme={tailwind}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
