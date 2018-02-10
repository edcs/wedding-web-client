import React, { Fragment } from 'react';
import { Container, Col, Row } from 'glamorous-grid';

import Footer from '../atoms/Footer';
import GiftList from '../organisms/GiftList';
import Hero from '../molecules/Hero';
import Navigation from '../molecules/Navigation';
import Reception from '../organisms/Reception';
import Rsvp from '../organisms/Rsvp';
import Service from '../organisms/Service';

import TransportModal from '../organisms/TransportModal';

const Home = () => (
  <Fragment>
    <Fragment>
      <Navigation />
      <Hero />
    </Fragment>
    <Container>
      <Row justifyContent="center">
        <Col span={{ lg: 8 / 12 }}>
          <Service />
          <Reception />
          <GiftList />
          <Rsvp />
        </Col>
      </Row>
    </Container>
    <Footer />
    <TransportModal />
  </Fragment>
);

export default Home;
