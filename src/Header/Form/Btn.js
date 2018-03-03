import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import plane from "./plane.svg";

const Img = styled.img`
  margin-left: 8px;
`;

const Wrapper = styled.div`
  padding: 2px 1px 0;
  flex-basis: 100%;
  padding-left: 8px;

  @media (min-width: 768px) {
    flex-basis: ${props => (props.onLanding ? "100%" : "25%")};
    padding-left: 1px;
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => (props.onLanding ? "100%" : "16%")};
    flex-grow: 1;
    padding-left: ${props => (props.onLanding ? "" : "8px")};
  }
`;

const Search = styled(Link)`
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 48px;
  font-weight: 900;
  line-height: normal;
  font-size: 24px;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  background-color: #ff9241;
  text-decoration: none;
  text-align: center;

  @media (min-width: 768px) {
    width: ${props => (props.onLanding ? "fit-content" : "100%")};
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: ${props => (props.onLanding ? "48px" : "16px")};
    padding-right: ${props => (props.onLanding ? "48px" : "16px")};
    font-size: ${props => (props.onLanding ? "28px" : "20px")};
    margin-top: ${props => (props.onLanding ? "32px" : "0px")};
    border-radius: ${props => (props.onLanding ? "0 0 4px 0" : "4px")};
  }

  @media (min-width: 1200px) {
    margin-top: ${props => (props.onLanding ? "48px" : "0px")};
    border-radius: 4px;
  }

  &:hover,
  &:focus {
    background: #fca15f;
  }
`;

export default props => {
  return (
    <Wrapper onLanding={props.onLanding}>
      <Search onLanding={props.onLanding} to="/result">
        <span>Найти билеты</span>
        {props.onLanding && <Img src={plane} alt="Найти билеты" />}
      </Search>
    </Wrapper>
  );
};
