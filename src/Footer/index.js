import React from "react";
import styled from "styled-components";

import appStore from "./apple.svg";
import googlePlay from "./android.svg";
import winPhone from "./win.svg";

import vkontakte from "./vk.svg";
import facebook from "./fb.svg";
import instagram from "./instagram.svg";
import twitter from "./twi.svg";
import viber from "./viber.svg";

const Title = styled.h2`
  margin: 0px;
  margin-bottom: 16px;
  font-size: 15px;
  line-height: 16px;
  color: #4a4a4a;
  font-weight: 500;
  text-transform: uppercase;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: #5b5b5c;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 12px;
`;

const MoreLink = Link.extend`
  font-size: 14px;
  color: #4a4a4a;
  margin-bottom: 0px;
  margin-top: 4px;
  font-weight: 500;
`;

const LinkList = styled.div`
  margin-bottom: 30px;
`;

const Links = styled.div`
  padding-top: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e6e8;
  margin-bottom: 24px;
`;

const LegalLink = Link.extend`
  display: inline-block;
  margin-right: 5px;
`;

const SocialLink = Link.extend`
  display: inline-block;
  margin-right: 5px;
  & img {
    margin-right: 5px;
  }
`;

const Download = styled.div`
  margin-top: 24px;
`;

const DownloadBtn = styled.button`
  width: 125px;
  height: 42px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 8px;
  background-color: #1e292d;
  border: none;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;

  & p {
    margin: 0px;
    font-size: 9px;
    line-height: 15px;
  }
`;

const StoreName = styled.p`
  font-size: 12px;
  line-height: 15px;
  font-weight: 900;
`;

const LegalInfo = styled.p`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 12px;
  line-height: 16px;
  color: #5b5b5c;
`;

const Footer = () => (
  <div className="container">
    <Links>
      <div className="row">
        <div className="col-xs-6">
          <LinkList>
            <Title>Страны</Title>
            <Link href="#">Россия</Link>
            <Link href="#">Таиланд</Link>
            <Link href="#">Черногория</Link>
            <Link href="#">Кипр</Link>
            <Link href="#">Болгария</Link>
            <Link href="#">Грузия</Link>
            <MoreLink href="#">Все страны →</MoreLink>
          </LinkList>
        </div>
        <div className="col-xs-6">
          <LinkList>
            <Title>Города</Title>
            <Link href="#">Москва</Link>
            <Link href="#">Санкт-Петербург</Link>
            <Link href="#">Симферополь</Link>
            <Link href="#">Адлер</Link>
            <Link href="#">Екатеринбург</Link>
            <Link href="#">Лондон</Link>
            <MoreLink href="#">Все города →</MoreLink>
          </LinkList>
        </div>
        <div className="col-xs-6">
          <LinkList>
            <Title>Авиакомпании</Title>
            <Link href="#">Air Berlin</Link>
            <Link href="#">Air France</Link>
            <Link href="#">Alitalia</Link>
            <Link href="#">Air Baltic</Link>
            <Link href="#">Emirates</Link>
            <Link href="#">KLM</Link>
            <MoreLink href="#">Все авиакомпании →</MoreLink>
          </LinkList>
        </div>
        <div className="col-xs-6">
          <LinkList>
            <Title>Аэропорты</Title>
            <Link href="#">Шереметьево</Link>
            <Link href="#">Курумоч</Link>
            <Link href="#">Домодедово</Link>
            <Link href="#">Толмачево</Link>
            <Link href="#">Владивосток</Link>
            <Link href="#">Гамбург</Link>
            <MoreLink href="#">Все аэропорты →</MoreLink>
          </LinkList>
        </div>
        <div className="col-xs-6">
          <LinkList>
            <Title>Направления</Title>
            <Link href="#">MOW – SIP</Link>
            <Link href="#">MOW – AER</Link>
            <Link href="#">MOW – TIV</Link>
            <Link href="#">MOW – MRV</Link>
            <Link href="#">LED – MOW</Link>
            <Link href="#">MOW – BKK</Link>
          </LinkList>
        </div>
        <div className="col-xs-6">
          <LinkList>
            <Title>Сервисы</Title>
            <Link href="#">Горящие авиабилеты</Link>
            <Link href="#">Календарь низких цен</Link>
            <Link href="#">Карта низких цен</Link>
            <Link href="#">Спецпредложения</Link>
            <Link href="#">Таблица цен</Link>
            <Link href="#">Блог</Link>
            <Link href="#">Помощь</Link>
          </LinkList>
        </div>
      </div>
    </Links>
    <div>
      <div className="row">
        <div className="col-xs-12">
          <LegalLink href="#">О компании</LegalLink>
          <LegalLink href="#">Партнёрская программа</LegalLink>
        </div>
        <div className="col-xs-12">
          <LegalLink href="#">Реклама</LegalLink>
          <LegalLink href="#">Вакансии</LegalLink>
          <LegalLink href="#">Помощь</LegalLink>
          <LegalLink href="#">Правила</LegalLink>
        </div>
        <div className="col-xs-12">
          <LegalLink href="#">White Label авиабилеты</LegalLink>
        </div>
      </div>
    </div>
    <div>
      <div className="row">
        <div className="col-xs-4">
          <SocialLink href="#">
            <img src={vkontakte} alt="" />
            Вконтакте
          </SocialLink>
        </div>
        <div className="col-xs-4">
          <SocialLink href="#">
            <img src={facebook} alt="" />
            Фейсбук
          </SocialLink>
        </div>
        <div className="col-xs-4">
          <SocialLink href="#">
            <img src={instagram} alt="" />
            Инстаграм
          </SocialLink>
        </div>
        <div className="col-xs-4">
          <SocialLink href="#">
            <img src={twitter} alt="" />
            Твиттер
          </SocialLink>
        </div>
        <div className="col-xs-4">
          <SocialLink href="#">
            <img src={viber} alt="" />
            Вайбер
          </SocialLink>
        </div>
      </div>
    </div>
    <Download>
      <div className="row center-xs">
        <div className="col-xs-12">
          <Link href="#">Поиск и бронирование отелей</Link>
        </div>
        <div className="col-xs-12">
          <DownloadBtn>
            <img src={appStore} alt="" />
            <div>
              <p>Скачайте в</p>
              <StoreName>App Store</StoreName>
            </div>
          </DownloadBtn>
        </div>
        <div className="col-xs-12">
          <DownloadBtn>
            <img src={googlePlay} alt="" />
            <div>
              <p>Скачайте в</p>
              <StoreName>Google Play</StoreName>
            </div>
          </DownloadBtn>
        </div>
        <div className="col-xs-12">
          <DownloadBtn>
            <img src={winPhone} alt="" />
            <div>
              <StoreName>Windows</StoreName>
              <StoreName>Phone</StoreName>
            </div>
          </DownloadBtn>
        </div>
        <div className="col-xs-12">
          <LegalInfo>© 2007–2018, Aviasales — дешевые авиабилеты</LegalInfo>
        </div>
      </div>
    </Download>
  </div>
);

export default Footer;
