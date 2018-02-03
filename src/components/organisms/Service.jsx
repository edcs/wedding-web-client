import React from 'react';
import { Container, Row, Col } from 'glamorous-grid';

import Heading2 from '../atoms/Heading2';
import Heading3 from '../atoms/Heading3';
import Heading4 from '../atoms/Heading4';

const Service = () => (
  <Container>
    <Row>
      <Col>
        <Heading2>The Service</Heading2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Heading3>
          Edward and Samantha request the honour of your company at<br />
          the celebration of their marriage on:
        </Heading3>
        <Heading4>
          Saturday 26th May 2018 at 3:15pm
        </Heading4>
        <Heading3>
          at:
        </Heading3>
        <Heading4>
          Chalfont St. Giles Parish Church<br />
          High Street<br />
          Chalfont St. Giles<br />
          Buckinghamshire<br />
          HP8 4QF
        </Heading4>
      </Col>
    </Row>
  </Container>
);

export default Service;
