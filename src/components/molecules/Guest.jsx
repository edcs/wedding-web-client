import Formsy from 'formsy-react';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { withTheme } from 'glamorous';

import Heading3 from '../atoms/Heading3';
import Heading4 from '../atoms/Heading4';
import InputLabel from '../atoms/InputLabel';
import InputText from '../atoms/InputText';
import InputWrapper from '../atoms/InputWrapper';
import Serif from '../atoms/Serif';

const Guest = ({ name, theme }) => (
  <Fragment>
    <Heading3>
      Now it's time to send your RSVP:<br /><br />
    </Heading3>
    <Formsy>
      <InputWrapper>
        <InputLabel>Name</InputLabel>
        <InputText
          name="name[]"
          value={name}
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>Does this person have any special dietary requirements?</InputLabel>
        <InputText
          name="dietaryRequirements[]"
          placeholder="e.g. 'a nut allergy'"
        />
      </InputWrapper>
      <Heading4><br />Choose a main course:</Heading4>
      <RadioGroup>
        <RadioButton
          iconSize={18}
          iconInnerSize={8}
          rootColor={theme.colors['grey-dark']}
          pointColor={theme.colors.teal}
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
          rootColor={theme.colors['grey-dark']}
          pointColor={theme.colors.teal}
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
          rootColor={theme.colors['grey-dark']}
          pointColor={theme.colors.teal}
          value="vegetarian"
        >
          <Serif>
            Goats cheese, caramelised red onion and thyme tartlet.
            <br />Served with roast potatoes and a selection of vegetables
          </Serif>
        </RadioButton>
      </RadioGroup>
      <Heading4><br />Choose a desert:</Heading4>
      <RadioGroup>
        <RadioButton
          iconSize={18}
          iconInnerSize={8}
          rootColor={theme.colors['grey-dark']}
          pointColor={theme.colors.teal}
          value="beef"
        >
          <Serif>
            White chocolate and raspberry cheesecake
          </Serif>
        </RadioButton>
        <RadioButton
          iconSize={18}
          iconInnerSize={8}
          rootColor={theme.colors['grey-dark']}
          pointColor={theme.colors.teal}
          value="chicken"
        >
          <Serif>
            Triple chocolate brownie squares
          </Serif>
        </RadioButton>
      </RadioGroup>
    </Formsy>
  </Fragment>
);

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme(Guest);
