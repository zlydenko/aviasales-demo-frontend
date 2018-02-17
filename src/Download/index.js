import React from "react";
import styled from "styled-components";
import rating from "./rating.png";
import rating2x from "./rating2x.png";
import phone from "./phone.png";
import phone2x from "./phone2x.png";
import apple from "./apple.png";
import android from "./android.png";
import win from "./win.png";
import apple2x from "./apple2x.png";
import android2x from "./android2x.png";
import win2x from "./win2x.png";

const Container = styled.section`
  padding-top: 24px;
  color: #fff;
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

const Title = styled.h2`
  margin: 0px;
  margin-bottom: 19px;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  font-weight: 500;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingText = styled.span`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  margin-left: 8px;
`;

const DownloadLinks = styled.div`
  margin-top: 15px;
`;

const Phone = styled.img`
  transform: translateY(4px);
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
          <picture>
            <img
              src={rating}
              srcSet={`${rating2x} 2x`}
              alt="aviasales app rating"
            />
          </picture>
          <RatingText>Более 103 000 оценок</RatingText>
        </Rating>
      </div>
    </div>
    <DownloadLinks>
      <div className="row">
        <div className="col-xs-6">
          <picture>
            <Phone src={phone} srcSet={`${phone2x} 2x`} alt="" />
          </picture>
        </div>
        <div className="col-xs-6">
          <Links>
            <Link>
              <picture>
                <PhoneIcon src={apple} srcSet={`${apple2x} 2x`} alt="" />
              </picture>
              <span>iPhone или iPad</span>
            </Link>
            <Link>
              <picture>
                <PhoneIcon src={android} srcSet={`${android2x} 2x`} alt="" />
              </picture>
              <span>Android</span>
            </Link>
            <Link>
              <picture>
                <PhoneIcon src={win} srcSet={`${win2x} 2x`} alt="" />
              </picture>
              <span>Windows Phone</span>
            </Link>
          </Links>
        </div>
      </div>
    </DownloadLinks>
  </Container>
);

export default Download;
