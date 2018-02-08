import Formsy from 'formsy-react';
import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';

import ButtonPrimaryBig from '../atoms/ButtonPrimaryBig';
import Heading3 from '../atoms/Heading3';
import InputLabel from '../atoms/InputLabel';
import InputTextArea from '../atoms/InputTextArea';
import InputWrapper from '../atoms/InputWrapper';

class DeclineForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { submitButtonDisabled: false };
  }

  onInvalidHandler() {
    this.setState({ submitButtonDisabled: true });
  }

  onSubmitHandler(data) {
    this.props.onSubmit(data);
  }

  onValidHandler() {
    this.setState({ submitButtonDisabled: false });
  }

  render() {
    return (
      <Fragment>
        <Heading3>
          We're sorry you can't make it <span role="img" aria-label="sad face">😢</span>
          <br /><br />
        </Heading3>
        <Formsy
          onInvalid={() => this.onInvalidHandler()}
          onSubmit={data => this.onSubmitHandler(data)}
          onValid={() => this.onValidHandler()}
        >
          <InputWrapper>
            <InputLabel>Your Message</InputLabel>
            <InputTextArea
              name="message"
              placeholder="Leave us a note letting us know you can't make it"
              required
            />
          </InputWrapper>
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

DeclineForm.propTypes = {
  onSubmit: PropTypes.func,
};

DeclineForm.defaultProps = {
  onSubmit: () => {},
};

export default DeclineForm;
