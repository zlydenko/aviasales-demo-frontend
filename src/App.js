import React, { Component } from "react";
import Header from "./Header";
import PopularDestinations from "./PopularDestinations";
import BestPrice from "./BestPrice";
import SpecialOffers from "./SpecialOffers";
import About from "./About";
import Download from "./Download";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PopularDestinations />
        <BestPrice />
        <SpecialOffers />
        <About />
        <Download />
        <Footer />
      </div>
    );
  }
}
