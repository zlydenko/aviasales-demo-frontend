import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { DateUtils } from "react-day-picker/DayPicker";
import DayPicker from "./DayPicker";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import calendar from "./calendar.svg";

const Wrapper = styled.div`
  position: relative;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
`;

const Button = styled.button`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding: 18px 40px 18px 16px;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: "#a0b0b9";
  border: none;
  background: url(${calendar}) no-repeat center right 16px;
  background-color: #ffffff;

  @media (min-width: 768px) {
    border-radius: 0 0 0 4px;
  }

  @media (min-width: 1200px) {
    border-radius: 0;
  }
`;

const CalendarDropdown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff;
  padding: 16px 24px;
  z-index: 100;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const Calendar = onClickOutside(CalendarDropdown);

export default class extends React.Component {
  state = {
    opened: false
  };

  toggleOpen = () => {
    this.setState({ opened: true });
  };

  toggleClose = () => {
    this.setState({ opened: false });
  };

  handleDayClick = day => {
    this.toggleClose();
    this.props.onChange(day);
  };

  render() {
    const { dateFrom, dateTo } = this.props;
    const chosenDate = dateFrom
      ? format(dateFrom, "D MMMM, dd", { locale: ru })
      : "Туда";

    return (
      <Wrapper>
        <Button onClick={this.toggleOpen} type="button">
          {chosenDate}
        </Button>
        {this.state.opened && (
          <Calendar handleClickOutside={this.toggleClose}>
            <DayPicker
              dateFrom={dateFrom}
              dateTo={dateTo}
              onDayClick={this.handleDayClick}
            />
          </Calendar>
        )}
      </Wrapper>
    );
  }
}
