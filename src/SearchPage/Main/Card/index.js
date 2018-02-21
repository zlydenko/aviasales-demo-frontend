import React from "react";
import {
  Card,
  Header,
  Text,
  Price,
  Airlines,
  Destination,
  Icon
} from "./styled";

import rossiyaAirlines from "./logo/rossiya.png";
import rossiyaAirlines2x from "./logo/rossiya2x.png";
import departure from "./departure.svg";
import arrival from "./arrival.svg";
import clock from "./clock.svg";

const DepartureIcon = () => <Icon src={departure} alt="" />;
const ArrivalIcon = () => <Icon src={arrival} alt="" />;
const ClockIcon = () => <Icon src={clock} alt="" />;

export default () => (
  <Card>
    <Header>
      <Price>7 712 ₽</Price>
      <picture>
        <Airlines
          src={rossiyaAirlines}
          srcSet={`${rossiyaAirlines2x} 2x`}
          alt=""
        />
      </picture>
    </Header>
    <Destination>
      <div className="row">
        <div className="col-xs-5">
          <DepartureIcon />
          <Text>00:05 — 03:05</Text>
        </div>
        <div className="col-xs-4">
          <ClockIcon />
          <Text>5 ч</Text>
        </div>
        <div className="col-xs-3">
          <Text>Прямой</Text>
        </div>
      </div>
    </Destination>
    <Destination>
      <div className="row">
        <div className="col-xs-5">
          <ArrivalIcon />
          <Text>10:35 — 17:10</Text>
        </div>
        <div className="col-xs-4">
          <ClockIcon />
          <Text>4 ч 35 м</Text>
        </div>
        <div className="col-xs-3">
          <Text>Прямой</Text>
        </div>
      </div>
    </Destination>
  </Card>
);
