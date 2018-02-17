import React from "react";
import styled from "styled-components";

import appStore from "./apple.png";
import appStore2x from "./apple2x.png";
import googlePlay from "./android.png";
import googlePlay2x from "./android2x.png";
import winPhone from "./win.png";
import winPhone2x from "./win2x.png";

import vkontakte from "./vkontakte.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import viber from "./viber.png";
import vkontakte2x from "./vkontakte2x.png";
import facebook2x from "./facebook2x.png";
import instagram2x from "./instagram2x.png";
import twitter2x from "./twitter2x.png";
import viber2x from "./viber2x.png";

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
`;

const SocialIcon = styled.img`
  margin-right: 5px;
`;

const Download = styled.div`
  margin-top: 24px;
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
            <picture>
              <SocialIcon src={vkontakte} srcSet={`${vkontakte2x} 2x`} alt="" />
            </picture>
            Вконтакте
          </SocialLink>
        </div>
        <div className="col-xs-4">
          <SocialLink href="#">
            <picture>
              <SocialIcon src={facebook} srcSet={`${facebook2x} 2x`} alt="" />
            </picture>
            Фейсбук
          </SocialLink>
        </div>
        <div className="col-xs-4">
          <SocialLink href="#">
            <picture>
              <SocialIcon src={instagram} srcSet={`${instagram2x} 2x`} alt="" />
            </picture>
            Инстаграм
          </SocialLink>
        </div>
        <div className="col-xs-4">
          <SocialLink href="#">
            <picture>
              <SocialIcon src={twitter} srcSet={`${twitter2x} 2x`} alt="" />
            </picture>
            Твиттер
          </SocialLink>
        </div>
        <div className="col-xs-4">
          <SocialLink href="#">
            <picture>
              <SocialIcon src={viber} srcSet={`${viber2x} 2x`} alt="" />
            </picture>
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
          <picture>
            <img src={appStore} srcSet={`${appStore2x} 2x`} alt="" />
          </picture>
        </div>
        <div className="col-xs-12">
          <picture>
            <img src={googlePlay} srcSet={`${googlePlay2x} 2x`} alt="" />
          </picture>
        </div>
        <div className="col-xs-12">
          <picture>
            <img src={winPhone} srcSet={`${winPhone2x} 2x`} alt="" />
          </picture>
        </div>
        <div className="col-xs-12">
          <LegalInfo>© 2007–2018, Aviasales — дешевые авиабилеты</LegalInfo>
        </div>
      </div>
    </Download>
  </div>
);

export default Footer;
