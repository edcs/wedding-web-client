/* eslint-disable indent */
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Li = glamorous.li(`
  font-serif
  font-light
  text-xl
  mb-2
  hover:color-teal
`);

const Span = glamorous.span(`
  cursor-pointer
`, ({ theme }) => ({
  textDecoration: 'none',
  color: theme.colors.black,
  borderBottomColor: theme.colors.grey,
  borderBottomWidth: 1,
}));

const ListItem = ({ children, onClick }) => (
  <Li>
    <Span onClick={event => onClick(event)}>{children}</Span>
  </Li>
);

ListItem.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  children: '',
  onClick: () => {},
};

export default ListItem;
