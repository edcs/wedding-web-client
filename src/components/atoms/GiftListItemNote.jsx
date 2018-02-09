/* eslint-disable indent */
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Subtitle = glamorous.div(`
  font-serif
  font-light
  italic
  mt-4
`);

const GiftListItemNote = ({ children }) => (
  <Subtitle>{children}</Subtitle>
);

GiftListItemNote.propTypes = {
  children: PropTypes.string.isRequired,
};

export default GiftListItemNote;
