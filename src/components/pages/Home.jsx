import React, { Fragment } from 'react';
import { Container, Col, Row } from 'glamorous-grid';

import GiftList from '../organisms/GiftList';
import Header from '../organisms/Header';
import Reception from '../organisms/Reception';
import Rsvp from '../organisms/Rsvp';
import Service from '../organisms/Service';

const Home = () => (
  <Fragment>
    <Header />
    <Container>
      <Row justifyContent="center">
        <Col span={8 / 12}>
          <Service />
          <Reception />
          <GiftList />
          <Rsvp />
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export default Home;
