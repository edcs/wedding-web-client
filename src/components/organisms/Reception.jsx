import React, { Fragment } from 'react';
import { Row, Col } from 'glamorous-grid';

import Heading2 from '../atoms/Heading2';
import Heading3 from '../atoms/Heading3';
import Heading4 from '../atoms/Heading4';

const Reception = () => (
  <Fragment>
    <Row>
      <Col>
        <Heading2 id="reception">Reception</Heading2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Heading3>
          Our wedding reception will be held at Windmill Farm:
        </Heading3>
        <Heading4>
          Windmill Farm<br />
          Bowstridge Lane<br />
          Chalfont St. Giles<br />
          Buckinghamshire<br />
          HP8 4RG
        </Heading4>
      </Col>
    </Row>
  </Fragment>
);

export default Reception;
