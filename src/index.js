import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "flexboxgrid2";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import MainPage from "./MainPage";
import Search from "./SearchPage";

ReactDOM.render(<Search />, document.getElementById("root"));
registerServiceWorker();
