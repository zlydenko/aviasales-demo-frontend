import React from "react";
import styled from "styled-components";
import { CheepestTicket, FastestTicket, BestTicket, Card } from "./styled";

import share from "./share.svg";
import departure from "./departure.svg";
import arrival from "./arrival.svg";
import expandIcon from "./expandIcon.svg";

import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

const durationCalc = minutes =>
  ((minutes / 60) ^ 0) + " ч " + minutes % 60 + " м ";

const currencyOptions = {
  style: "currency",
  currency: "RUB",
  currencyDisplay: "symbol",
  minimumFractionDigits: 0
};

// const DepartureIcon = () => <Icon src={departure} alt="" />;
// const ArrivalIcon = () => <Icon src={arrival} alt="" />;
// const ClockIcon = () => <Icon src={clock} alt="" />;

const AdditionalInfo = styled.div`
  padding: 0px 23px 32px 18px;
  flex: 0 0 25%;
`;

const BuyBtn = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
  padding-left: 16px;
  background-color: #ff6d00;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

const ButtonText = styled.p`
  margin: 0px;
  margin-top: 2px;
`;

const SellerName = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #a0b0b9;
  margin-top: 8px;
  text-align: center;
`;

const TicketsLeft = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #ff654e;
`;

const AdditionalSellers = styled.div`
  color: #59bce5;
  font-size: 12px;
  line-height: 18px;
`;
const AdditionalSeller = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0px;
  margin-bottom: 4px;
`;
const AdditionalSellersPrice = styled.span`
  font-weight: 500;
`;
const AdditionalSellersCounter = styled.p`
  font-weight: 500;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const AirlinesLogo = styled.img``;
const CharterandLink = styled.div``;
const Charter = styled.div`
  border: 1px solid #2196f3;
  border-radius: 15px;
  color: #23a9f6;
  padding: 4px 11px;
  text-transform: uppercase;
  display: inline;
  margin-right: 13px;
`;
const Info = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
  border-left: 1px solid #dddddd;
`;
const AirlinesLogoSmall = styled.img`
  padding: 4px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-right: 12px;
`;

const Main = styled.main``;
const Route = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
  padding-top: 21px;

  &:first-child {
    padding-top: 0px;
    border-bottom: 1px dashed #dddddd;
  }
`;
const Departure = styled.div``;
const Time = styled.p`
  font-size: 28px;
  line-height: 40px;
  color: #323333;
  margin: 0px;
`;

const City = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: #9ca5a8;
  margin: 0px;
`;
const FullDate = City.extend`
  font-weight: 400;
`;
const RouteScheme = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: auto;
  flex-grow: 1;
  margin-right: 12px;
  margin-left: 12px;
`;

const DurationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Duration = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #a0b0b9;
`;

const RouteRange = () => (
  <Range>
    <Circle />
    <Line />
    <Circle />
  </Range>
);

const Range = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Circle = styled.div`
  display: inline-block;
  width: 11px;
  height: 11px;
  border: 1px solid #a0b0b9;
  border-radius: 50px;
`;
const Line = styled.div`
  width: 100%;
  background-color: #a0b0b9;
  height: 1px;
  margin-right: 2px;
  margin-left: 2px;
`;

const IATACodes = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  line-height: 18px;
  color: #4a4a4a;
  font-weight: 500;
`;

const Arrival = Departure.extend`
& {City} {
  text-align: right;
}

& {FullDate} {
  text-align: right;
}
`;

const Expand = styled.button`
  border: none;
  background: #edf5f7 center no-repeat;
  background-image: url(${expandIcon});
  padding: 10px;
`;

export default props => (
  <div>
    <div className="hidden-md hidden-lg hidden-xl">
      {props.data.cheepest && (
        <CheepestTicket>
          Самый дешевый{" "}
          <span role="img" aria-label="самый дешевый билет">
            🤑
          </span>
        </CheepestTicket>
      )}
      {props.data.fastest && (
        <FastestTicket>
          Самый быстрый{" "}
          <span role="img" aria-label="самый дешевый билет">
            ⚡️
          </span>
        </FastestTicket>
      )}
      {props.data.best && (
        <BestTicket>
          Лучший билет{" "}
          <span role="img" aria-label="самый дешевый билет">
            😍
          </span>
        </BestTicket>
      )}
    </div>
    <Card>
      <AdditionalInfo>
        {props.data.buyInfo.ticketsLeft && (
          <TicketsLeft>
            Осталось {props.data.buyInfo.ticketsLeft} билета
          </TicketsLeft>
        )}
        <BuyBtn>
          <ButtonText>Купить</ButtonText>
          <ButtonText>
            за{" "}
            {props.data.buyInfo.price.toLocaleString("ru-RU", currencyOptions)}
          </ButtonText>
        </BuyBtn>
        <SellerName>на {props.data.buyInfo.ticketSeller}</SellerName>
        {props.data.additionalOffers && (
          <AdditionalSellers>
            {props.data.additionalOffers.map((ticket, key) => {
              if (Object.keys(ticket).length !== 0) {
                return (
                  <AdditionalSeller key={key}>
                    {ticket.ticketSeller}

                    <AdditionalSellersPrice>
                      {ticket.price.toLocaleString("ru-RU", currencyOptions)}
                    </AdditionalSellersPrice>
                  </AdditionalSeller>
                );
              }
            })}

            <AdditionalSellersCounter>
              + Ещё {props.data.additionalOffers.length - 2} предложения
            </AdditionalSellersCounter>
          </AdditionalSellers>
        )}
      </AdditionalInfo>
      <Info>
        <Header>
          {props.data.airlines.length === 1 ? (
            <AirlinesLogo src={props.data.airlines} alt="" />
          ) : (
            <div>
              {props.data.airlines.map((logo, key) => (
                <AirlinesLogoSmall src={logo} key={key} />
              ))}
            </div>
          )}
          <CharterandLink>
            {props.data.charter && <Charter>чартер</Charter>}
            <img src={share} alt="" />
          </CharterandLink>
        </Header>
        <Main>
          <Route>
            <Departure>
              <Time>
                {format(props.data.to.departure.timestamp, "HH:mm", {
                  locale: ruLocale
                })}
              </Time>
              <City>{props.data.to.departure.city}</City>
              <FullDate>
                {format(props.data.to.departure.timestamp, "D MMM YYYY, dd", {
                  locale: ruLocale
                })}
              </FullDate>
            </Departure>
            <RouteScheme>
              <DurationContainer>
                <img src={departure} alt="" />
                <Duration>
                  Всего: {durationCalc(props.data.to.duration)}
                </Duration>
                <img src={arrival} alt="" />
              </DurationContainer>
              <RouteRange />
              <IATACodes>
                <span>{props.data.to.departure.IATA}</span>
                <span>{props.data.to.arrival.IATA}</span>
              </IATACodes>
            </RouteScheme>
            <Arrival>
              <Time>
                {format(props.data.to.arrival.timestamp, "HH:mm", {
                  locale: ruLocale
                })}
              </Time>
              <City>{props.data.to.arrival.city}</City>
              <FullDate>
                {format(props.data.to.arrival.timestamp, "D MMM YYYY, dd", {
                  locale: ruLocale
                })}
              </FullDate>
            </Arrival>
          </Route>
          <Route>
            <Departure>
              <Time>
                {format(props.data.from.departure.timestamp, "HH:mm", {
                  locale: ruLocale
                })}
              </Time>
              <City>{props.data.from.departure.city}</City>
              <FullDate>
                {format(props.data.from.departure.timestamp, "D MMM YYYY, dd", {
                  locale: ruLocale
                })}
              </FullDate>
            </Departure>
            <RouteScheme>
              <DurationContainer>
                <img src={departure} alt="" />
                <Duration>
                  Всего: {durationCalc(props.data.from.duration)}
                </Duration>
                <img src={arrival} alt="" />
              </DurationContainer>
              <RouteRange />
              <IATACodes>
                <span>{props.data.from.departure.IATA}</span>
                <span>{props.data.from.arrival.IATA}</span>
              </IATACodes>
            </RouteScheme>
            <Arrival>
              <Time>
                {format(props.data.from.arrival.timestamp, "HH:mm", {
                  locale: ruLocale
                })}
              </Time>
              <City>{props.data.from.arrival.city}</City>
              <FullDate>
                {format(props.data.from.arrival.timestamp, "D MMM YYYY, dd", {
                  locale: ruLocale
                })}
              </FullDate>
            </Arrival>
          </Route>
        </Main>
      </Info>
      <Expand />
    </Card>
  </div>
);
