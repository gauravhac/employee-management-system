import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./shared/reducers/store";

import App from "./App";

const app = (
  <Provider store={store}>
    <BrowserRouter basename={""}>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);
