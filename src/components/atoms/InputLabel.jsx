import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Label = glamorous.label(`
  pin-t
  absolute
  block
  tracking-wide
  text-grey-darker
  text-s
  italic
  font-serif
  -mt-3
  ml-2
`);

const InputLabel = ({ children, name }) => (
  <Label for={name}>
    {children}
  </Label>
);

InputLabel.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string,
};

InputLabel.defaultProps = {
  children: '',
  name: '',
};

export default InputLabel;
