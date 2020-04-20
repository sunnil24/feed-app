import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

// styles
import "./index.css";

//components
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
