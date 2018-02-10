import PropTypes from 'prop-types';
import React from 'react';

import Modal from '../molecules/Modal';
import ModalHeading from '../atoms/ModalHeading';
import ModalListItem from '../atoms/ModalListItem';
import UnorderedList from '../atoms/UnorderedList';

const ScheduleModal = ({ dismissModal }) => (
  <Modal dismissModal={event => dismissModal(event)}>
    <ModalHeading>The Schedule</ModalHeading>
    <UnorderedList>
      <ModalListItem>
        <b>2:30pm</b> - Meet in Merlin's Cave pub
      </ModalListItem>
      <ModalListItem>
        <b>3:15pm</b> - Church ceremony begins
      </ModalListItem>
      <ModalListItem>
        <b>4:30pm</b> - Church ceremony finishes, photos at the church
      </ModalListItem>
      <ModalListItem>
        <b>5:00pm</b> - Guests make their way to Windmill Farm for the reception
      </ModalListItem>
      <ModalListItem>
        <b>5:15pm</b> - Welcome drinks
      </ModalListItem>
      <ModalListItem>
        <b>6:10pm</b> - Guests take their seats for wedding breakfast
      </ModalListItem>
      <ModalListItem>
        <b>7:15pm</b> - Speeches commence
      </ModalListItem>
      <ModalListItem>
        <b>8:15pm</b> -Evening guests arrive
      </ModalListItem>
      <ModalListItem>
        <b>8:25pm</b> - Time for cake!
      </ModalListItem>
      <ModalListItem>
        <b>8:30pm</b> - First dance
      </ModalListItem>
      <ModalListItem>
        <b>8:35pm</b> - Time to party! <span role="img" aria-label="dancing man">🕺</span>
      </ModalListItem>
      <ModalListItem>
        <b>9:00pm</b> - Evening food served
      </ModalListItem>
      <ModalListItem>
        <b>10:30pm</b> - Bouquet thrown
      </ModalListItem>
      <ModalListItem>
        <b>12:30am</b> - Carriages depart
      </ModalListItem>
    </UnorderedList>
  </Modal>
);

ScheduleModal.propTypes = {
  dismissModal: PropTypes.func.isRequired,
};

export default ScheduleModal;
