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
  PrimaryText,
  SearchBtn,
  Img,
  LinktoSearch
} from "./styled";

import arrow from "./arrow.svg";
import calendar from "./calendar.svg";
import plane from "./plane.svg";

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

export default () => (
  <form>
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
    <LinktoSearch to="/result">
      <SearchBtn>
        Найти билеты
        <Img src={plane} alt="Найти билеты" />
      </SearchBtn>
    </LinktoSearch>
  </form>
);
