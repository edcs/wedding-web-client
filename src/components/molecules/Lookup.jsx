import PropTypes from 'prop-types';
import React from 'react';

import ButtonPrimary from '../atoms/ButtonPrimary';
import InputText from '../atoms/InputText';
import InputWrapper from '../atoms/InputWrapper';

const Lookup = props => (
  <InputWrapper>
    <InputText
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
    />
    <ButtonPrimary disabled={props.buttonDisabled}>
      {props.buttonLabel}
    </ButtonPrimary>
  </InputWrapper>
);

Lookup.propTypes = {
  ...InputText.propTypes,
  buttonDisabled: PropTypes.bool,
  buttonLabel: PropTypes.string,
};

Lookup.defaultProps = {
  ...InputText.defaultProps,
  buttonDisabled: false,
  buttonLabel: 'Search',
};

export default Lookup;
