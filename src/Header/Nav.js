import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import back from "./back.svg";

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  @media (min-width: 1200px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const Back = styled(Link)`
  display: block;
  margin: 0;
  padding: 12px 16px 12px 0;
  text-align: left;
  vertical-align: center;
  border: none;
  background: transparent;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Filter = styled.div`
  margin-left: 8px;
  magrin-right: 16px;
  flex-grow: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Destination = styled.h1`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0px;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
`;

const Additional = styled.aside`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0px;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #ffffff;
`;

const Currency = styled.button`
  margin-left: auto;
  padding: 6px 16px;
  background: transparent;
  border: 2px solid #ffffff;
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 8px 20px;
    border: 1px solid #fff;
  }
`;

export default props => (
  <Nav>
    <Logo onLanding={props.onLanding} />

    {!props.onLanding && (
      <Info>
        <Back to="/">
          <img src={back} alt="Вернуться на главную" />
        </Back>
        <Filter>
          <Destination>Москва — Барселона</Destination>
          <Additional>24 фев — 3 март, 1 пассажир</Additional>
        </Filter>
        <Currency>rub</Currency>
      </Info>
    )}
  </Nav>
);
