import { get } from 'axios';
import React, { Fragment, PureComponent } from 'react';
import { Row, Col } from 'glamorous-grid';

import Heading2 from '../atoms/Heading2';
import InviteLookup from '../molecules/InviteLookup';
import NameList from '../molecules/NameList';
import RsvpForm from '../molecules/RsvpForm';

class Rsvp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      httpRequestInProgress: false,
      visibleSegment: 'InviteLookup',
    };
  }

  getVisibleSegment() {
    switch (this.state.visibleSegment) {
      default:
      case 'InviteLookup':
        return (
          <InviteLookup
            httpRequestInProgress={this.state.httpRequestInProgress}
            lookup={lookup => this.lookupInvitation(lookup)}
          />
        );
      case 'NameList':
        return (
          <NameList
            names={[
              { id: 1, name: 'Edward Coleridge Smith' },
              { id: 2, name: 'Samantha Watson' },
            ]}
            onSelect={() => this.setState({ visibleSegment: 'RsvpForm' })}
          />
        );
      case 'RsvpForm':
        return (
          <RsvpForm
            names={[
              { id: 1, name: 'Edward Coleridge Smith' },
              { id: 2, name: 'Samantha Watson' },
            ]}
          />
        );
    }
  }

  lookupInvitation(lookup) {
    this.setState({ httpRequestInProgress: true }, () =>
      get(`${process.env.API}invitees?query=${lookup}`)
        .then(data => console.log(data)));
    // this.setState({ httpRequestInProgress: true }, () =>
    //  (new Promise(resolve => setTimeout(() => resolve(lookup), 750)))
    //    .then(() => this.setState({ visibleSegment: 'NameList' }))
    //    .finally(() => this.setState({ httpRequestInProgress: false })));
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <Heading2 id="rsvp">RSVP</Heading2>
          </Col>
        </Row>
        <Row>
          <Col>{this.getVisibleSegment()}</Col>
        </Row>
      </Fragment>
    );
  }
}

export default Rsvp;
