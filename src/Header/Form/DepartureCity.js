import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";

const Wrapper = styled.div`
  display: flex;
  background: #ffffff;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  position: relative;
  @media (min-width: 768px) {
    border-top-right-radius: 4px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  padding: 18px 76px 18px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
  ::placeholder {
    color: #a0b0b9;
  }
`;

const Abbr = styled.div`
  position: absolute;
  right: 44px;
  padding: 18px 0;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #a0b0b9;
`;

const ActionButton = styled.button`
  position: absolute;
  right: 0;
  background: transparent;
  border: none;
  padding: 0px;
  width: 44px;
  height: 100%;
`;

const Img = styled.img`
  width: 16px;
  object-fit: contain;
`;

const SwapCities = () => (
  <ActionButton>
    <Img src={arrow} alt="Поменять города местами" />
  </ActionButton>
);

export default () => (
  <Wrapper>
    <Input
      type="text"
      name="cityFrom"
      placeholder="Укажите город"
      defaultValue="Москва"
    />
    <Abbr>MOW</Abbr>
    <SwapCities />
  </Wrapper>
);
