import PropTypes from 'prop-types';
import React from 'react';

import GiftListItemSubtitle from '../atoms/GiftListItemSubtitle';
import GiftListItemTitle from '../atoms/GiftListItemTitle';
import GiftListItemWrapper from '../atoms/GiftListItemWrapper';
import GiftListItemNote from '../atoms/GiftListItemNote';

const GiftListItem = ({
  note, title, website, telephone, url,
}) => (
  <GiftListItemWrapper>
    <GiftListItemTitle>{title}</GiftListItemTitle>
    <GiftListItemSubtitle href={url}>{website} | {telephone}</GiftListItemSubtitle>
    <GiftListItemNote>{note}</GiftListItemNote>
  </GiftListItemWrapper>
);

GiftListItem.propTypes = {
  note: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GiftListItem;
