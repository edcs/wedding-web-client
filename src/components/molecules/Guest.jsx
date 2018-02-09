import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import { RadioGroup } from 'react-radio-buttons';

import Heading4 from '../atoms/Heading4';
import HorizontalRule from '../atoms/HorizontalRule';
import InputHidden from '../atoms/InputHidden';
import InputLabel from '../atoms/InputLabel';
import InputText from '../atoms/InputText';
import InputWrapper from '../atoms/InputWrapper';
import RadioButton from '../atoms/RadioButton';
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
            name={`${this.props.id}.name`}
            value={this.props.name}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Does this person have any special dietary requirements?</InputLabel>
          <InputText
            name={`${this.props.id}.dietaryRequirements`}
            placeholder="e.g. 'a nut allergy'"
          />
        </InputWrapper>
        <Heading4><br />Choose a main course:</Heading4>
        <RadioGroup onChange={value => this.setState({ main: value })}>
          <RadioButton value="beef">
            <Serif>
              Roast beef, Yorkshire pudding, roast potatoes and a selection of
              vegetables.<br />Served with a red wine jus or gravy
            </Serif>
          </RadioButton>
          <RadioButton value="chicken">
            <Serif>
              Chicken breast stuffed with brie, topped with a mushroom and bacon sauce.
              <br />Served with roast potatoes and a selection of vegetables
            </Serif>
          </RadioButton>
          <RadioButton value="vegetarian">
            <Serif>
              Goats cheese, caramelised red onion and thyme tartlet.
              <br />Served with roast potatoes and a selection of vegetables
            </Serif>
          </RadioButton>
        </RadioGroup>
        <InputHidden
          name={`${this.props.id}.main`}
          value={this.state.main}
          required
        />
        <Heading4><br />Choose a dessert:</Heading4>
        <RadioGroup onChange={value => this.setState({ dessert: value })}>
          <RadioButton value="cheesecake">
            <Serif>
              White chocolate and raspberry cheesecake
            </Serif>
          </RadioButton>
          <RadioButton value="brownie">
            <Serif>
              Triple chocolate brownie squares
            </Serif>
          </RadioButton>
        </RadioGroup>
        <InputHidden
          name={`${this.props.id}.dessert`}
          value={this.state.dessert}
          required
        />
        <Heading4><br />Pick a drink from the following:</Heading4>
        <RadioGroup onChange={value => this.setState({ favouriteDrink: value })}>
          <RadioButton value="red-wine">
            <Serif>Red Wine</Serif>
          </RadioButton>
          <RadioButton value="white-wine">
            <Serif>White Wine</Serif>
          </RadioButton>
          <RadioButton value="rosé">
            <Serif>Rosé</Serif>
          </RadioButton>
          <RadioButton value="prosecco">
            <Serif>Prosecco</Serif>
          </RadioButton>
          <RadioButton value="craft-beer">
            <Serif>Craft Beer</Serif>
          </RadioButton>
          <RadioButton value="real-ale">
            <Serif>Real Ale</Serif>
          </RadioButton>
          <RadioButton value="gin-and-tonic">
            <Serif>Gin &amp; Tonic</Serif>
          </RadioButton>
          <RadioButton value="soft-drinks">
            <Serif>Soft Drinks</Serif>
          </RadioButton>
          <RadioButton value="byob">
            <Serif>I'll bring my own</Serif>
          </RadioButton>
        </RadioGroup>
        <InputHidden
          name={`${this.props.id}.favouriteDrink`}
          value={this.state.favouriteDrink}
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
};

export default Guest;
