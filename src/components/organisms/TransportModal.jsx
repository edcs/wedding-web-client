import React from 'react';

import Modal from '../molecules/Modal';
import ModalHeading from '../atoms/ModalHeading';
import ModalListItem from '../atoms/ModalListItem';
import UnorderedList from '../atoms/UnorderedList';

const TransportModal = () => (
  <Modal>
    <ModalHeading>Local Taxis</ModalHeading>
    <UnorderedList>
      <ModalListItem>
        <b>Chalfont Taxis</b> - 01494 875522 or 01753 893131
      </ModalListItem>
      <ModalListItem>
        <b>Acorn Cars</b> - 01494 771181, 01753 585222 or 01753 882261
      </ModalListItem>
      <ModalListItem>
        <b>Aspire Executive Cars</b> - 01753 885886 or 01494 611200
      </ModalListItem>
    </UnorderedList>
  </Modal>
);

export default TransportModal;
