import React from 'react';
import { ThemeProvider } from 'glamorous';

import './styles/app.css';
import Home from './components/pages/Home';

import tailwind from '../tailwind';

const App = () => (
  <ThemeProvider theme={tailwind}>
    <Home />
  </ThemeProvider>
);

export default App;
