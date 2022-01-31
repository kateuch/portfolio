import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ModalMenuContextProvider from "./common/components/context/modalMenu-context";

ReactDOM.render(
  <ModalMenuContextProvider>
    <App />
  </ModalMenuContextProvider>,
  document.getElementById("root")
);

reportWebVitals();
