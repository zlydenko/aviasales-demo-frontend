import React from "react";

import { Header, Info, Back, Title, Text, Currency } from "./styled";
import back from "./back.svg";

export default () => (
  <Header>
    <Info>
      <Back src={back} alt="" />
      <div>
        <Title>Москва — Барселона</Title>
        <Text>24 фев — 3 март, 1 пассажир</Text>
      </div>
    </Info>
    <Currency>RUB</Currency>
  </Header>
);
