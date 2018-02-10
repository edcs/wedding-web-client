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
  borderBottomColor: theme.colors.teal,
  borderBottomWidth: 1,
  borderBottomStyle: 'dotted',
}));

const GiftListItemSubtitle = ({ href, children }) => (
  <Subtitle href={href} target="_blank">{children}</Subtitle>
);

GiftListItemSubtitle.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default GiftListItemSubtitle;
