import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "./logo.svg";

const LandingLink = styled(Link)`
  display: ${props => (props.onLanding ? "flex" : "none")};
  align-items: center;
  text-decoration: none;
  line-height: 24px;
  font-size: 20px;
  color: #ffffff;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Logo = styled.img`
  margin-right: 12px;
`;

const Title = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;

export default props => (
  <LandingLink onLanding={props.onLanding} to="/">
    <Logo src={logo} alt="aviasales" />
    <Title>aviasales</Title>
  </LandingLink>
);
