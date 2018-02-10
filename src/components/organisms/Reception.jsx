import React, { Fragment } from 'react';
import { Row, Col } from 'glamorous-grid';

import Heading2 from '../atoms/Heading2';
import Heading3 from '../atoms/Heading3';
import Heading4 from '../atoms/Heading4';
import Link from '../atoms/Link';

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
        <Heading3>
          Parking is available on-site
        </Heading3>
      </Col>
    </Row>
    <Row>
      <Col style={{ textAlign: 'right' }}>
        <Link href="#local-hotels">Local Hotels</Link>
      </Col>
      <Col>
        <Link href="local-taxis">Local Taxis</Link>
      </Col>
    </Row>
  </Fragment>
);

export default Reception;
