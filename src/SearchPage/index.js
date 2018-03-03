import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../Header";
import Main from "./Main";
import Footer from "../Footer";

const Head = withRouter(Header);

export default () => (
  <div>
    <Head />
    <Main />
    <Footer />
  </div>
);
