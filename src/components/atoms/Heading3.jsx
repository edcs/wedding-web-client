import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';

const H3 = glamorous.h3(`
  font-serif
  font-light
  italic
  mb-8
  text-xl
  md:text-2xl
  text-center
  tracking-wide
  leading-normal
`);

const Heading3 = ({ children }) => (
  <H3>{children}</H3>
);

Heading3.propTypes = {
  children: PropTypes.element,
};

Heading3.defaultProps = {
  children: '',
};

export default Heading3;
