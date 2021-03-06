import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import localesEsMesages from "./locales/es";
import localesEnMesages from "./locales/en";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

function getBrowserLang() {
  return navigator.language || navigator.userLanguage;
}

function getLocale() {
  const lang = navigator.language || navigator.userLanguage;
  if (lang === "en") {
    return localesEnMesages;
  } else {
    return localesEsMesages;
  }
}

function getURL() {
  const lang = navigator.language || navigator.userLanguage;
  if (lang === "en") {
    return "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json";
  } else {
    return "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json";
  }
}
ReactDOM.render(
  <IntlProvider locale={getBrowserLang()} messages={getLocale()}>
    <App data={getURL()} lang={getBrowserLang()} />
  </IntlProvider>,
  document.getElementById("root")
);
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
