import React, { PureComponent, Fragment } from 'react';
import { Container, Col, Row } from 'glamorous-grid';

import Footer from '../atoms/Footer';
import GiftList from '../organisms/GiftList';
import Hero from '../molecules/Hero';
import Navigation from '../molecules/Navigation';
import Reception from '../organisms/Reception';
import Rsvp from '../organisms/Rsvp';
import Service from '../organisms/Service';

import HotelsModal from '../organisms/HotelsModal';
import ParkingModal from '../organisms/ParkingModal';
import ScheduleModal from '../organisms/ScheduleModal';
import TransportModal from '../organisms/TransportModal';

const modals = {
  'full-schedule': ScheduleModal,
  'local-taxis': TransportModal,
  'local-hotels': HotelsModal,
  'local-parking': ParkingModal,
};

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { modal: null };
  }

  getModal() {
    if (this.state.modal === null) {
      return null;
    }
    const Modal = this.state.modal;
    return (<Modal dismissModal={event => this.dismissModal(event)} />);
  }

  launchModal(event) {
    event.preventDefault();
    this.setState({ modal: modals[event.target.href.split('#')[1]] });
  }

  dismissModal(event) {
    event.preventDefault();
    this.setState({ modal: null });
  }

  render() {
    return (
      <Fragment>
        <Fragment>
          <Navigation />
          <Hero />
        </Fragment>
        <Container>
          <Row justifyContent="center">
            <Col span={{ lg: 8 / 12 }}>
              <Service launchModal={event => this.launchModal(event)} />
              <Reception launchModal={event => this.launchModal(event)} />
              <GiftList />
              <Rsvp />
            </Col>
          </Row>
        </Container>
        <Footer />
        {this.getModal()}
      </Fragment>
    );
  }
}

export default Home;
