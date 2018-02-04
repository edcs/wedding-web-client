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

const ButtonPrimaryBig = ({ children, disabled, type }) => (
  <Button disabled={disabled} type={type}>
    {children}
  </Button>
);

ButtonPrimaryBig.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonPrimaryBig.defaultProps = {
  disabled: false,
  type: 'submit',
  children: 'Submit',
};

export default ButtonPrimaryBig;
