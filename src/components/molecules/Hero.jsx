/* eslint-disable indent */
import React from 'react';
import glamorous from 'glamorous';

import Names from '../atoms/Names';
import splash from '../../assets/images/splash.jpg';

const Wrapper = glamorous.div(`
  bg-center
  bg-cover
  content-center
  flex
  justify-center
  shadow
`, {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  backgroundImage: `url(${splash})`,
});

const Hero = () => (
  <Wrapper>
    <Names />
  </Wrapper>
);

export default Hero;
