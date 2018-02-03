import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Wrapper = glamorous.div(`
  absolute 
  pin 
  flex 
  justify-center 
  items-center
`);

const HeroWrapper = ({ children }) => (<Wrapper>{children}</Wrapper>);

HeroWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroWrapper;
