import React from "react";
import styled from "styled-components";

import Nav from "./Nav";
import Form from "./Form";

const Header = styled.header`
  background: linear-gradient(
    96.7deg,
    #00b0de -47.94%,
    #01aedc -44.27%,
    #02abdb -40.55%,
    #02abdb -36.86%,
    #02abdb -36.65%,
    #196ebd 51.35%
  );
  height: ${props => (props.onLanding ? "100vh" : "auto")};
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  @media (min-width: 768px) {
    margin-bottom: 8px;
    line-height: 48px;
    font-size: 32px;
  }
  @media (min-width: 1200px) {
    font-size: 40px;
  }
`;

const SubTitle = styled.p`
  display: none;

  @media (min-width: 768px) {
    margin-top: 8px;
    display: block;
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

const FormWrapper = styled.div`
  min-height: ${props => (props.onLanding ? "100vh" : "0")};
  display: ${props => (props.onLanding ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  padding: ${props => (props.onLanding ? "24px 0 88px" : "32px 0")};

  @media (min-width: 768px) {
    display: flex;
  }
`;

export default props => {
  const onLanding = props.location.pathname === "/";

  return (
    <Header onLanding={onLanding}>
      <div className="container">
        <Nav onLanding={onLanding} />
        <FormWrapper onLanding={onLanding}>
          {onLanding && (
            <div>
              <Title>Поиск дешевых авиабилетов</Title>
              <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
            </div>
          )}

          <div className="row center-md">
            <div className={onLanding ? "col-xs-12 col-md-10" : "col-xs-12"}>
              <Form onLanding={onLanding} />
            </div>
          </div>
        </FormWrapper>
      </div>
    </Header>
  );
};
