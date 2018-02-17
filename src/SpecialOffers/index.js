import React from "react";
import styled from "styled-components";
import pobedaIcon from "./airlines-icons/pobeda.png";
import lufthansaIcon from "./airlines-icons/lufthansa.png";
import pobedaIcon2x from "./airlines-icons/pobeda2x.png";
import lufthansaIcon2x from "./airlines-icons/lufthansa2x.png";
import starAlliance from "./airlines-icons/staralliance.png";
import starAlliance2x from "./airlines-icons/staralliance2x.png";

const Container = styled.section`
  padding-top: 16px;
  padding-bottom: 24px;
  padding-right: 8px;
  padding-left: 8px;
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
`;

const Title = styled.h2`
  color: #fff;
  font-size: 28px;
  line-height: 33px;
  font-weight: 500;
  margin-right: 40px;
  text-align: left;
`;

const Card = styled.div`
  background-color: #fff;
  color: #242424;
  margin-bottom: 12px;
`;

const Header = styled.header`
  background-color: #cd2027;
  color: #fff;

  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderText = styled.p`
  margin-top: 9px;
  margin-bottom: 9px;
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Main = styled.main`
  padding-top: 18px;
  padding-bottom: 16px;
  padding-right: 8px;
  padding-left: 8px;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AirlineIcon = styled.img`
  width: 122px;
  height: 30px;
  object-fit: cover;
`;

const Price = styled.p`
  margin: 0px;
  margin-bottom: 10px;
  color: #5c5c5c;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
`;

const PriceText = styled.span`
  font-size: 20px;
  line-height: 16px;
`;

const DateText = styled.p`
  margin: 0px;
  color: #d93633;
  font-size: 12px;
  line-height: 15px;
`;

const Text = styled.p`
  margin: 0px;
  margin-bottom: 27px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: #242424;
  text-align: left;
`;

const MoreBtn = styled.button`
  background-color: #fff;
  border: 2px solid #cd1f27;
  border-radius: 3px;
  color: #d93533;
  font-size: 16px;
  line-height: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

const Footer = styled.footer`
  color: #fff;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0px;
  margin-top: 8px;
`;

const Link = styled.a`
  color: #fff;
`;

const PobedaCard = () => (
  <Card>
    <Header>
      <HeaderText>Билеты от 499 рублей!</HeaderText>
    </Header>
    <Main>
      <Head>
        <picture>
          <AirlineIcon src={pobedaIcon} srcSet={`${pobedaIcon2x} 2x`} alt="" />
        </picture>
        <div>
          <Price>
            от <PriceText>499 &#8381;</PriceText>
          </Price>
          <DateText>Осталось 45 дней</DateText>
        </div>
      </Head>
      <main>
        <Text>
          <p>
            Билеты от 499 рублей! <br />Специальное предложение от авиакомпании
            Победа
          </p>
        </Text>
      </main>
      <MoreBtn>Узнать подробности</MoreBtn>
    </Main>
  </Card>
);

const LufthansaNYCard = () => (
  <Card>
    <Header>
      <HeaderText>В Нью-Йорк от 20 680 &#8381;</HeaderText>
      <img
        src={starAlliance}
        srcSet={`${starAlliance2x} 2x`}
        alt="star alliance"
      />
    </Header>
    <Main>
      <Head>
        <picture>
          <AirlineIcon
            src={lufthansaIcon}
            srcSet={`${lufthansaIcon2x} 2x`}
            alt=""
          />
        </picture>
        <div>
          <Price>
            от <PriceText>20 680 &#8381;</PriceText>
          </Price>
          <DateText>Осталось 19 дней</DateText>
        </div>
      </Head>
      <main>
        <Text>
          Из Москвы в США от 20680 рублей! Специальное предложение от
          авиакомпании Lufthansa
        </Text>
      </main>
      <MoreBtn>Узнать подробности</MoreBtn>
    </Main>
  </Card>
);

const LufthansaLACard = () => (
  <Card>
    <Header>
      <HeaderText>В Лос-Анджелес от…</HeaderText>
      <img
        src={starAlliance}
        srcSet={`${starAlliance2x} 2x`}
        alt="star alliance"
      />
    </Header>
    <Main>
      <Head>
        <picture>
          <AirlineIcon
            src={lufthansaIcon}
            srcSet={`${lufthansaIcon2x} 2x`}
            alt=""
          />
        </picture>
        <div>
          <Price>
            от <PriceText>20 360 &#8381;</PriceText>
          </Price>
          <DateText>Осталось 19 дней</DateText>
        </div>
      </Head>
      <main>
        <Text>
          Из Москвы в США от 22360 рублей! Специальное предложение от
          авиакомпании Lufthansa
        </Text>
      </main>
      <MoreBtn>Узнать подробности</MoreBtn>
    </Main>
  </Card>
);

const SpecialOffers = () => (
  <Container>
    <div className="row center-xs">
      <div className="col-xs-12 col-lg-10">
        <Title>Спецпредложения на авиабилеты</Title>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <PobedaCard />
          </div>
          <div className="col-xs-12 col-md-4">
            <LufthansaNYCard />
          </div>
          <div className="col-xs-12 col-md-4">
            <LufthansaLACard />
          </div>
        </div>
      </div>
    </div>

    <Footer>
      <Link href="#">Смотреть все спецпредложения</Link>
      <FooterText>* средняя цена по направлению</FooterText>
    </Footer>
  </Container>
);

export default SpecialOffers;
