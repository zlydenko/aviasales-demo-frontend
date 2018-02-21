import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  padding-top: 12px;
  padding-bottom: 14px;
  padding-right: 6px;
  padding-left: 6px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  display: inline;
  color: #4a4a4a;
`;

export const Price = styled.p`
  color: #ff9241;
  display: inline;
  font-size: 22px;
  line-height: 26px;
`;

export const Airlines = styled.img`
  width: 99px;
  height: 36px;
`;

export const Icon = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;

export const Destination = styled.div`
  margin-bottom: 10px;
`;
