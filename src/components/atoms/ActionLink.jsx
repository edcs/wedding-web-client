/* eslint-disable indent */
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

const Wrapper = glamorous.div(`
  text-center
  mt-6
`);

const A = glamorous.a(`
  cursor-pointer
  font-serif
  text-2Xl
  italic
  text-grey-darker
  tracking-wide
`, ({ theme }) => ({
  borderBottomColor: theme.colors.grey,
  borderBottomWidth: 1,
  borderBottomStyle: 'dotted',
}));

const ActionLink = ({ children, onClick }) => (
  <Wrapper>
    <A onClick={() => onClick()}>{children}</A>
  </Wrapper>
);

ActionLink.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ActionLink.defaultProps = {
  onClick: () => {},
};

export default ActionLink;
