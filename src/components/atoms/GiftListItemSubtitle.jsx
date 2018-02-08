/* eslint-disable indent */
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Subtitle = glamorous.a(`
  inline-block
  font-serif
  font-light
  italic
`, ({ theme }) => ({
  textDecoration: 'none',
  color: theme.colors.black,
  borderBottomColor: theme.colors.grey,
  borderBottomWidth: 1,
  borderBottomStyle: 'dotted',
}));

const GiftListItemSubtitle = ({ children }) => (<Subtitle>{children}</Subtitle>);

GiftListItemSubtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default GiftListItemSubtitle;
