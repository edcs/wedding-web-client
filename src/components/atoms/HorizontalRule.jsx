/* eslint-disable indent */
import glamorous from 'glamorous';
import React from 'react';

const Hr = glamorous.hr(({ theme }) => ({
  backgroundColor: theme.colors['grey-light'],
  height: 1,
  marginTop: '50px',
  marginBottom: '50px',
}));

const HorizontalRule = () => (<Hr />);

export default HorizontalRule;
