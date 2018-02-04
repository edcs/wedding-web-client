import React, { Fragment } from 'react';
import { Row, Col } from 'glamorous-grid';

import Heading2 from '../atoms/Heading2';
// import InviteLookup from '../molecules/InviteLookup';
import NameList from '../molecules/NameList';

const Rsvp = () => (
  <Fragment>
    <Row>
      <Col>
        <Heading2 id="rsvp">RSVP</Heading2>
      </Col>
    </Row>
    <Row>
      <Col>
        <NameList
          names={[
            { id: 1, name: 'Edward Coleridge Smith' },
            { id: 2, name: 'Another Person' },
          ]}
          onSelect={id => console.log(id)}
        />
      </Col>
    </Row>
  </Fragment>
);

export default Rsvp;
