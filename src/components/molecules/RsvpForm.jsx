import Formsy from 'formsy-react';
import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';

import ButtonPrimaryBig from '../atoms/ButtonPrimaryBig';
import Guest from './Guest';
import Heading3 from '../atoms/Heading3';

class RsvpForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { submitButtonDisabled: false };
  }

  onInvalidHandler() {
    this.setState({ submitButtonDisabled: true });
  }

  onSubmitHandler(data) {
    console.log(data);
  }

  onValidHandler() {
    this.setState({ submitButtonDisabled: false });
  }

  render() {
    return (
      <Fragment>
        <Heading3>
          Now it's time to send your RSVP:<br /><br />
        </Heading3>
        <Formsy
          onInvalid={() => this.onInvalidHandler()}
          onSubmit={data => this.onSubmitHandler(data)}
          onValid={() => this.onValidHandler()}
        >
          {this.props.names.map(({ id, name }) => (<Guest id={id} name={name} />))}
          <ButtonPrimaryBig
            disabled={this.state.submitButtonDisabled}
          >
            Send RSVP
          </ButtonPrimaryBig>
        </Formsy>
      </Fragment>
    );
  }
}

RsvpForm.propTypes = {
  names: PropTypes.array,
};

RsvpForm.defaultProps = {
  names: [],
};

export default RsvpForm;
