import React from "react";
import styled from "styled-components";
import calendar from "./calendar.svg";
import ruFlag from "./flags/ru.png";
import amFlag from "./flags/am.png";
import mdFlag from "./flags/md.png";
import ruFlag2x from "./flags/ru2x.png";
import amFlag2x from "./flags/am2x.png";
import mdFlag2x from "./flags/md2x.png";

const Container = styled.section`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
`;

const CalendarIcon = styled.div`
  width: 64px;
  height: 64px;
  background-color: #e2f8ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #4a4a4a;
`;

const DestinationTitle = styled.h2`
  font-size: 22px;
  line-height: 32px;
  color: #5b5b5c;
  margin: 0px;
  margin-bottom: 2px;
`;

const Country = styled.p`
  margin: 0px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #a0b0b9;
`;

const Flag = styled.div`
  width: 30px;
  height: 30px;
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
  border-radius: 50%;
  background-image: url(${props => props.src});
  background-size: cover;
  margin-right: 12px;
`;

const Price = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #00bae8;
`;

const DepartureFrom = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #4a4a4a;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 24px;
  }
`;

const Card = styled.div`
  margin-bottom: 24px;
  border-bottom: 2px dashed #afbec6;
  &:last-child {
    border-bottom: none;
  }
`;

const SimferopolCard = () => (
  <Card>
    <Header>
      <picture>
        <Flag src={ruFlag} srcSet={`${ruFlag2x} 2x`} />
      </picture>
      <div>
        <DestinationTitle>Симферополь (Крым)</DestinationTitle>
        <Country>Крым</Country>
      </div>
    </Header>
    <main>
      <Row>
        <DepartureFrom>Из Москвы</DepartureFrom>
        <Price>от 4 813 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Санкт-Петербурга</DepartureFrom>
        <Price>от 7 857 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Новосибирска</DepartureFrom>
        <Price>от 15 127 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Екатеринбурга</DepartureFrom>
        <Price>от 9 275 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Челябинска</DepartureFrom>
        <Price>от 9 148 &#8381;</Price>
      </Row>
    </main>
  </Card>
);

const ErevanCard = () => (
  <Card>
    <Header>
      <picture>
        <Flag src={amFlag} srcSet={`${amFlag2x} 2x`} />
      </picture>
      <div>
        <DestinationTitle>Ереван</DestinationTitle>
        <Country>Армения</Country>
      </div>
    </Header>
    <main>
      <Row>
        <DepartureFrom>Из Москвы</DepartureFrom>
        <Price>от 6 758 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Санкт-Петербурга</DepartureFrom>
        <Price>от 9 932 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Сочи</DepartureFrom>
        <Price>от 11 951 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Краснодара</DepartureFrom>
        <Price>от 11 741 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Ростова-на-Дону</DepartureFrom>
        <Price>от 11 956 &#8381;</Price>
      </Row>
    </main>
  </Card>
);

const ChinesauCard = () => (
  <Card>
    <Header>
      <picture>
        <Flag src={mdFlag} srcSet={`${mdFlag2x} 2x`} />
      </picture>
      <div>
        <DestinationTitle>Кишинёв</DestinationTitle>
        <Country>Молдавия</Country>
      </div>
    </Header>
    <main>
      <Row>
        <DepartureFrom>Из Москвы</DepartureFrom>
        <Price>от 8 319 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Санкт-Петербурга</DepartureFrom>
        <Price>от 10 800 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Краснодара</DepartureFrom>
        <Price>от 12 098 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Сургута</DepartureFrom>
        <Price>от 16 277 &#8381;</Price>
      </Row>
      <Row>
        <DepartureFrom>Из Нового Уренгоя</DepartureFrom>
        <Price>от 15 987 &#8381;</Price>
      </Row>
    </main>
  </Card>
);

const Main = styled.main`
  padding-bottom: 40px;
`;

const Footer = styled.footer`
  padding-bottom: 40px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4a4a4a;
  margin: 0px;
  margin-bottom: 24px;
`;

const Caption = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #a0b0b9;
  margin: 0px;
  font-weight: 300;
`;

const BestPrice = () => (
  <Container>
    <div className="container">
      <CalendarIcon>
        <img src={calendar} alt="" />
      </CalendarIcon>

      <Title>Лучшие цены на авиабилеты за последний месяц</Title>

      <Main>
        <SimferopolCard />
        <ErevanCard />
        <ChinesauCard />
      </Main>

      <Footer>
        <Text>
          Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
          мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
          авиакомпаний.
        </Text>
        <Caption>
          Цены, найденные пользователями за последние 48 часов, не являются
          офертой.
        </Caption>
      </Footer>
    </div>
  </Container>
);

export default BestPrice;
