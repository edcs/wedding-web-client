import PropTypes from 'prop-types';
import React from 'react';

const NavigationLink = ({ children, href }) => (
  <a
    className="inline-block hover:text-white mr-8 ml-8 no-underline font-serif text-grey text-xl"
    href={href}
  >
    {children}
  </a>
);

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

NavigationLink.defaultProps = {
  href: '#',
};

export default NavigationLink;
