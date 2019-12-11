import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import authService from './api/authService'
import ErrorBoundary from 'Components/common/ErrorBoundary'
import { AuthContextProvider } from 'Context/AuthContext'
import Layout from './Layout'
import "./assets/css/style.css"

authService.init();

const App = () => {

  return (
    <React.StrictMode>
      <AuthContextProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <Layout>
              <Routes />
            </Layout>
          </BrowserRouter>
        </ErrorBoundary>
      </AuthContextProvider>
    </React.StrictMode>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById("react-container") // eslint-disable-line no-undef
);

if (module.hot)  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef

