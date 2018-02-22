import React from "react";

import { Header, Info, Back, Title, Text, Currency } from "./styled";
import { Link } from "react-router-dom";
import back from "./back.svg";

export default () => (
  <Header>
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
  </Header>
);
