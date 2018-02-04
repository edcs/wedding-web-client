import Formsy from 'formsy-react';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import ButtonPrimaryBig from '../atoms/ButtonPrimaryBig';
import Guest from './Guest';

class RsvpForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { submitButtonDisabled: false };
  }

  onInvalidHandler() {
    this.setState({ submitButtonDisabled: true });
  }

  onSubmitHandler() {
    //
  }

  onValidHandler() {
    this.setState({ submitButtonDisabled: false });
  }

  render() {
    return (
      <Formsy
        onInvalid={() => this.onInvalidHandler()}
        onSubmit={data => this.onSubmitHandler(data)}
        onValid={() => this.onValidHandler()}
      >
        {this.props.guests.map(({ id, name }) => (<Guest id={id} name={name} />))}
        <ButtonPrimaryBig>Send RSVP</ButtonPrimaryBig>
      </Formsy>
    );
  }
}

RsvpForm.propTypes = {
  guests: PropTypes.array,
};

RsvpForm.defaultProps = {
  guests: [],
};

export default RsvpForm;
