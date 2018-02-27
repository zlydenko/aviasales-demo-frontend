import React from "react";
import { render } from "react-dom";
import "normalize.css";
import "flexboxgrid2";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

render(<App />, document.getElementById("root"));
registerServiceWorker();
