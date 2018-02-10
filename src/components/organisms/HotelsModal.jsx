import React from 'react';

import Modal from '../molecules/Modal';
import ModalHeading from '../atoms/ModalHeading';
import ModalListItem from '../atoms/ModalListItem';
import UnorderedList from '../atoms/UnorderedList';

const HotelsModal = () => (
  <Modal>
    <ModalHeading>Local Hotels</ModalHeading>
    <UnorderedList>
      <ModalListItem>
        <b>The Ivy House</b> -
        London Road, Chalfont Saint Giles, HP8 4RS - 01494 872184 – Approx. £80 per night
      </ModalListItem>
      <ModalListItem>
        <b>The Greyhound Inn</b> -
        High Street, Chalfont Saint Peter, SL9 9RA - 01753 883404 – Approx. £80 per night
      </ModalListItem>
      <ModalListItem>
        <b>The Ethorpe Hotel</b> -
        85 Packhorse Road, Gerrards Cross, SL9 8HX - 01753 882039 – Approx. £110 per night
      </ModalListItem>
      <ModalListItem>
        <b>De Vere Latimer Estate</b> -
        Latimer, Chesham, HP5 1UG - 0871 222 4810 – Approx £135 per night
      </ModalListItem>
      <ModalListItem>
        <b>Crazy Bear Beaconsfield</b> -
        Old Beaconsfield, Beaconsfield, HP9 1LX - 01494 673086 – Approx £290 per night
      </ModalListItem>
      <ModalListItem>
        <b>Stoke Place</b> -
        Stoke Green, Stoke Poges, Stoke Poges, SL2 4HT - 01753 534790 – Approx £170 per night
      </ModalListItem>
      <ModalListItem>
        <b>Travelodge Beaconsfield</b> -
        Aylesbury End, Beaconsfield HP9 1LW - 0871 559 1803 – Approx £65 per night
      </ModalListItem>
      <ModalListItem>
        <b>IBIS Hotel</b> -
        M40 J2 services, Hedgerley Lane, Burtley wood, Beaconsfield HP9 2SE – 01494 680929 –
        Approx £45 per night
      </ModalListItem>
    </UnorderedList>
  </Modal>
);

export default HotelsModal;
