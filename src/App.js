import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import ru from "react-intl/locale-data/ru";

import MainPage from "./MainPage";
import Search from "./SearchPage";

addLocaleData(ru);

export default () => (
  <IntlProvider locale="ru">
    <Router>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route path="/result" component={Search} />
      </div>
    </Router>
  </IntlProvider>
);
