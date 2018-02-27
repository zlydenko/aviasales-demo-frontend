import React from "react";
import { GoUp, Main, FilterBtn } from "./styled";
import filter from "./filter.svg";
import Card from "./Card";
import tickets from "../../data/tickets";

export default () => (
  <Main>
    <GoUp>
      <div className="hidden-md hidden-lg hidden-xl">Наверх</div>
      <img src={filter} alt="" />
    </GoUp>
    <div className="row">
      <div className="col-xs-3">sadas</div>
      <div className="col-xs-12 col-xl-7">
        {tickets.map((ticket, key) => <Card key={key} data={ticket} />)}
      </div>
    </div>
    <FilterBtn>Фильтровать</FilterBtn>
  </Main>
);
