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
`;

export const Main = styled.main`
  background-color: #eaeaea;
  padding-top: 8px;
  padding-bottom: 16px;
`;
