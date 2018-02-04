import Formsy from 'formsy-react';
import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';

import Heading3 from '../atoms/Heading3';
import Lookup from '../molecules/Lookup';

class InviteLookup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { submitButtonDisabled: false };
  }

  onInvalidHandler() {
    this.setState({ submitButtonDisabled: true });
  }

  onSubmitHandler({ search }) {
    this.props.lookup(search);
  }

  onValidHandler() {
    this.setState({ submitButtonDisabled: false });
  }

  render() {
    return (
      <Fragment>
        <Heading3>
          Start by searching for your invite using your name:
        </Heading3>
        <Formsy
          onInvalid={() => this.onInvalidHandler()}
          onSubmit={data => this.onSubmitHandler(data)}
          onValid={() => this.onValidHandler()}
        >
          <Lookup
            buttonDisabled={this.state.submitButtonDisabled}
            name="search"
            placeholder="Enter your name, e.g. 'Edward' or 'Coleridge Smith' and press Search"
            required
          />
        </Formsy>
      </Fragment>
    );
  }
}

InviteLookup.propTypes = {
  lookup: PropTypes.func,
};

InviteLookup.defaultProps = {
  lookup: () => Promise.resolve(),
};

export default InviteLookup;
