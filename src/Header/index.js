import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import aero from "./aero.svg";
import arrow from "./arrow.svg";
import calendarIcon from "./calendar.svg";
import dropdownArrow from "./dropdown-arrow.svg";

const Wrapper = styled.header`
  min-height: 100vh;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  padding-top: 12px;
  padding-left: 6px;
  padding-right: 6px;
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #fff;
`;

const Input = styled.input`
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 20px;
  padding: 18px 16px;
  width: 100%;
  border: none;
  margin-bottom: 2px;

  &::placeholder {
    color: #a0b0b9;
  }
`;

const DepartureInput = Input.extend`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-right: 83px;
`;

const DateInput = styled.div`
  display: inline-block;
  position: relative;
  background-color: #ffffff;
  color: #a0b0b9;
  font-size: 16px;
  line-height: 20px;
  padding: 18px 16px;
  margin-bottom: 2px;
  width: calc((100%/2) - 1px);
  cursor: pointer;

  &:nth-child(2n) {
    margin-right: 2px;
  }
`;

const CalendarIcon = styled.img`
  position: absolute;
  right: 16px;
  top: 15px;
`;

const PassengersDropdown = styled.div`
  margin-bottom: 16px;
  background-color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  padding: 18px 16px;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  cursor: pointer;
`;

const ArrowIcon = styled.img`
  position: absolute;
  right: 16px;
  top: 23px;
`;

const SearchForm = styled.form`
  margin-top: 47px;
  width: 100%;
`;

const Btn = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  text-align: center;
  width: 100%;
  padding: 14px;
`;

const SearchBtn = Btn.extend`
  background-color: #ff9241;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DepartureAbbr = styled.label`
  position: absolute;
  right: 43px;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 20px;
  color: #a0b0b9;
  cursor: text;
`;

const DepartureContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  position: absolute;
  right: 16px;
  cursor: pointer;
`;

const QuantityText = styled.span`
  color: inherit;

  &::after {
    content: ", ";
  }
`;

const TicketClassText = styled.span`
  color: #a0b0b9;
`;

const PlaneIcon = styled.img`
  margin-left: 16px;
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <img src={logo} alt="aviasales logo" />
            </div>
            <div className="col-xs-12">
              <SearchForm>
                <Title>Поиск дешевых авиабилетов</Title>
                <DepartureContainer>
                  <DepartureInput
                    type="text"
                    defaultValue="Москва"
                    placeholder="Город вылета"
                  />
                  <DepartureAbbr>Mow</DepartureAbbr>
                  <Icon src={arrow} alt="Swap cities icon" />
                </DepartureContainer>
                <Input type="text" placeholder="Город прибытия" />
                <DateInput>
                  <span>Туда</span>
                  <CalendarIcon src={calendarIcon} alt="" />
                </DateInput>
                <DateInput>
                  <span>Обратно</span>
                  <CalendarIcon src={calendarIcon} alt="" />
                </DateInput>
                <PassengersDropdown>
                  <QuantityText>1 пассажир</QuantityText>
                  <TicketClassText>эконом</TicketClassText>
                  <ArrowIcon src={dropdownArrow} alt="" />
                </PassengersDropdown>
                <SearchBtn>
                  <span>Найти билеты</span>
                  <PlaneIcon src={aero} alt="aeroplane icon" />
                </SearchBtn>
              </SearchForm>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
