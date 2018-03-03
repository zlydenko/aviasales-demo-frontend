import React from "react";
import styled from "styled-components";

import calendar from "./calendar.svg";

const Wrapper = styled.div`
  position: relative;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
`;

const Button = styled.button`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding: 18px 40px 18px 16px;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: "#a0b0b9";
  border: none;
  background: url(${calendar}) no-repeat center right 16px;
  background-color: #ffffff;

  @media (min-width: 768px) {
    border-radius: 0 0 0 4px;
  }

  @media (min-width: 1200px) {
    border-radius: 0;
  }
`;

export default () => (
  <Wrapper>
    <Button type="button">Туда</Button>
  </Wrapper>
);
