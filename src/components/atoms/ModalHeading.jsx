import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';

const H3 = glamorous.h3(`
  font-serif
  font-light
  italic
  mb-8
  text-4xl
  text-center
  tracking-wide
  leading-normal
`);

const ModalHeading = ({ children }) => (
  <H3>{children}</H3>
);

ModalHeading.propTypes = {
  children: PropTypes.element,
};

ModalHeading.defaultProps = {
  children: '',
};

export default ModalHeading;
