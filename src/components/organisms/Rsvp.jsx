import { get } from 'axios';
import React, { Fragment, PureComponent } from 'react';
import { Row, Col } from 'glamorous-grid';
import { camelCase } from 'change-case-object';

import Heading2 from '../atoms/Heading2';
import InviteLookup from '../molecules/InviteLookup';
import NameList from '../molecules/NameList';
import RsvpForm from '../molecules/RsvpForm';

class Rsvp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      httpRequestInProgress: false,
      invite: {},
      lookupNames: [],
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
            lookup={lookup => this.lookupGuests(lookup)}
          />
        );
      case 'NameList':
        return (
          <NameList
            names={this.state.lookupNames}
            onSelect={id => this.lookupInvitation(id)}
          />
        );
      case 'RsvpForm':
        return (
          <RsvpForm names={this.state.invite.invitees} />
        );
    }
  }

  lookupGuests(lookup) {
    this.setState({ httpRequestInProgress: true }, () =>
      get(`${process.env.API}invitees?query=${lookup}`)
        .then(({ data }) => this.setState({
          lookupNames: camelCase(data),
          visibleSegment: 'NameList',
        }))
        .finally(() => this.setState({ httpRequestInProgress: false })));
  }

  lookupInvitation(id) {
    this.setState({ httpRequestInProgress: true }, () =>
      get(`${process.env.API}invites/${id}`)
        .then(({ data }) => this.setState({
          invite: camelCase(data),
          visibleSegment: 'RsvpForm',
        }))
        .finally(() => this.setState({ httpRequestInProgress: false })));
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
