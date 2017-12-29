import React from 'react';
import glamorous from 'glamorous';

import Names from '../atoms/Names';
import Splash from '../atoms/Splash';

const Wrapper = glamorous.div('absolute pin flex justify-center items-center');

const Hero = () => (
  <div>
    <Wrapper>
      <Names />
    </Wrapper>
    <Splash />
  </div>
);

export default Hero;
