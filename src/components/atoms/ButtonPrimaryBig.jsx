/* eslint-disable indent */
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Button = glamorous.button(`
  block
  w-full
  border-4
  text-white
  text-2xl
  mt-8
  py-1
  px-4
  rounded
  font-serif
`, ({ disabled }) => (
  disabled ? 'border-grey bg-grey opacity-50 cursor-not-allowed' :
             'border-teal bg-teal hover:bg-teal-dark hover:border-teal-dark'));

const ButtonPrimaryBig = ({
  children, disabled, onClick, type,
}) => (
  <Button
    disabled={disabled}
    onClick={event => onClick(event)}
    type={type}
  >
    {children}
  </Button>
);

ButtonPrimaryBig.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
};

ButtonPrimaryBig.defaultProps = {
  type: 'submit',
  children: 'Submit',
  onClick: () => {},
  disabled: false,
};

export default ButtonPrimaryBig;
