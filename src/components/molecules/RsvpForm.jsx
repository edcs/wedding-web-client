import Formsy from 'formsy-react';
import PropTypes from 'prop-types';
import { RadioGroup } from 'react-radio-buttons';
import React, { Fragment, PureComponent } from 'react';

import ButtonPrimaryBig from '../atoms/ButtonPrimaryBig';
import Guest from './Guest';
import Heading3 from '../atoms/Heading3';
import Heading4 from '../atoms/Heading4';
import InputHidden from '../atoms/InputHidden';
import RadioButton from '../atoms/RadioButton';
import Serif from '../atoms/Serif';

class RsvpForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { submitButtonDisabled: false, transport: null };
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
          Now it's time to send your RSVP:<br /><br />
        </Heading3>
        <Formsy
          onInvalid={() => this.onInvalidHandler()}
          onSubmit={data => this.onSubmitHandler(data)}
          onValid={() => this.onValidHandler()}
        >
          {this.props.names.map(({ id, name }) => (
            <Guest id={id} name={name} />
          ))}
          <Heading4>
            <br />
            Would you like transport between the church and the reception:
          </Heading4>
          <RadioGroup onChange={value => this.setState({ transport: value })}>
            <RadioButton value="yes">
              <Serif>
                Yes please
              </Serif>
            </RadioButton>
            <RadioButton value="no">
              <Serif>
                No thanks, I'll make my own way
              </Serif>
            </RadioButton>
          </RadioGroup>
          <InputHidden
            name="transport"
            value={this.state.transport}
            required
          />
          <ButtonPrimaryBig disabled={this.state.submitButtonDisabled}>
            Send RSVP
          </ButtonPrimaryBig>
        </Formsy>
      </Fragment>
    );
  }
}

RsvpForm.propTypes = {
  names: PropTypes.array,
  onSubmit: PropTypes.func,
};

RsvpForm.defaultProps = {
  names: [],
  onSubmit: () => {},
};

export default RsvpForm;
