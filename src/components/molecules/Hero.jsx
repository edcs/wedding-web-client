import React from 'react';

import Names from '../atoms/Names';
import Splash from '../atoms/Splash';

const Hero = () => (
  <div>
    <div className="absolute pin flex justify-center items-center">
      <Names />
    </div>
    <Splash />
  </div>
);

export default Hero;
