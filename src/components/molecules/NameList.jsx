import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import ButtonPrimary from '../atoms/ButtonPrimary';
import ErrorMessage from '../atoms/ErrorMessage';
import Heading3 from '../atoms/Heading3';
import ListItem from '../atoms/ListItem';
import UnorderedList from '../atoms/UnorderedList';

const NameList = ({ names, onSelect, onSearchAgain }) => (
  <Fragment>
    <Heading3>
      { names.length > 0 ? 'Now choose your invite from the list below:' : null }
    </Heading3>
    { names.length > 0 ?
      <UnorderedList>
        { names.map(({ inviteId, name }) => (
          <ListItem onClick={() => onSelect(inviteId)}>{name}</ListItem>
        ))}
      </UnorderedList> :
      <Fragment>
        <ErrorMessage>
          Sorry, we couldn't find your invitation.
          <br /><br />
          <ButtonPrimary type="button" onClick={() => onSearchAgain()}>
            Search Again?
          </ButtonPrimary>
        </ErrorMessage>
      </Fragment> }
  </Fragment>
);

NameList.propTypes = {
  names: PropTypes.array,
  onSelect: PropTypes.func,
  onSearchAgain: PropTypes.func,
};

NameList.defaultProps = {
  names: [],
  onSelect: () => {},
  onSearchAgain: () => {},
};

export default NameList;
