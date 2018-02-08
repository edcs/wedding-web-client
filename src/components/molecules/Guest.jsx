import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { withTheme } from 'glamorous';

import Heading4 from '../atoms/Heading4';
import HorizontalRule from '../atoms/HorizontalRule';
import InputHidden from '../atoms/InputHidden';
import InputLabel from '../atoms/InputLabel';
import InputText from '../atoms/InputText';
import InputWrapper from '../atoms/InputWrapper';
import Serif from '../atoms/Serif';

class Guest extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      main: undefined,
      dessert: undefined,
    };
  }

  render() {
    return (
      <Fragment>
        <InputWrapper>
          <InputLabel>Name</InputLabel>
          <InputText
            name={`name[${this.props.id}]`}
            value={this.props.name}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Does this person have any special dietary requirements?</InputLabel>
          <InputText
            name={`dietaryRequirements[${this.props.id}]`}
            placeholder="e.g. 'a nut allergy'"
          />
        </InputWrapper>
        <Heading4><br />Choose a main course:</Heading4>
        <RadioGroup onChange={value => this.setState({ main: value })}>
          <RadioButton
            iconSize={18}
            iconInnerSize={8}
            pointColor={this.props.theme.colors.teal}
            rootColor={this.props.theme.colors['grey-dark']}
            value="beef"
          >
            <Serif>
              Roast beef, Yorkshire pudding, roast potatoes and a selection of
              vegetables.<br />Served with a red wine jus or gravy
            </Serif>
          </RadioButton>
          <RadioButton
            iconSize={18}
            iconInnerSize={8}
            rootColor={this.props.theme.colors['grey-dark']}
            pointColor={this.props.theme.colors.teal}
            value="chicken"
          >
            <Serif>
              Chicken breast stuffed with brie, topped with a mushroom and bacon sauce.
              <br />Served with roast potatoes and a selection of vegetables
            </Serif>
          </RadioButton>
          <RadioButton
            iconSize={18}
            iconInnerSize={8}
            rootColor={this.props.theme.colors['grey-dark']}
            pointColor={this.props.theme.colors.teal}
            value="vegetarian"
          >
            <Serif>
              Goats cheese, caramelised red onion and thyme tartlet.
              <br />Served with roast potatoes and a selection of vegetables
            </Serif>
          </RadioButton>
        </RadioGroup>
        <InputHidden
          name={`main[${this.props.id}]`}
          value={this.state.main}
          required
        />
        <Heading4><br />Choose a dessert:</Heading4>
        <RadioGroup onChange={value => this.setState({ dessert: value })}>
          <RadioButton
            iconSize={18}
            iconInnerSize={8}
            rootColor={this.props.theme.colors['grey-dark']}
            pointColor={this.props.theme.colors.teal}
            value="beef"
          >
            <Serif>
              White chocolate and raspberry cheesecake
            </Serif>
          </RadioButton>
          <RadioButton
            iconSize={18}
            iconInnerSize={8}
            rootColor={this.props.theme.colors['grey-dark']}
            pointColor={this.props.theme.colors.teal}
            value="chicken"
          >
            <Serif>
              Triple chocolate brownie squares
            </Serif>
          </RadioButton>
        </RadioGroup>
        <InputHidden
          name={`dessert[${this.props.id}]`}
          value={this.state.dessert}
          required
        />
        {(this.props.index !== this.props.length - 1) ? <HorizontalRule /> : null}
      </Fragment>
    );
  }
}

Guest.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme(Guest);
