import { get } from 'axios';
import React, { Fragment, PureComponent } from 'react';
import { Row, Col } from 'glamorous-grid';
import { camelCase } from 'change-case-object';

import ActionLink from '../atoms/ActionLink';
import CanYouMakeIt from '../molecules/CanYouMakeIt';
import DeclineForm from '../molecules/DeclineForm';
import Heading2 from '../atoms/Heading2';
import InviteLookup from '../molecules/InviteLookup';
import NameList from '../molecules/NameList';
import RsvpForm from '../molecules/RsvpForm';

const defaultState = {
  httpRequestInProgress: false,
  invite: {},
  lookupNames: [],
  showResetButton: false,
  visibleSegment: 'InviteLookup',
};

class Rsvp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = defaultState;
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
            onSearchAgain={() => this.resetInterface()}
          />
        );
      case 'CanYouMakeIt':
        return (
          <CanYouMakeIt
            onAccept={() => this.setState({ visibleSegment: 'RsvpForm' })}
            onDecline={() => this.setState({ visibleSegment: 'DeclineForm' })}
          />
        );
      case 'DeclineForm':
        return (
          <DeclineForm />
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
          showResetButton: data.length > 0,
        }))
        .finally(() => this.setState({ httpRequestInProgress: false })));
  }

  lookupInvitation(id) {
    this.setState({ httpRequestInProgress: true }, () =>
      get(`${process.env.API}invites/${id}`)
        .then(({ data }) => this.setState({
          invite: camelCase(data),
          visibleSegment: 'CanYouMakeIt',
          showResetButton: true,
        }))
        .finally(() => this.setState({ httpRequestInProgress: false })));
  }

  resetInterface() {
    this.setState(defaultState);
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
        { this.state.showResetButton ? (
          <Row>
            <Col>
              <ActionLink onClick={() => this.resetInterface()}>
                I've made a mistake, start again&hellip;
              </ActionLink>
            </Col>
          </Row>
        ) : null }
      </Fragment>
    );
  }
}

export default Rsvp;
