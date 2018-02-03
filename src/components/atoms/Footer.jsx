import glamorous from 'glamorous';
import React from 'react';

const Wrapper = glamorous.div(`
  bg-grey-lighter
  mt-11
  pt-8
  pb-6
  shadow-inner
  text-center
`);

const Footer = () => (
  <Wrapper>
    <span role="img" aria-label="bride">👰</span>&nbsp;
    <span role="img" aria-label="ring">💍</span>&nbsp;
    <span role="img" aria-label="groom">🤵</span>
  </Wrapper>
);

export default Footer;
