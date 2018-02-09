import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';

const H4 = glamorous.h4(`
  font-serif
  font-light
  mb-8
  text-xl
  md:text-2xl
  text-center
  tracking-wide
  leading-normal
`);

const Heading4 = ({ children }) => (
  <H4>{children}</H4>
);

Heading4.propTypes = {
  children: PropTypes.element,
};

Heading4.defaultProps = {
  children: '',
};

export default Heading4;
