import React from "react";
import styled from "styled-components";
import star from "./star.svg";
import starbg from "./starbg.svg";
import phone from "./phone.png";
import apple from "./apple.svg";
import android from "./android.svg";
import win from "./win.svg";

const Container = styled.section`
  padding-top: 24px;
  color: #fff;
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

const Title = styled.h1`
  margin: 0px;
  margin-bottom: 19px;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  font-weight: 500;
`;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RatingText = styled.span`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
`;

const DownloadLinks = styled.div`
  margin-top: 15px;
  & img {
    margin-bottom: -4px;
  }
`;

const Link = styled.a`
  color: #fff;
  font-size: 14px;
  line-height: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const PhoneIcon = styled.img`
  margin-right: 8px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Download = () => (
  <Container>
    <Title>Скачай мобильное приложение Aviasales.ru</Title>
    <div className="row center-xs">
      <div className="col-xs-10">
        <Rating>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <RatingText>Более 103 000 оценок</RatingText>
        </Rating>
      </div>
    </div>
    <DownloadLinks>
      <div className="row">
        <div className="col-xs-6">
          <PhoneIcon src={phone} alt="" />
        </div>
        <div className="col-xs-6">
          <Links>
            <Link>
              <PhoneIcon src={apple} alt="" />
              <span>iPhone или iPad</span>
            </Link>
            <Link>
              <PhoneIcon src={android} alt="" />
              <span>Android</span>
            </Link>
            <Link>
              <PhoneIcon src={win} alt="" />
              <span>Windows Phone</span>
            </Link>
          </Links>
        </div>
      </div>
    </DownloadLinks>
  </Container>
);

export default Download;
