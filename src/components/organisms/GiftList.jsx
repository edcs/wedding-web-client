import React, { Fragment } from 'react';
import { Row, Col } from 'glamorous-grid';

import GiftListItem from '../molecules/GiftListItem';
import Heading2 from '../atoms/Heading2';
import Heading3 from '../atoms/Heading3';

const GiftList = () => (
  <Fragment>
    <Row>
      <Col>
        <Heading2 id="gift-lists">Gift Lists</Heading2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Heading3>
          Our gift lists are registered at Kuoni and John Lewis:
        </Heading3>
        <Row>
          <Col span={{ lg: 1 / 2 }}>
            <GiftListItem
              title="John Lewis - Number 724122"
              url="https://www.johnlewisgiftlist.com/giftint/JSPs/GiftList/BuyGifts/GuestFindAList.jsp"
              website="www.johnlewisgiftlist.com"
              telephone="0345 600 2202"
            />
          </Col>
          <Col span={{ lg: 1 / 2}}>
            <GiftListItem
              title="Kuoni - Number 34804"
              url="http://www.kuoni.co.uk/gift-list"
              website="www.kuoni.co.uk/gift-list"
              telephone="01306 744444"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </Fragment>
);

export default GiftList;
