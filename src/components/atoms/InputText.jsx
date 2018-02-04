import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withFormsy } from 'formsy-react';

const Input = glamorous.input(`
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

class InputText extends PureComponent {
  onChangeHandler(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    return (
      <Input
        autoComplete="off"
        name={this.props.name}
        onChange={event => this.onChangeHandler(event)}
        placeholder={this.props.placeholder}
        required={this.props.required}
        type="text"
      />
    );
  }
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  placeholder: '',
  required: false,
};

export default withFormsy(InputText);
