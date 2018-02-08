/* eslint-disable indent */
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Ul = glamorous.ul(`
  text-center
  m-0
  p-0
`, {
  listStyle: 'none',
});

const UnorderedList = ({ children }) => (
  <Ul>{children}</Ul>
);

UnorderedList.propTypes = {
  children: PropTypes.node,
};

UnorderedList.defaultProps = {
  children: [],
};

export default UnorderedList;
