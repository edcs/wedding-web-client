import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TextArea from 'react-expanding-textarea';
import { withFormsy } from 'formsy-react';

const Input = glamorous(TextArea)(`
  appearance-none
  bg-transparent
  border-none
  font-serif
  w-full
  text-grey-darker
  text-xl
  mr-3
  py-1
  px-2
`);

class InputTextArea extends PureComponent {
  constructor(props) {
    super(props);
    this.props.setValue(props.value);
  }

  onChangeHandler(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    return (
      <Input
        name={this.props.name}
        onChange={event => this.onChangeHandler(event)}
        placeholder={this.props.placeholder}
        rows={this.props.rows}
        required={this.props.required}
        value={this.props.getValue()}
      />
    );
  }
}

InputTextArea.propTypes = {
  getValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
};

InputTextArea.defaultProps = {
  placeholder: '',
  required: false,
  rows: 5,
  value: '',
};

export default withFormsy(InputTextArea);
