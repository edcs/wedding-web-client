import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Wrapper = glamorous.div(`
  flex-1
  sm:content-center
  sm:justify-center
  sm:self-center
  p-4
`);

const ModalWrapper = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

ModalWrapper.defaultProps = {
  children: PropTypes.node,
};

ModalWrapper.defaultProps = {
  children: null,
};

export default ModalWrapper;
