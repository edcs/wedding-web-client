import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Title = glamorous.div(`
  font-serif
  mb-2
  text-xl
`);

const GiftListItemTitle = ({ children }) => (<Title>{children}</Title>);

GiftListItemTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default GiftListItemTitle;
