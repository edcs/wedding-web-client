import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Wrapper = glamorous.div(`
  text-center
  mt-4
  mb-6
`);

const GiftListItemWrapper = ({ children }) => (<Wrapper>{children}</Wrapper>);

GiftListItemWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GiftListItemWrapper;
