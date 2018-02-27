import React from "react";
import styled from "styled-components";
import expandIcon from "./expandIcon.svg";
import checkmark from "./checkmark.svg";

const Container = styled.div`
  min-height: 500px;
  background-color: #fff;
  border-radius: 4px;
`;

const TitleWrapper = styled.div`
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 16px;
  display: flex;
  align-content: center;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: #5b5b5c;
`;

const Expand = styled.button`
  cursor: pointer;
  background-image: url(${expandIcon});
  background-position: center center;
  background-repeat: no-repeat;
  background-color: inherit;
  border: none;
  margin-right: 8px;
`;

const List = styled.div`
  text-align: left;
  font-size: 12px;
  line-height: 36px;
  color: #4a4a4a;
`;
const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
const Checkbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid ${props => (props.checked ? "#00ACE2" : "#a0b0b9")};
  border-radius: 4px;
  background-color: ${props => (props.checked ? "#E1F8FF" : "inherit")};
  background-image: ${props => (props.checked ? `url(${checkmark})` : "none")};
  background-position: center center;
  background-repeat: no-repeat;
`;
const Price = styled.span`
  text-align: right;
`;

export default () => (
  <Container>
    <TitleWrapper>
      <Expand />
      <span>пересадки</span>
    </TitleWrapper>
    <List>
      <Option>
        <div>
          <Checkbox />
          <span>Все</span>
        </div>
      </Option>
      <Option>
        <div>
          <Checkbox checked />
          <span>Без пересадок</span>
        </div>
        <Price>7 712 ₽</Price>
      </Option>
      <Option>
        <div>
          <Checkbox />
          <span>1 пересадка</span>
        </div>
        <Price>11 150 ₽</Price>
      </Option>
      <Option>
        <div>
          <Checkbox />
          <span>2 пересадки</span>
        </div>
        <Price>16 821 ₽</Price>
      </Option>
      <Option>
        <div>
          <Checkbox />
          <span>3 пересадки</span>
        </div>
        <Price>23 986 ₽</Price>
      </Option>
    </List>
  </Container>
);
