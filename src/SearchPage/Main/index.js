import React from "react";
import { GoUp, Main, FilterBtn } from "./styled";
import Card from "./Card";
import tickets from "./tickets.js";

export default () => (
  <Main>
    <GoUp>Наверх</GoUp>
    {tickets.map((ticket, key) => (
      <Card
        key={key}
        cheepest={ticket.type === "cheepest"}
        fastest={ticket.type === "fastest"}
        best={ticket.type === "best"}
        price={ticket.price}
        airlines={ticket.airlines}
        toTime={ticket.tickets[0].time}
        toDuration={ticket.tickets[0].duration}
        toType={ticket.tickets[0].type}
        fromTime={ticket.tickets[1].time}
        fromDuration={ticket.tickets[1].duration}
        fromType={ticket.tickets[1].type}
      />
    ))}
    <FilterBtn>Фильтровать</FilterBtn>
  </Main>
);
