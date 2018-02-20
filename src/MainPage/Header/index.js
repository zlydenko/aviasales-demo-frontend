import React from "react";
import logo from "./logo.svg";
import plane from "./plane.svg";
import Search from "./Search";
import {
  Section,
  Logo,
  LogoText,
  Title,
  SubTitle,
  SearchBtn,
  Img
} from "./styled";

export const Logotype = () => (
  <Logo>
    <img src={logo} alt="Логотип aviasales" />
    <LogoText>aviasales</LogoText>
  </Logo>
);

export const SearchButton = () => (
  <SearchBtn>
    Найти билеты
    <Img src={plane} alt="Найти билеты" />
  </SearchBtn>
);

const Header = () => (
  <Section>
    <div className="container">
      <div className="row">
        <div className="col-xs-2 col-md-3 col-lg-2">
          <Logotype />
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12 col-md-10">
          <Title>Поиск дешевых авиабилетов</Title>
          <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
          <form>
            <Search />
            <SearchButton />
          </form>
        </div>
      </div>
    </div>
  </Section>
);

export default Header;
