import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Routes from './app/Routes'
import authService from './app/services/authService'
import Header from './app/header/Header'

import "./assets/css/style.css"

authService.init();

const App = (
  <BrowserRouter>
    <Header />
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(
  App,
  document.getElementById("react-container") // eslint-disable-line no-undef
);

if (module.hot)  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef

