import React, { Fragment } from 'react';
import { Row, Col } from 'glamorous-grid';

import GiftListItem from '../molecules/GiftListItem';
import Heading2 from '../atoms/Heading2';
import Heading4 from '../atoms/Heading4';

const GiftList = () => (
  <Fragment>
    <Row>
      <Col>
        <Heading2 id="gift-lists">Gift Lists</Heading2>
      </Col>
    </Row>
    <Row>
      <Col>
        <Heading4>
          So what do you get for the bride and groom,<br />
          when they’ve got things for nearly EVERY room?<br />
          When choosing a gift there’s no need to panic,<br />
          they’ve got two lists so it won’t get manic.<br />
          One will include special treats for their home,<br />
          pots and pans or even a new phone.<br />
          The other is a flight to somewhere hot,<br />
          a trip to Sri Lanka, the perfect honeymoon spot.
        </Heading4>
        <Row>
          <Col span={{ lg: 1 / 2 }}>
            <GiftListItem
              note=""
              title="John Lewis - Number 724122"
              url="https://www.johnlewisgiftlist.com/giftint/JSPs/GiftList/BuyGifts/GuestFindAList.jsp"
              website="www.johnlewisgiftlist.com"
              telephone="0345 600 2202"
            />
          </Col>
          <Col span={{ lg: 1 / 2 }}>
            <GiftListItem
              note=""
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
