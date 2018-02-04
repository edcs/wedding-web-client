import React, { Fragment } from 'react';
import { Row, Col } from 'glamorous-grid';

import Guest from '../molecules/Guest';
import Heading2 from '../atoms/Heading2';
// import InviteLookup from '../molecules/InviteLookup';
// import NameList from '../molecules/NameList';

const Rsvp = () => (
  <Fragment>
    <Row>
      <Col>
        <Heading2 id="rsvp">RSVP</Heading2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Guest name="Edward Coleridge Smith" />
      </Col>
    </Row>
  </Fragment>
);

export default Rsvp;
