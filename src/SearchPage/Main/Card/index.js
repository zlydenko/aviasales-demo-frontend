import React from "react";
import {
  Card,
  Header,
  Text,
  Price,
  Destination,
  Icon,
  CheepestTicket,
  FastestTicket,
  BestTicket,
  BigLogo,
  SmallLogo
} from "./styled";

import departure from "./departure.svg";
import arrival from "./arrival.svg";
import clock from "./clock.svg";

const DepartureIcon = () => <Icon src={departure} alt="" />;
const ArrivalIcon = () => <Icon src={arrival} alt="" />;
const ClockIcon = () => <Icon src={clock} alt="" />;

export default props => (
  <div>
    {props.cheepest && (
      <CheepestTicket>
        Самый дешевый{" "}
        <span role="img" aria-label="самый дешевый билет">
          🤑
        </span>
      </CheepestTicket>
    )}
    {props.fastest && (
      <FastestTicket>
        Самый быстрый{" "}
        <span role="img" aria-label="самый дешевый билет">
          ⚡️
        </span>
      </FastestTicket>
    )}
    {props.best && (
      <BestTicket>
        Лучший билет{" "}
        <span role="img" aria-label="самый дешевый билет">
          😍
        </span>
      </BestTicket>
    )}
    <Card>
      <Header>
        <Price>{props.price} &#8381;</Price>
        <picture>
          {props.airlines.length < 2 ? (
            <BigLogo src={props.airlines} alt="" />
          ) : (
            <div>
              <SmallLogo src={props.airlines[0]} alt="" />
              <SmallLogo src={props.airlines[1]} alt="" />
            </div>
          )}
        </picture>
      </Header>
      <Destination>
        <div className="row">
          <div className="col-xs-5">
            <DepartureIcon />
            <Text>{props.toTime}</Text>
          </div>
          <div className="col-xs-4">
            <ClockIcon />
            <Text>{props.toDuration}</Text>
          </div>
          <div className="col-xs-3">
            <Text>{props.toType}</Text>
          </div>
        </div>
      </Destination>
      <Destination>
        <div className="row">
          <div className="col-xs-5">
            <ArrivalIcon />
            <Text>{props.fromTime}</Text>
          </div>
          <div className="col-xs-4">
            <ClockIcon />
            <Text>{props.fromDuration}</Text>
          </div>
          <div className="col-xs-3">
            <Text>{props.fromType}</Text>
          </div>
        </div>
      </Destination>
    </Card>
  </div>
);
