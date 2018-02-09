import PropTypes from 'prop-types';
import React from 'react';
import { RadioButton as BaseRadioButton } from 'react-radio-buttons';
import { withTheme } from 'glamorous';

const RadioButton = props => (
  <BaseRadioButton
    {...props}
    iconSize={18}
    iconInnerSize={8}
    pointColor={props.theme.colors.teal}
    rootColor={props.theme.colors['grey-dark']}
  />
);

RadioButton.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(RadioButton);
