import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";

ReactDOM.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </PrismicProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
