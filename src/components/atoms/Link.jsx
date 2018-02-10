import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const A = glamorous.a('font-serif cursor-pointer text-l', ({ theme }) => ({
  textDecoration: 'none',
  color: theme.colors.black,
  borderBottomColor: theme.colors.teal,
  borderBottomWidth: 1,
  borderBottomStyle: 'dotted',
}));

const Link = ({ children, onClick, href }) => (
  <A onClick={event => onClick(event)} href={href}>{children}</A>
);

Link.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

Link.defaultProps = {
  children: '',
  onClick: () => {},
  href: '',
};

export default Link;
