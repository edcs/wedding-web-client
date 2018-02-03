/* eslint-disable indent */
import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';

const Wrapper = glamorous.div(`
  mt-10
  mb-11
  ml-auto
  mr-auto
  relative
  text-center
`, { maxWidth: 720 });

const H2 = glamorous.h2(`
  font-serif
  font-normal
  inline-block
  pl-8
  pr-8
  relative
  text-5xl
  tracking-medium
  z-20
`, ({ theme }) => ({
  backgroundColor: theme.colors.white,
}));

const Rule = glamorous.div(({ theme }) => ({
  backgroundColor: theme.colors.teal,
  height: 3,
  left: 0,
  marginTop: 1.5,
  position: 'absolute',
  right: 0,
  top: '50%',
  zIndex: 10,
}));

const Heading2 = ({ children }) => (
  <Wrapper>
    <H2>{children}</H2>
    <Rule />
  </Wrapper>
);

Heading2.propTypes = {
  children: PropTypes.element,
};

Heading2.defaultProps = {
  children: '',
};

export default Heading2;