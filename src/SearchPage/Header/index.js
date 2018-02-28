import React from "react";

import {
  Header,
  Info,
  Back,
  Title,
  Text,
  Currency,
  Container,
  Line
} from "./styled";

import { Link } from "react-router-dom";
import back from "./back.svg";

import { Logotype } from "../../Header";
import Search from "../../Header/Search";

export default () => (
  <Header>
    <div className="container">
      <div className="hidden-md hidden-lg hidden-xl">
        <Container>
          <Info>
            <Link to="/">
              <Back src={back} alt="" />
            </Link>
            <div>
              <Title>Москва — Барселона</Title>
              <Text>24 фев — 3 март, 1 пассажир</Text>
            </div>
          </Info>
          <Currency>RUB</Currency>
        </Container>
      </div>
      <div className="hidden-sm hidden-xs">
        <div className="col-md-12">
          <Line>
            <Logotype />
            <Currency>RUB</Currency>
          </Line>
          <Line />
        </div>
      </div>
    </div>
  </Header>
);
