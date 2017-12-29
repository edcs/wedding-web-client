import PropTypes from 'prop-types';
import React from 'react';

const NavigationBar = ({ children }) => (
  <nav className="fixed pin-t pin-r pin-l bg-black text-center p-6 shadow-md z-10">
    {children}
  </nav>
);

NavigationBar.propTypes = {
  children: PropTypes.node,
};

NavigationBar.defaultProps = {
  children: [],
};

export default NavigationBar;
