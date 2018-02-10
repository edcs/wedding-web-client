import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Overlay = glamorous.div(`
  flex
  fixed
  pin
  bg-white
  z-50
  overflow-y-scroll
`);

const ModalOverlay = ({ children }) => (
  <Overlay>{children}</Overlay>
);

ModalOverlay.propTypes = {
  children: PropTypes.node,
};

ModalOverlay.defaultProps = {
  children: null,
};

export default ModalOverlay;
