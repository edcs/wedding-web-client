/* eslint-disable indent */
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Li = glamorous.li(`
  font-serif
  font-light
  text-xl
  mb-4
  hover:color-teal
  leading-normal
`);

const ModalListItem = ({ children }) => (
  <Li>{children}</Li>
);

ModalListItem.propTypes = {
  children: PropTypes.string,
};

ModalListItem.defaultProps = {
  children: '',
};

export default ModalListItem;
