import React from "react";
import styled from "styled-components";
import apple from "./apple.png";
import windows from "./win.png";
import android from "./android.png";
import phone from "./phone.png";
import phone_md from "./phone_md.png";
import rating from "./rating.png";

const Section = styled.section`
  background: linear-gradient(to bottom, #00b0de 0%, #196ebd 100%);
  margin-top: 24px;
  text-align: center;
  @media (min-width: 768px) {
    margin-top: 48px;
  }
  @media (min-width: 1200px) {
    margin-top: 40px;
  }
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  padding-top: 24px;
  line-height: 28px;
  margin: 0px;
  @media (min-width: 768px) {
    padding-top: 46px;
    text-align: left;
  }
  @media (min-width: 992px) {
    padding-top: 66px;
  }
`;

const Text = styled.p`
  color: #ffffff;
  padding-left: 8px;
  font-size: 14px;
  line-height: 20px;
  margin: 0px;
`;

const Os = Text.extend`
  margin: 0px;
  line-height: 25px;
`;

const Image = styled.img``;

const Stars = Image.extend`
  margin-bottom: 1px;
`;

const Phone = Image.extend`
  height: 213px;
  width: 162px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  @media screen and (min-width: 768px) {
    height: 312px;
    width: 237px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Links = styled.div`
  padding-top: 56px;
  padding-bottom: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding-bottom: 51px;
    padding-top: 40px;
  }
  @media (min-width: 992px) {
    padding-top: 43px;
    padding-bottom: 65px;
  }
`;

const Link = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    padding: 0px 16px;
    &:first-child {
      padding-left: 0px;
    }
  }
`;

const LinkWithBorder = Link.extend`
  @media (min-width: 768px) {
    border-left: 1px solid #ffffff50;
    border-right: 1px solid #ffffff50;
  }
`;

const MobileApp = styled.div`
  height: 100%;
  position: relative;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row center-xs left-md">
          <div className="col-xs-12 col-md col-md-offset-4">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
            <Rating>
              <Stars src={rating} alt="Рейтинг" />
              <Text>Более 103 000 оценок</Text>
            </Rating>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-4 col-xl-3 col-xl-offset-1">
            <MobileApp>
              <picture>
                <source srcSet={phone_md} media="(min-width: 768px)" />
                <Phone src={phone} alt="Iphone" />
              </picture>
            </MobileApp>
          </div>
          <div className="col-xs-6 col-md-8 col-xl">
            <Links>
              <Link>
                <Image src={apple} alt="iOS" />
                <Os>iPhone или iPad</Os>
              </Link>
              <LinkWithBorder>
                <Image src={android} alt="Android" />
                <Os>Android</Os>
              </LinkWithBorder>
              <Link>
                <Image src={windows} alt="Windows Phone" />
                <Os>Windows Phone</Os>
              </Link>
            </Links>
          </div>
        </div>
      </div>
    </Section>
  );
}
