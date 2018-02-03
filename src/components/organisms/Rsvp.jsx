import React, { Fragment } from 'react';
import { Row, Col } from 'glamorous-grid';

import Heading2 from '../atoms/Heading2';
import Heading3 from '../atoms/Heading3';
import Heading4 from '../atoms/Heading4';

const Rsvp = () => (
  <Fragment>
    <Row>
      <Col>
        <Heading2>RSVP</Heading2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Heading3>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Heading3>
        <Heading4>
          Deerview<br />
          Segenhoe<br />
          Ridgmont<br />
          Bedfordshire<br />
          MK43 0XW
        </Heading4>
      </Col>
    </Row>
  </Fragment>
);

export default Rsvp;
