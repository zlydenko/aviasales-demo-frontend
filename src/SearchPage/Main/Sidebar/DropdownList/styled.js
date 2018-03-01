import styled from "styled-components";

export const Title = styled.h3`
  margin: 0px;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 14px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: #5b5b5c;
  display: flex;
  align-content: center;
  border-bottom: ${props => (props.opened ? "none" : "1px solid #DDDDDD")};
`;

export const Filters = styled.ul`
  list-style: none;
  margin: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid #dddddd;
`;

export const Img = styled.img`
  margin-right: 4px;
  transform: rotate(${props => (props.opened ? "0deg" : "-90deg")});
`;

export const Text = styled.span`
  margin-right: 8px;
`;

export const Counter = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #a0b0b9;
  font-weight: 500;
`;
