import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';

const Nav = glamorous.nav('fixed pin-t pin-r pin-l bg-black text-center p-6 shadow-md z-10');

const NavigationBar = ({ children }) => (
  <Nav>{children}</Nav>
);

NavigationBar.propTypes = {
  children: PropTypes.node,
};

NavigationBar.defaultProps = {
  children: [],
};

export default NavigationBar;
