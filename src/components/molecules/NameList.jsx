import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Heading3 from '../atoms/Heading3';
import ListItem from '../atoms/ListItem';
import UnorderedList from '../atoms/UnorderedList';

const NameList = ({ names, onSelect }) => (
  <Fragment>
    <Heading3>
      Now choose your invite from the list below:
    </Heading3>
    <UnorderedList>
      { names.map(({ id, name }) => (
        <ListItem onClick={() => onSelect(id)}>{name}</ListItem>
      ))}
    </UnorderedList>
  </Fragment>
);

NameList.propTypes = {
  names: PropTypes.array,
  onSelect: PropTypes.func,
};

NameList.defaultProps = {
  names: [],
  onSelect: () => {},
};

export default NameList;
