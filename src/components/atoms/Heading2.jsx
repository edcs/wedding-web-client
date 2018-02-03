import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';

const H2 = glamorous.h2(`
  font-serif
  font-light
  italic
  mt-10
  mb-11
  text-5xl
  text-center
  tracking-medium
`);

const Heading2 = ({ children }) => (
  <H2>{children}</H2>
);

Heading2.propTypes = {
  children: PropTypes.element,
};

Heading2.defaultProps = {
  children: '',
};

export default Heading2;
