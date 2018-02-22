import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import "flexboxgrid2";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import MainPage from "./MainPage";
import Search from "./SearchPage";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/search/" component={Search} />
    </div>
  </Router>
);

render(<App />, document.getElementById("root"));
registerServiceWorker();
