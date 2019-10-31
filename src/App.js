import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import authService from './api/authService'
import ErrorBoundary from './components/common/ErrorBoundary'
import Layout from './Layout'
import "./assets/css/style.css"

authService.init();
export const UserContext = React.createContext();


const App = () => {
  const [user, setUser] = useState({ email: 'user@gmail.com' })

  return (
    <React.StrictMode>
      <UserContext.Provider value={[user, setUser]}>
        <ErrorBoundary>
          <BrowserRouter>
            <Layout>
              <Routes />
            </Layout>
          </BrowserRouter>
        </ErrorBoundary>
      </UserContext.Provider>
    </React.StrictMode>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById("react-container") // eslint-disable-line no-undef
);

if (module.hot)  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef

