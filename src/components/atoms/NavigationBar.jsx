import PropTypes from 'prop-types';
import React from 'react';

const NavigationBar = ({ children }) => (
  <nav className="bg-black text-center p-6">
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
