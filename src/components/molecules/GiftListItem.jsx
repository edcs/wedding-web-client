/* eslint-disable indent */
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Wrapper = glamorous.div(`
  text-center
  mt-4
  mb-6
`);

const Title = glamorous.div(`
  font-serif
  mb-2
  text-xl
`);

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
}));

const GiftListItem = ({ title, website, telephone, url }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Subtitle href={url}>{website} | {telephone}</Subtitle>
  </Wrapper>
);

GiftListItem.propTypes = {
  title: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GiftListItem;
