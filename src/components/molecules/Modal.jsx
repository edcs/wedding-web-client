import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import ScrollLock from 'react-scrolllock';

import ModalCloseButton from '../atoms/ModalCloseButton';
import ModalOverlay from '../atoms/ModalOverlay';
import ModalWrapper from '../atoms/ModalWrapper';

const Modal = ({ children, dismissModal }) => (
  <Fragment>
    <ScrollLock />
    <ModalOverlay>
      <ModalCloseButton onClick={event => dismissModal(event)} />
      <ModalWrapper>
        {children}
      </ModalWrapper>
    </ModalOverlay>
  </Fragment>
);

Modal.propTypes = {
  children: PropTypes.node,
  dismissModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
