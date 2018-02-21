import React from "react";
import styled from "styled-components";

import Footer from "../MainPage/Footer";

import back from "./back.svg";
import rossiyaAirlines from "./rossiya.png";
import rossiyaAirlines2x from "./rossiya2x.png";
import departure from "./departure.svg";
import arrival from "./arrival.svg";
import clock from "./clock.svg";

const Header = styled.header`
  padding: 10px 6px;
  background: linear-gradient(
    100deg,
    #00b0de -46.32%,
    #01aedc -42.65%,
    #02abdb -38.93%,
    #02abdb -35.24%,
    #02abdb -35.02%,
    #196ebd 52.98%
  );
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DestinationTitle = styled.p`
  display: inline;
  margin: 0px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
`;

const Text = styled.p`
  display: inline-block;
  margin: 0px;
  color: #fff;
  font-size: 12px;
  line-height: 16px;
`;

const Button = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  border: 2px solid #fff;
  border-radius: 100px;
  text-align: center;
`;

const Currency = Button.extend`
  display: block;
  background: transparent;
  padding: 6px 12px;
`;

const Back = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 26px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Main = styled.main`
  background-color: #eaeaea;
  padding-top: 8px;
  padding-bottom: 16px;
`;

const GoUp = Button.extend`
  font-weight: 900;
  background-color: rgba(0, 172, 226, 0.5);
  border: none;
  padding: 6px 16px;
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

const Head = () => (
  <Header>
    <Info>
      <Back src={back} alt="" />
      <div>
        <DestinationTitle>Москва — Барселона</DestinationTitle>
        <Text>24 фев — 3 март, 1 пассажир</Text>
      </div>
    </Info>
    <Currency>RUB</Currency>
  </Header>
);

// cards styles

const Card = styled.div`
  background-color: #fff;
  padding-top: 12px;
  padding-bottom: 14px;
  padding-right: 6px;
  padding-left: 6px;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardText = styled.p`
  display: inline;
  color: #4a4a4a;
`;

const Price = styled.p`
  color: #ff9241;
  display: inline;
  font-size: 22px;
  line-height: 26px;
`;

const AirlinesLogo = styled.img`
  width: 99px;
  height: 36px;
`;

const Icon = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;

const DepartureIcon = () => <Icon src={departure} alt="" />;
const ArrivalIcon = () => <Icon src={arrival} alt="" />;
const ClockIcon = () => <Icon src={clock} alt="" />;

const Destination = styled.div`
  margin-bottom: 10px;
`;

const Cards = () => (
  <Card>
    <CardHeader>
      <Price>7 712 ₽</Price>
      <picture>
        <AirlinesLogo
          src={rossiyaAirlines}
          srcSet={`${rossiyaAirlines2x} 2x`}
          alt=""
        />
      </picture>
    </CardHeader>
    <Destination>
      <div className="row">
        <div className="col-xs-5">
          <DepartureIcon />
          <CardText>00:05 — 03:05</CardText>
        </div>
        <div className="col-xs-4">
          <ClockIcon />
          <CardText>5 ч</CardText>
        </div>
        <div className="col-xs-3">
          <CardText>Прямой</CardText>
        </div>
      </div>
    </Destination>
    <Destination>
      <div className="row">
        <div className="col-xs-5">
          <ArrivalIcon />
          <CardText>10:35 — 17:10</CardText>
        </div>
        <div className="col-xs-4">
          <ClockIcon />
          <CardText>4 ч 35 м</CardText>
        </div>
        <div className="col-xs-3">
          <CardText>Прямой</CardText>
        </div>
      </div>
    </Destination>
  </Card>
);

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Main>
          <GoUp>Наверх</GoUp>
          <Cards />
        </Main>
        <Footer />
      </div>
    );
  }
}
