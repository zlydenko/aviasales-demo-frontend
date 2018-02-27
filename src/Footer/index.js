import React from "react";

import appStore from "./img/apple.png";
import appStore2x from "./img/apple2x.png";
import googlePlay from "./img/android.png";
import googlePlay2x from "./img/android2x.png";
import winPhone from "./img/win.png";
import winPhone2x from "./img/win2x.png";

import vkontakte from "./img/vkontakte.png";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import twitter from "./img/twitter.png";
import viber from "./img/viber.png";
import vkontakte2x from "./img/vkontakte2x.png";
import facebook2x from "./img/facebook2x.png";
import instagram2x from "./img/instagram2x.png";
import twitter2x from "./img/twitter2x.png";
import viber2x from "./img/viber2x.png";

import {
  Links,
  LinkList,
  Title,
  Link,
  MoreLink,
  About,
  LegalLinks,
  Nav,
  LegalLink,
  SocialLinks,
  SocialLink,
  SocialIcon,
  Text,
  Download,
  Img,
  LegalInfo,
  DownloadLink
} from "./styled";

const Footer = () => (
  <div className="container">
    <Links>
      <div className="row">
        <div className="col-xs-6 col-md-3 col-lg-2">
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
        <div className="col-xs-6 col-md-3 col-lg-2">
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
        <div className="col-xs-6 col-md-3 col-lg-2">
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
        <div className="col-xs-6 col-md-3 col-lg-2">
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
        <div className="col-xs-6 col-md-3 col-lg-2">
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
        <div className="col-xs-6 col-md-3 col-lg-2">
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
    <About>
      <LegalLinks>
        <Nav>
          <LegalLink href="#">О компании</LegalLink>
          <LegalLink href="#">Партнёрская программа</LegalLink>
          <LegalLink href="#">Реклама</LegalLink>
          <LegalLink href="#">Вакансии</LegalLink>
          <LegalLink href="#">Помощь</LegalLink>
          <LegalLink href="#">Правила</LegalLink>
          <LegalLink href="#">White Label авиабилеты</LegalLink>
        </Nav>
        <SocialLinks>
          <SocialLink href="#">
            <picture>
              <SocialIcon src={vkontakte} srcSet={`${vkontakte2x} 2x`} alt="" />
            </picture>
            <Text>Вконтакте</Text>
          </SocialLink>

          <SocialLink href="#">
            <picture>
              <SocialIcon src={facebook} srcSet={`${facebook2x} 2x`} alt="" />
            </picture>
            <Text>Фейсбук</Text>
          </SocialLink>

          <SocialLink href="#">
            <picture>
              <SocialIcon src={instagram} srcSet={`${instagram2x} 2x`} alt="" />
            </picture>
            <Text>Инстаграм</Text>
          </SocialLink>
          <SocialLink href="#">
            <picture>
              <SocialIcon src={twitter} srcSet={`${twitter2x} 2x`} alt="" />
            </picture>
            <Text>Твиттер</Text>
          </SocialLink>
          <SocialLink href="#">
            <picture>
              <SocialIcon src={viber} srcSet={`${viber2x} 2x`} alt="" />
            </picture>
            <Text>Вайбер</Text>
          </SocialLink>
        </SocialLinks>
        <Text>
          <Link href="#">Поиск и бронирование отелей</Link>
        </Text>
      </LegalLinks>
      <LegalLinks>
        <div className="row center-xs">
          <div className="col-xs-12">
            <Download>
              <DownloadLink href="./">
                <picture>
                  <Img src={appStore} srcSet={`${appStore2x} 2x`} alt="" />
                </picture>
              </DownloadLink>
              <DownloadLink href="./">
                <picture>
                  <Img src={googlePlay} srcSet={`${googlePlay2x} 2x`} alt="" />
                </picture>
              </DownloadLink>
              <DownloadLink href="./">
                <picture>
                  <Img src={winPhone} srcSet={`${winPhone2x} 2x`} alt="" />
                </picture>
              </DownloadLink>
            </Download>
          </div>
        </div>
        <Text>
          <LegalInfo>© 2007–2018, Aviasales — дешевые авиабилеты</LegalInfo>
        </Text>
      </LegalLinks>
    </About>
  </div>
);

export default Footer;
