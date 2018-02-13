import React, { Component } from "react";
import styled from "styled-components";
import compass from "./compass.svg";
import edit from "./edit.svg";
import globe from "./globe.svg";
import palm from "./palm.svg";
import shoppingCart from "./shoppingCart.svg";
import culture from "./culture.svg";
import nightlife from "./nightlife.svg";
import babyCart from "./babyCart.svg";

import {
  KrasnodarCard,
  SochiCard,
  SPetersburgCard,
  MinVodiCard,
  SimferopolCard,
  BarselonaCard
} from "./TopDestinationCard";

const Container = styled.section`
  background-color: #f8fcff;
  padding-top: 40px;
  min-height: 1000px;
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
  & img {
    margin-left: 5px;
  }
`;

const Nav = styled.nav`
  padding-top: 32px;
`;

const NavIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

const NavItem = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #5c5c5c;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 24px;
  cursor: ${props => (props.active ? "auto" : "pointer")};

  & p {
    margin-top: 12px;
    border-bottom: ${props => (props.active ? "1px solid #00ACE2" : "none")};
  }
`;

export default class PopularDestinations extends Component {
  render() {
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
                  Москва <img src={edit} alt="" />
                </CityName>
              </Title>
            </div>
            <div className="col-xs-12">
              <Nav>
                <div className="container">
                  <div className="row">
                    <div className="col-xs-4">
                      <NavItem active>
                        <NavIcon>
                          <img src={globe} alt="" />
                        </NavIcon>
                        <p>куда угодно</p>
                      </NavItem>
                    </div>
                    <div className="col-xs-4">
                      <NavItem>
                        <NavIcon>
                          <img src={palm} alt="" />
                        </NavIcon>
                        <p>солнце и море</p>
                      </NavItem>
                    </div>
                    <div className="col-xs-4">
                      <NavItem>
                        <NavIcon>
                          <img src={shoppingCart} alt="" />
                        </NavIcon>
                        <p>шопинг, город</p>
                      </NavItem>
                    </div>
                    <div className="col-xs-4">
                      <NavItem>
                        <NavIcon>
                          <img src={culture} alt="" />
                        </NavIcon>
                        <p>культура и история</p>
                      </NavItem>
                    </div>
                    <div className="col-xs-4">
                      <NavItem>
                        <NavIcon>
                          <img src={nightlife} alt="" />
                        </NavIcon>
                        <p>ночная жизнь</p>
                      </NavItem>
                    </div>
                    <div className="col-xs-4">
                      <NavItem>
                        <NavIcon>
                          <img src={babyCart} alt="" />
                        </NavIcon>
                        <p>отдых с детьми</p>
                      </NavItem>
                    </div>
                  </div>
                </div>
              </Nav>
            </div>
            <div className="col-xs-12">
              <KrasnodarCard />
              <SochiCard />
              <SPetersburgCard />
              <MinVodiCard />
              <SimferopolCard />
              <BarselonaCard />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
