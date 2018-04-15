import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 20px;
  padding-bottom: 25px;
  padding-right: 8px;
  padding-left: 8px;
`;

export const Card = styled.div`
  width: 100%;
  color: #4a4a4a;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  align-items: center;
  margin: 0px;
  margin-bottom: 12px;
`;

export const Link = styled.a`
  display: inline;
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  color: #00ace2;
`;

export const Img = styled.img`
  margin-right: 8px;
`;
