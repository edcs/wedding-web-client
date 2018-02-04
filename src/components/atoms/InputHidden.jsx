import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withFormsy } from 'formsy-react';

class InputHidden extends PureComponent {
  constructor(props) {
    super(props);
    this.props.setValue(props.value);
  }

  onChangeHandler(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    return (
      <input
        name={this.props.name}
        onChange={event => this.onChangeHandler(event)}
        required={this.props.required}
        type="hidden"
        value={this.props.getValue()}
      />
    );
  }
}

InputHidden.propTypes = {
  getValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
};

InputHidden.defaultProps = {
  required: false,
  value: '',
};

export default withFormsy(InputHidden);
