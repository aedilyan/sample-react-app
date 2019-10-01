import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Routes from './app/Routes'
import authService from './app/services/authService'
import "./assets/css/style.css"

authService.init();

const Index = (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(
  Index,
  document.getElementById("react-container") // eslint-disable-line no-undef
);

if (module.hot)  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef

