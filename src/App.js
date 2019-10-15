import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Routes from './app/Routes'
import authService from './app/services/authService'
import Header from './app/header/Header'
import ErrorBoundary from './app/common/ErrorBoundary'

import "./assets/css/style.css"

authService.init();

const App = (
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

ReactDOM.render(
  App,
  document.getElementById("react-container") // eslint-disable-line no-undef
);

if (module.hot)  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef

