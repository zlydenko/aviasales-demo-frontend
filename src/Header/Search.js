import React from "react";
import {
  Layout,
  Inputs,
  DepartureCity,
  Input,
  Abbr,
  ActionButton,
  ArrivalCity,
  DateFields,
  DateInput,
  DepartureDate,
  ArrivalDate,
  SelectPassenger,
  PassengersDropdown,
  AdditionalText,
  PrimaryText
} from "./styled";

import arrow from "./arrow.svg";
import calendar from "./calendar.svg";

const SwapCities = () => (
  <ActionButton>
    <img src={arrow} alt="Поменять города местами" />
  </ActionButton>
);

const EditDate = () => (
  <ActionButton>
    <img src={calendar} alt="Изменить дату" />
  </ActionButton>
);

const Search = () => (
  <Layout>
    <Inputs>
      <DepartureCity>
        <Input
          type="text"
          name="from"
          placeholder="Укажите город"
          defaultValue="Москва"
        />
        <Abbr>MOW</Abbr>
        <SwapCities />
      </DepartureCity>
    </Inputs>
    <Inputs>
      <ArrivalCity>
        <Input
          type="text"
          name="to"
          placeholder="Город прибытия"
          defaultValue=""
        />
      </ArrivalCity>
    </Inputs>
    <DateFields>
      <DateInput>
        <DepartureDate>
          <Input
            date
            type="text"
            name="date-from"
            placeholder="Туда"
            defaultValue=""
          />
          <EditDate />
        </DepartureDate>
      </DateInput>
      <DateInput>
        <ArrivalDate>
          <Input
            date
            type="text"
            name="date-to"
            placeholder="Обратно"
            defaultValue=""
          />
          <EditDate />
        </ArrivalDate>
      </DateInput>
    </DateFields>
    <Inputs>
      <SelectPassenger>
        <PassengersDropdown>
          <PrimaryText>
            1 пассажир, <AdditionalText>эконом</AdditionalText>
          </PrimaryText>
        </PassengersDropdown>
      </SelectPassenger>
    </Inputs>
  </Layout>
);

export default Search;
