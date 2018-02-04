import React, { Fragment } from 'react';
import { Row, Col } from 'glamorous-grid';

import Heading2 from '../atoms/Heading2';
// import InviteLookup from '../molecules/InviteLookup';
// import NameList from '../molecules/NameList';
import RsvpForm from '../molecules/RsvpForm';

const Rsvp = () => (
  <Fragment>
    <Row>
      <Col>
        <Heading2 id="rsvp">RSVP</Heading2>
      </Col>
    </Row>
    <Row>
      <Col>
        <RsvpForm
          guests={[
            { id: 1, name: 'Edward Coleridge Smith' },
          ]}
        />
      </Col>
    </Row>
  </Fragment>
);

export default Rsvp;
