import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.header`
  min-height: 100vh;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  padding-top: 12px;

  @media (min-width: 768px) {
    background: linear-gradient(
      126.97deg,
      #00b0de -13.66%,
      #01aedc -9.98%,
      #02abdb -6.26%,
      #02abdb -2.56%,
      #02abdb -2.34%,
      #196ebd 85.88%
    );
  }

  @media (min-width: 1440px) {
    background: linear-gradient(
      119.26deg,
      #00b0de -25.78%,
      #01aedc -22.1%,
      #02abdb -18.38%,
      #02abdb -14.68%,
      #02abdb -14.46%,
      #196ebd 73.68%
    );
  }
`;

export const LogoText = styled.span`
  display: none;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  margin-left: 16px;

  @media (min-width: 768px) {
    display: inline;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;
  margin-top: 48px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
    margin-top: 80px;
    font-size: 32px;
    line-height: 48px;
  }

  @media (min-width: 1440px) {
    margin-top: 210px;
    font-size: 40px;
  }
`;

export const SubTitle = styled.p`
  display: none;
  color: #fff;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  @media (min-width: 768px) {
    display: block;
    margin: 0px;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Inputs = styled.div`
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: 23.3333%;
  }
`;

export const DepartureCity = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
  position: relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  @media (min-width: 768px) {
    border-top-right-radius: 0px;
  }

  @media (min-width: 1200px) {
    border-bottom-left-radius: 4px;
  }
`;

export const Input = styled.input`
  background: #fff;
  color: #4a4a4a;
  font-size: 16px;
  line-height: 20px;
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;

  &::placeholder {
    color: #a0b0b9;
  }
`;

export const ArrivalCity = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;

  @media (min-width: 768px) {
    border-top-right-radius: 4px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 0px;
  }
`;

export const DepartureDate = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
  position: relative;

  @media (min-width: 768px) {
    border-bottom-left-radius: 4px;
  }

  @media (min-width: 1200px) {
    border-bottom-left-radius: 0px;
  }
`;

export const ArrivalDate = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
  position: relative;
`;

export const SelectPassenger = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  @media (min-width: 768px) {
    border-bottom-left-radius: 0px;
  }

  @media (min-width: 1200px) {
    border-top-right-radius: 4px;
  }
`;

export const ActionButton = styled.button`
  background: #fff;
  border: 0;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 18px;
  right: 16px;
`;

export const PassengersDropdown = styled.button`
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
  display: flex;
  line-height: 20px;
  align-items: center;
  position: relative;
  background: transparent;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    line-height: 0;
    height: 0;
    border: 5px transparent solid;
    border-top-color: #262626;
    position: absolute;
    right: 18px;
    top: 25px;
  }
`;

export const PrimaryText = styled.span`
  line-height: 20px;
`;

export const AdditionalText = PrimaryText.extend`
  color: #a0b0b9;
`;

export const Abbr = AdditionalText.extend`
  position: absolute;
  right: 43px;
  top: 18px;
`;

export const DateFields = Inputs.extend`
  display: flex;

  @media (min-width: 1200px) {
    flex-basis: 30%;
  }
`;

export const DateInput = styled.div`
  flex-basis: 50%;
`;

export const SearchBtn = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  text-align: center;
  width: 100%;
  padding: 14px;
  background-color: #ff9241;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 16px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 32px;
  }

  @media (min-width: 1440px) {
    margin-top: 48px;
  }

  &:hover,
  &:focus {
    background: #fca15f;
  }
`;

export const Img = styled.img`
  margin-left: 8px;
`;

export const LinktoSearch = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
