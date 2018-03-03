import React from "react";
import styled from "styled-components";

import DepartureCity from "./DepartureCity";
import ArrivalCity from "./ArrivalCity";
import DepartureDate from "./DepartureDate";
import ArrivalDate from "./ArrivalDate";
import SelectPassengers from "./SelectPassengers";
import Btn from "./Btn";

const Form = styled.form`
  display: ${props => (props.onLanding ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -1px;
  margin-right: -1px;
  margin-top: -2px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const City = styled.div`
  min-width: 0;
  padding: 2px 1px 0;
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => (props.onLanding ? "24%" : "18%")};
  }
`;

const DateWrapper = styled.div`
  min-width: 0;
  padding: 2px 1px 0;
  flex-basis: 100%;
  padding: 2px 1px 0;
  flex-basis: 50%;

  @media (min-width: 768px) {
    flex-basis: 25%;
  }
  @media (min-width: 1200px) {
    flex-basis: 14%;
  }
`;

const Passengers = styled.div`
  min-width: 0;
  padding: 2px 1px 0;
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: ${props => (props.onLanding ? "50%" : "25%")};
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => (props.onLanding ? "20%" : "17%")};
  }
`;

export default props => {
  return (
    <Form onLanding={props.onLanding}>
      <City>
        <DepartureCity />
      </City>
      <City>
        <ArrivalCity />
      </City>
      <DateWrapper>
        <DepartureDate />
      </DateWrapper>
      <DateWrapper>
        <ArrivalDate />
      </DateWrapper>
      <Passengers onLanding={props.onLanding}>
        <SelectPassengers />
      </Passengers>
      <Btn onLanding={props.onLanding} />
    </Form>
  );
};
