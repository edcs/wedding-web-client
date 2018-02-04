import React, { Fragment } from 'react';
import { Row, Col } from 'glamorous-grid';

import Heading2 from '../atoms/Heading2';
import InviteLookup from './InviteLookup';

const Rsvp = () => (
  <Fragment>
    <Row>
      <Col>
        <Heading2 id="rsvp">RSVP</Heading2>
      </Col>
    </Row>
    <Row>
      <Col>
        <InviteLookup />
      </Col>
    </Row>
  </Fragment>
);

export default Rsvp;
