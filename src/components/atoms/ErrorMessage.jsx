import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Text = glamorous.div(`
  font-serif
  font-light
  italic
  mb-8
  text-2xl
  text-center
  tracking-wide
  text-red-dark
`);

const ErrorMessage = ({ children }) => (
  <Text>{children}</Text>
);

ErrorMessage.propTypes = {
  children: PropTypes.string,
};

ErrorMessage.defaultProps = {
  children: '',
};

export default ErrorMessage;
