import React from 'react';

import NavigationBar from '../atoms/NavigationBar';
import NavigationLink from '../atoms/NavigationLink';

const Navigation = () => (
  <NavigationBar>
    <NavigationLink>Service</NavigationLink>
    <NavigationLink>Reception</NavigationLink>
    <NavigationLink>Gift Lists</NavigationLink>
    <NavigationLink>RSVP</NavigationLink>
  </NavigationBar>
);

export default Navigation;
