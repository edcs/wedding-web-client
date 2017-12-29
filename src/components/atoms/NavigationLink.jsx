import PropTypes from 'prop-types';
import React from 'react';
import glamorous from 'glamorous';

const Link = glamorous.a('inline-block hover:text-white mr-8 ml-8 no-underline font-serif text-grey text-xl');

const NavigationLink = ({ children, href }) => (
  <Link href={href}>{children}</Link>
);

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

NavigationLink.defaultProps = {
  href: '#',
};

export default NavigationLink;
