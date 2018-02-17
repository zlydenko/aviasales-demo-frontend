import React from "react";
import styled from "styled-components";
import krasnodar from "./cityImages/krasnodar.png";
import barselona from "./cityImages/barselona.png";
import minvodi from "./cityImages/minvodi.png";
import saintpetersburg from "./cityImages/saintpetersburg.png";
import simferopol from "./cityImages/simferopol.png";
import sochi from "./cityImages/sochi.png";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
`;

const Cover = styled.div`
  height: 126px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Caption = styled.div`
  padding-top: 16px;
  padding-bottom: 12px;
  padding-right: 16px;
  padding-left: 16px;
`;

const RouteName = styled.h1`
  font-size: 16px;
  line-height: 20px;
  color: #5b5b5c;
  font-weight: 700;
  margin: 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const RouteCountry = styled.span`
  font-size: 12px;
  line-height: 20px;
  color: #a0b0b9;
  text-transform: uppercase;
  font-weight: 500;
`;

const RoutePrice = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #00bae8;
  font-weight: 400;
  white-space: nowrap;
`;

const RouteDate = styled.span`
  font-size: 12px;
  line-height: 20px;
  color: #a0b0b9;
  font-weight: 500;
`;

const Row = styled.div`
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    margin-bottom: 5px;
  }
`;

export const KrasnodarCard = () => (
  <Container>
    <Cover>
      <img src={krasnodar} alt="" />
    </Cover>
    <Caption>
      <Row>
        <RouteName>Краснодар</RouteName>
        <RoutePrice>Найти от 1 212 &#8381;</RoutePrice>
      </Row>
      <Row>
        <RouteCountry>Россия</RouteCountry>
        <RouteDate>18 марта</RouteDate>
      </Row>
    </Caption>
  </Container>
);

export const SochiCard = () => (
  <Container>
    <Cover>
      <img src={sochi} alt="" />
    </Cover>
    <Caption>
      <Row>
        <RouteName>Сочи (Адлер)</RouteName>
        <RoutePrice>Найти от 1 334 &#8381;</RoutePrice>
      </Row>
      <Row>
        <RouteCountry>Россия</RouteCountry>
        <RouteDate>27 марта</RouteDate>
      </Row>
    </Caption>
  </Container>
);

export const SPetersburgCard = () => (
  <Container>
    <Cover>
      <img src={saintpetersburg} alt="" />
    </Cover>
    <Caption>
      <Row>
        <RouteName>Санкт-Петербург</RouteName>
        <RoutePrice>Найти от 1 508 &#8381;</RoutePrice>
      </Row>
      <Row>
        <RouteCountry>Россия</RouteCountry>
        <RouteDate>19 февраля</RouteDate>
      </Row>
    </Caption>
  </Container>
);

export const MinVodiCard = () => (
  <Container>
    <Cover>
      <img src={minvodi} alt="" />
    </Cover>
    <Caption>
      <Row>
        <RouteName>Минеральные Воды</RouteName>
        <RoutePrice>Найти от 2 074 &#8381;</RoutePrice>
      </Row>
      <Row>
        <RouteCountry>Россия</RouteCountry>
        <RouteDate>13 марта</RouteDate>
      </Row>
    </Caption>
  </Container>
);

export const SimferopolCard = () => (
  <Container>
    <Cover>
      <img src={simferopol} alt="" />
    </Cover>
    <Caption>
      <Row>
        <RouteName>Симферополь (Крым)</RouteName>
        <RoutePrice>Найти от 2 407 &#8381;</RoutePrice>
      </Row>
      <Row>
        <RouteCountry>Крым</RouteCountry>
        <RouteDate>13 марта</RouteDate>
      </Row>
    </Caption>
  </Container>
);

export const BarselonaCard = () => (
  <Container>
    <Cover>
      <img src={barselona} alt="" />
    </Cover>
    <Caption>
      <Row>
        <RouteName>Барселона</RouteName>
        <RoutePrice>Найти от 4 247 &#8381;</RoutePrice>
      </Row>
      <Row>
        <RouteCountry>Испания</RouteCountry>
        <RouteDate>24 марта</RouteDate>
      </Row>
    </Caption>
  </Container>
);
