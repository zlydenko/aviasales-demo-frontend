import React from "react";
import styled from "styled-components";

import back from "./back.svg";

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
  justify-content: flex-start;
`;

const DestinationTitle = styled.p`
  margin: 0px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
`;

const Text = styled.p`
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
  background: transparent;
  padding: 6px 12px;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 26px;
`;

const Info = styled.div`
  margin-right: 47px;
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
    <Icon src={back} alt="" />
    <Info>
      <DestinationTitle>Москва — Барселона</DestinationTitle>
      <Text>24 фев — 3 март, 1 пассажир</Text>
    </Info>
    <Currency>RUB</Currency>
  </Header>
);

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <Head />
        <Main>
          <GoUp>Наверх</GoUp>
        </Main>
      </div>
    );
  }
}
