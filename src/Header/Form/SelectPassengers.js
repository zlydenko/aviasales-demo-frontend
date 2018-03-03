import React from "react";
import styled from "styled-components";

import dropdown from "./dropdown.svg";

const Button = styled.button`
  padding: 18px 32px 18px 16px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
  border: none;
  border-radius: 0 0 4px 4px;
  background: url(${dropdown}) no-repeat center right 16px;
  background-color: #ffffff;

  @media (min-width: 768px) {
    border-radius: ${props => (props.onLanding ? "0 0 4px 0" : "0px")};
  }
  @media (min-width: 1200px) {
    border-radius: 0 4px 4px 0;
  }
`;

const AdditionalInfo = styled.span`
  color: #a0b0b9;
`;

export default () => (
  <Button type="button">
    1 пассажир, <AdditionalInfo>эконом</AdditionalInfo>
  </Button>
);
