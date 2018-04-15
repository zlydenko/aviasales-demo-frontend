import React from "react";
import { GoUp, Main, FilterBtn } from "./styled";
import filter from "./filter.svg";
import Card from "./Card";
import Sidebar from "./Sidebar";
import tickets from "../../data/tickets";

export default () => (
  <Main>
    <div className="container">
      <div className="hidden-xl">
        <GoUp>
          <div className="hidden-md hidden-lg hidden-xl">Наверх</div>
          <div className="hidden-sm hidden-xs">
            <img src={filter} alt="" />
          </div>
        </GoUp>
      </div>
      <div className="row">
        <div className="col-xl-3 hidden-lg hidden-md hidden-sm hidden-xs">
          <Sidebar />
        </div>
        <div className="col-xs-12 col-xl-7">
          {tickets.map((ticket, key) => <Card key={key} data={ticket} />)}
          <FilterBtn>
            <div className="hidden-md hidden-lg hidden-xl">
              <span>Фильтровать</span>
            </div>
            <div className="hidden-sm hidden-xs">
              <span>ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!</span>
            </div>
          </FilterBtn>
        </div>
      </div>
    </div>
  </Main>
);
