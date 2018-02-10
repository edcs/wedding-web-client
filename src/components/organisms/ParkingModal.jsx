import PropTypes from 'prop-types';
import React from 'react';

import Modal from '../molecules/Modal';
import ModalHeading from '../atoms/ModalHeading';
import ModalListItem from '../atoms/ModalListItem';
import UnorderedList from '../atoms/UnorderedList';

const ParkingModal = ({ dismissModal }) => (
  <Modal dismissModal={event => dismissModal(event)}>
    <ModalHeading>Local Parking</ModalHeading>
    <UnorderedList>
      <ModalListItem>
        <b>Chalfont St Giles, Blizzards Yard</b> -
        Blizzards Yard car park is located off the High Street in Chalfont St Giles, HP8 4QA
        <br />
        Up to 2 hours £1.40, Up to 3 hours £2.00
      </ModalListItem>
    </UnorderedList>
  </Modal>
);

ParkingModal.propTypes = {
  dismissModal: PropTypes.func.isRequired,
};

export default ParkingModal;
