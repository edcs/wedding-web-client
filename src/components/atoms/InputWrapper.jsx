import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Wrapper = glamorous.div(`
  relative
  flex
  items-center
  border-b
  border-b-2
  border-teal
  py-4
  mt-8
`);

const InputWrapper = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

InputWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputWrapper;
