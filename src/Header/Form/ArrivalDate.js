import React from "react";
import styled from "styled-components";

import calendar from "./calendar.svg";

const Wrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding: 18px 40px 18px 16px;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  border: none;
  background: url(${calendar}) no-repeat center right 16px;
  background-color: #ffffff;
`;

export default () => <Wrapper>Обратно</Wrapper>;
