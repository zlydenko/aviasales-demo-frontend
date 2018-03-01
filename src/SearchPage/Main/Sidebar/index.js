import React from "react";
import styled from "styled-components";

import DropdownList from "./DropdownList";
import Checkbox from "./Checkbox";
import Range from "./Range";

import plane from "./plane.svg";

const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
`;

const Subtitle = styled.h4`
  margin: 0px;
  font-size: 12px;
  line-height: 18px;
  color: #323333;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  margin-right: 5px;
  margin-left: 5px;
`;

const RangeWrapper = styled.li`
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export default () => (
  <Container>
    <DropdownList title="пересадки" opened>
      <li>
        <Checkbox id={"all"} label={"Все"} />
      </li>
      <li>
        <Checkbox id={"no-transfer"} label={"Без пересадок"} price={7712} />
      </li>
      <li>
        <Checkbox id={"one-transfer"} label={"1 пересадка"} price={11150} />
      </li>
      <li>
        <Checkbox id={"two-transfers"} label={"2 пересадки"} price={16821} />
      </li>
      <li>
        <Checkbox id={"three-transfers"} label={"3 пересадки"} price={23986} />
      </li>
    </DropdownList>

    <DropdownList title="время вылета и прибытия" opened>
      <RangeWrapper>
        <Subtitle>
          Москва
          <Img src={plane} alt="" />
          Барселона
        </Subtitle>
        <Range
          title="Вылет из Москвы"
          from={1519423500000}
          to={1519508700000}
        />
        <Range
          title="Прибытие в Барселону"
          from={1519434300000}
          to={1519645800000}
        />
      </RangeWrapper>
      <RangeWrapper>
        <Subtitle>
          Барселона
          <Img src={plane} alt="" />
          Москва
        </Subtitle>
        <Range
          title="Вылет из Барселоны"
          from={1519423500000}
          to={1519508700000}
        />
        <Range
          title="Прибытие в Москву"
          from={1519434300000}
          to={1519645800000}
        />
      </RangeWrapper>
    </DropdownList>
    <DropdownList title="багаж" />
    <DropdownList title="длительность пересадки" />
    <DropdownList title="время в пути" opened>
      <RangeWrapper>
        <Subtitle>
          Москва
          <Img src={plane} alt="" />
          Барселона
        </Subtitle>
        <Range durationFrom={15600} durationTo={175800} />
      </RangeWrapper>
      <RangeWrapper>
        <Subtitle>
          Барселона
          <Img src={plane} alt="" />
          Москва
        </Subtitle>
        <Range durationFrom={15000} durationTo={148800} />
      </RangeWrapper>
    </DropdownList>
    <DropdownList title="авиакомпании" counter={43} />
    <DropdownList title="аэропорты" />
    <DropdownList title="аэропорт пересадки" counter={71} />
    <DropdownList title="агенства" counter={26} />
  </Container>
);
