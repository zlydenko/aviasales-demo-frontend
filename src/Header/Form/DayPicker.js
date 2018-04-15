import React from "react";
import styled from "styled-components";
import DayPicker, { DateUtils } from "react-day-picker/DayPicker";
import "./DayPicker.css";

import { FormattedNumber } from "react-intl";

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

const WEEKDAYS_LONG = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];

const WEEKDAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const Day = styled.div`
  min-width: 48px;
  min-height: 48px;
`;

const DateCell = styled.div`
  position: relative;
  z-index: 10;
  padding: 8px 0 0;
`;

const Price = styled.aside`
  position: relative;
  z-index: 100;
  font-weight: 500;
  line-height: 20px;
  font-size: 10px;
  text-align: center;
  color: #00c455;
`;

const prices = {
  24: 43606,
  25: 43606,
  26: 41920,
  27: 42140,
  28: 42130
};

const renderDay = (day, modifiers) => {
  const getDay = day.getDate();

  return (
    <Day>
      <DateCell>{getDay}</DateCell>
      {prices[getDay] && (
        <Price>
          <FormattedNumber
            value={prices[getDay]}
            minimumFractionDigits={0}
            maximumFractionDigits={2}
          />
        </Price>
      )}
    </Day>
  );
};

export default class extends React.Component {
  handleDateClick = (day, { disabled }) => {
    if (!disabled) {
      this.props.onDayClick(new Date(day));
    }
  };

  render() {
    const from = this.props.dateFrom;
    const to = this.props.dateTo;
    const now = new Date();

    return (
      <DayPicker
        locale="ru"
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        renderDay={renderDay}
        firstDayOfWeek={1}
        disabledDays={{ before: now }}
        fromMonth={now}
        selectedDays={from}
        initialMonth={from || now}
        onDayClick={this.handleDateClick}
      />
    );
  }
}
