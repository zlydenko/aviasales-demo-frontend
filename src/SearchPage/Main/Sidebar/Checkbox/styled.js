import styled from "styled-components";

import checkmark from "./checkmark.svg";

export const Label = styled.label`
  font-size: 12px;
  line-height: 36px;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  display: none;

  + ${Label} {
    &:before {
      margin-right: 4px;
      content: "";
      display: inline-block;
      width: 18px;
      height: 18px;
      background-color: #fff;
      border: 1px solid #a0b0b9;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  &:checked + ${Label}:before {
    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-position: center;
    background-color: #e1f8ff;
    border-color: #00ace2;
  }
`;

export const Price = styled.span`
  font-size: 12px;
  line-height: 36px;
  color: #a0b0b9;
  margin-left: auto;
`;
