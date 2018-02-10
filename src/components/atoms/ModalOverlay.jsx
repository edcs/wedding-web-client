import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';
import OverflowScrolling from 'react-overflow-scrolling';

const Overlay = glamorous(OverflowScrolling)(`
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
