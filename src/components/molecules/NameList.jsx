/* eslint-disable class-methods-use-this */
import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';

import ButtonPrimary from '../atoms/ButtonPrimary';
import ErrorMessage from '../atoms/ErrorMessage';
import Heading3 from '../atoms/Heading3';
import ListItem from '../atoms/ListItem';
import UnorderedList from '../atoms/UnorderedList';

class NameList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { names: this.mapNames(props.names) };
  }

  mapNames(names) {
    return names.reduce((accumulator, value) => ({
      ...accumulator,
      [value.inviteId]: [...(accumulator[value.inviteId] || []), value.name],
    }), {});
  }

  joinNames(names) {
    return names.join(', ').replace(/,([^,]*)$/, ' & $1');
  }

  render() {
    return (
      <Fragment>
        <Heading3>
          { Object.keys(this.state.names).length > 0 ? 'Now choose your invite from the list below:' : null }
        </Heading3>
        { Object.keys(this.state.names).length > 0 ?
          <UnorderedList>
            { Object.keys(this.state.names).map(inviteId => (
              <ListItem onClick={() => this.props.onSelect(inviteId)}>
                {this.joinNames(this.state.names[inviteId])}
              </ListItem>
            ))}
          </UnorderedList> :
          <Fragment>
            <ErrorMessage>
              Sorry, we couldn't find your invitation.
              <br /><br />
              <ButtonPrimary type="button" onClick={() => this.props.onSearchAgain()}>
                Search Again?
              </ButtonPrimary>
            </ErrorMessage>
          </Fragment> }
      </Fragment>
    );
  }
}

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
