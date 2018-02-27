import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from "./MainPage";
import Search from "./SearchPage";

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/result" component={Search} />
    </div>
  </Router>
);
