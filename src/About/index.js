import React from "react";
import styled from "styled-components";
import planeIcon from "./plane.png";
import emailIcon from "./email.png";
import listIcon from "./list.png";
import planeIcon2x from "./plane2x.png";
import emailIcon2x from "./email2x.png";
import listIcon2x from "./list2x.png";

const Wrapper = styled.section`
  padding-top: 20px;
  padding-bottom: 25px;
  padding-right: 8px;
  padding-left: 8px;
`;

const Card = styled.div`
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

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  align-items: center;
  margin: 0px;
  margin-bottom: 12px;
`;

const Link = styled.a`
  display: inline;
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  color: #00ace2;
`;

const About = () => (
  <Wrapper>
    <div className="row center-xs">
      <div className="col-xs-12 col-lg-10">
        <Card>
          <Title>
            <picture>
              <img src={planeIcon} srcSet={`${planeIcon2x} 2x`} alt="" />
            </picture>
            как купить дешевые авиабилеты?
          </Title>
          <p>
            Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
            самолет по сотням авиакомпаний и находим за считанные минуты самые
            дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь
            нашим поиском, который совершенно бесплатно сравнивает цены на
            авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
            смысла ходить в авиакассы, обзванивать агентства — дешевый билет
            находится на расстоянии клика. На нашем сайте вы можете подобрать
            дешевые билеты на самолет в Европу, Азию и на другие континенты. Мы
            написали для вас простую инструкцию о том, как пользоваться поиском
            и экономить на перелетах от 1000 до 20 000 руб в год.{" "}
            <Link href="#">Подробнее</Link>
          </p>
        </Card>
        <Card>
          <Title>
            <picture>
              <img src={emailIcon} srcSet={`${emailIcon2x} 2x`} alt="" />
            </picture>
            электронный авиабилет
          </Title>
          <p>
            Электронный авиабилет — это, по сути, обычный билет на самолет, но
            только в менее привычном для путешественника виде. Вся информация об
            авиаперелете (данные пассажира, маршрут следования) хранится в
            электронной базе, а пассажир получает на руки маршрут-квитанцию.
            Некоторые пассажиры, купив авиабилет онлайн и получив
            маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата
            А4, на котором распечатана вся информация о предстоящем перелете.
            Однако это действительно официальный документ, подтверждающий
            договор между авиаперевозчиком и пассажиром. При регистрации на рейс
            пассажир должен предъявить маршрут-квитанцию вместе с удостоверением
            личности точно так же, как предъявляют обыкновенный бумажный билет.
            Следует отметить, что электронный билет, приобретенный онлайн, стоит
            дешевле своего бумажного аналога. <Link href="#">Подробнее</Link>
          </p>
        </Card>
        <Card>
          <Title>
            <picture>
              <img src={listIcon} srcSet={`${listIcon2x} 2x`} alt="" />
            </picture>
            20 советов авиапутешественникам
          </Title>
          <p>
            Есть масса путеводителей по странам, но ни одного о том, как
            провести время в самолете. Для того, чтобы сделать ваш перелет
            максимально комфортным, мы написали 20 советов о подготовке к
            путешествию. Ведь настоящее путешествие начинается со слов «Добро
            пожаловать на борт нашего самолета»! <Link href="#">Подробнее</Link>
          </p>
        </Card>
      </div>
    </div>
  </Wrapper>
);

export default About;
