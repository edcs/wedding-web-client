import React from 'react';

import NavigationBar from '../atoms/NavigationBar';
import NavigationLink from '../atoms/NavigationLink';

const Navigation = () => (
  <NavigationBar>
    <NavigationLink href="/service">Service</NavigationLink>
    <NavigationLink href="/reception">Reception</NavigationLink>
    <NavigationLink href="/gift-lists">Gift Lists</NavigationLink>
    {/* <NavigationLink href="/rsvp">RSVP</NavigationLink> */}
  </NavigationBar>
);

export default Navigation;
