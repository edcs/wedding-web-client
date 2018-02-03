import PropTypes from 'prop-types';
import React from 'react';

import GiftListItemSubtitle from '../atoms/GiftListItemSubtitle';
import GiftListItemTitle from '../atoms/GiftListItemTitle';
import GiftListItemWrapper from '../atoms/GiftListItemWrapper';

const GiftListItem = ({
  title, website, telephone, url,
}) => (
  <GiftListItemWrapper>
    <GiftListItemTitle>{title}</GiftListItemTitle>
    <GiftListItemSubtitle href={url}>{website} | {telephone}</GiftListItemSubtitle>
  </GiftListItemWrapper>
);

GiftListItem.propTypes = {
  title: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GiftListItem;
