import styled from "styled-components";
import { Button } from "../UI";

export const GoUp = Button.extend`
  font-weight: 900;
  background-color: rgba(0, 172, 226, 0.5);
  border: none;
  padding: 6px 16px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 16px;
`;

export const Main = styled.main`
  background-color: #eaeaea;
  padding-top: 8px;
  padding-bottom: 16px;
`;

export const FilterBtn = Button.extend`
  font-weight: 900;
  border: none;
  background-color: #00ace2;
  text-transform: none;
  margin-top: 4px;
  padding: 10px 24px;
  display: block;
  margin-right: auto;
  margin-left: auto;
`;
