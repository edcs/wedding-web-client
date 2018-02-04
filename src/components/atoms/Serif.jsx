import glamorous from 'glamorous';
import PropTypes  from 'prop-types';
import React from 'react';

const Span = glamorous.span('font-serif');

const Serif = ({ children }) => (<Span>{children}</Span>);

Serif.propTypes = {
  children: PropTypes.string,
};

Serif.defaultProps = {
  children: '',
};

export default Serif;
