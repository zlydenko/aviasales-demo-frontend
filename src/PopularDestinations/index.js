import React from "react";
import styled from "styled-components";
import compass from "./compass.svg";
import edit from "./edit.svg";

import Categories from "./Categories";
import Card from "./Card";
import destinationList from "../data/destinations";

const Container = styled.section`
  background-color: #f8fcff;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-top: 56px;
  }
`;

const CompassIcon = styled.div`
  width: 64px;
  height: 64px;
  background-color: #e2f8ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 0px;
`;

const CityName = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  color: #00ace2;
`;

const Edit = styled.img`
  margin-left: 5px;
`;

export default () => {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <CompassIcon>
              <img src={compass} alt="" />
            </CompassIcon>
          </div>
          <div className="col-xs-12">
            <Title>
              Популярные направления перелетов из города
              <CityName>
                Москва <Edit src={edit} alt="" />
              </CityName>
            </Title>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xl-9">
            <Categories />
          </div>
        </div>
        <div className="row center-xs">
          {destinationList.map((destination, key) => (
            <div className="col-xs-12 col-lg-6" key={key}>
              <Card
                key={key}
                img={destination.img}
                country={destination.country}
                countryFlag={destination.countryFlag}
                city={destination.city}
                price={destination.price}
                date={destination.date}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
