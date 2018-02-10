import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Row, Col } from 'glamorous-grid';

import Heading2 from '../atoms/Heading2';
import Heading3 from '../atoms/Heading3';
import Heading4 from '../atoms/Heading4';
import Link from '../atoms/Link';

const Service = ({ launchModal }) => (
  <Fragment>
    <Row>
      <Col>
        <Heading2 id="service">The Service</Heading2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Heading3>
          Edward and Samantha request the honour of your company at
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
    <Row>
      <Col style={{ textAlign: 'right' }}>
        <Link
          href="#full-schedule"
          onClick={event => launchModal(event)}
        >
          Full Schedule
        </Link>
      </Col>
      <Col>
        <Link
          href="#local-parking"
          onClick={event => launchModal(event)}
        >
          Local Parking
        </Link>
      </Col>
    </Row>
  </Fragment>
);

Service.propTypes = {
  launchModal: PropTypes.func.isRequired,
};

export default Service;
