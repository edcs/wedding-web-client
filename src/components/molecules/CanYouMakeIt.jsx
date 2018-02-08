import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Col, Row } from 'glamorous-grid';

import ButtonDangerBig from '../atoms/ButtonDangerBig';
import ButtonPrimaryBig from '../atoms/ButtonPrimaryBig';
import Heading3 from '../atoms/Heading3';

const CanYouMakeIt = ({ onAccept, onDecline }) => (
  <Fragment>
    <Heading3>Can You Make It?</Heading3>
    <Row>
      <Col>
        <ButtonPrimaryBig
          type="button"
          onClick={event => onAccept(event)}
        >
          I'm there!
        </ButtonPrimaryBig>
      </Col>
      <Col>
        <ButtonDangerBig
          type="button"
          onClick={event => onDecline(event)}
        >
          Sorry, I can't make it
        </ButtonDangerBig>
      </Col>
    </Row>
  </Fragment>
);

CanYouMakeIt.propTypes = {
  onAccept: PropTypes.func,
  onDecline: PropTypes.func,
};

CanYouMakeIt.defaultProps = {
  onAccept: () => {},
  onDecline: () => {},
};

export default CanYouMakeIt;
