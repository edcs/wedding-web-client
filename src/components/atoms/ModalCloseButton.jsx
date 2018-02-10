/* eslint-disable indent */
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

import IconClose from '../atoms/IconClose';

const A = glamorous.a(`
  cursor-pointer
  fixed
  pin-t
  pin-r
`, {
  opacity: 0.5,
  '&&:hover': { opacity: 1 },
});

const ModalCloseButton = ({ onClick }) => (
  <A onClick={event => onClick(event)}>
    <IconClose />
  </A>
);

ModalCloseButton.propTypes = {
  onClick: PropTypes.func,
};

ModalCloseButton.defaultProps = {
  onClick: () => {},
};

export default ModalCloseButton;
