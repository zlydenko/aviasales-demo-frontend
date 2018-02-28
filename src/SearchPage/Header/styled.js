import styled from "styled-components";
import { Button } from "../UI";

export const Header = styled.header`
  padding: 10px 6px;
  background: linear-gradient(
    100deg,
    #00b0de -46.32%,
    #01aedc -42.65%,
    #02abdb -38.93%,
    #02abdb -35.24%,
    #02abdb -35.02%,
    #196ebd 52.98%
  );

  @media (min-width: 768px) {
    background: ;
  }
`;

export const Container = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Title = styled.p`
  margin: 0px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
`;

export const Text = styled.p`
  margin: 0px;
  color: #fff;
  font-size: 12px;
  line-height: 16px;
`;

export const Currency = Button.extend`
  display: block;
  background: transparent;
  padding: 6px 12px;
`;

export const Back = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 26px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
