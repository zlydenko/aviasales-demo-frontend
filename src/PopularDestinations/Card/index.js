import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 2px 8px 14px rgba(0, 75, 93, 0.12);
  }
`;

const Cover = styled.img`
  width: 100%;
  height: 126px;
  object-fit: cover;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  @media (min-width: 768px) {
    height: 176px;
  }

  @media (min-width: 1440px) {
    height: 212px;
  }
`;

const Caption = styled.div`
  padding-top: 16px;
  padding-bottom: 12px;
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Flag = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 16px;
`;

const Direction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DirectionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const City = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #5b5b5c;
  font-weight: 700;
  margin: 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-top: 12px;
    font-size: 22px;
    line-height: 32px;
  }
`;

const Country = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #a0b0b9;
  text-transform: uppercase;
  font-weight: 500;
  text-align: left;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  color: #00bae8;
  font-weight: 400;
  white-space: nowrap;

  &:hover {
    color: #ff8c00;
  }

  @media (min-width: 768px) {
    margin-top: 12px;
    font-size: 22px;
    line-height: 32px;
  }
`;

const DateText = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #a0b0b9;
  font-weight: 500;
  text-align: right;
`;

export default props => {
  return (
    <Card>
      <Cover src={props.img} alt={props.country} />
      <Caption>
        <Direction>
          <Flag src={props.countryFlag} alt={props.country} />
          <DirectionInfo>
            <City>{props.city}</City>
            <Country>{props.country}</Country>
          </DirectionInfo>
        </Direction>
        <AdditionalInfo>
          <Link href="./">Найти от {props.price}&#8381;</Link>
          <DateText>{props.date}</DateText>
        </AdditionalInfo>
      </Caption>
    </Card>
  );
};