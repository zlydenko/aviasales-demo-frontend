import React from "react";
import { withRouter } from "react-router-dom";

import Header from "./Header";
import PopularDestinations from "./PopularDestinations";
import BestPrice from "./BestPrice";
import Slider from "./Slider";
import Subscription from "./Subscription";
import SpecialOffers from "./SpecialOffers";
import About from "./About";
import Download from "./Download";
import Footer from "./Footer";

const Head = withRouter(Header);

export default () => (
  <div>
    <Head />
    <PopularDestinations />
    <BestPrice />
    <Slider />
    <Subscription />
    <SpecialOffers />
    <About />
    <Download />
    <Footer />
  </div>
);
