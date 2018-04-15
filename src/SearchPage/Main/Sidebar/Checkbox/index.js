import React from "react";

import { Checkbox, Label, Price } from "./styled";

const currencyOptions = {
  style: "currency",
  currency: "RUB",
  currencyDisplay: "symbol",
  minimumFractionDigits: 0
};

export default props => (
  <div>
    <Checkbox type="checkbox" id={props.id} />
    <Label htmlFor={props.id}>
      {props.label}
      {props.price && (
        <Price>{props.price.toLocaleString("ru-RU", currencyOptions)}</Price>
      )}
    </Label>
  </div>
);
