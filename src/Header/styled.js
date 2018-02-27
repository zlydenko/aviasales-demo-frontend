import styled from "styled-components";

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
