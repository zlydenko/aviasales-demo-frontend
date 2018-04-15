import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background: #ffffff;
  position: relative;
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  padding: 18px 0px 18px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
  ::placeholder {
    color: #a0b0b9;
  }
`;

const Abbr = styled.div`
  position: absolute;
  right: 0;
  padding: 18px 16px 18px 0;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #a0b0b9;
`;

export default () => (
  <Wrapper>
    <Input type="text" name="cityTo" placeholder="Город прибытия" />
    <Abbr />
  </Wrapper>
);
