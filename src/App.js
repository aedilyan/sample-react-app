import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import authService from './api/authService'
import ErrorBoundary from 'Components/common/ErrorBoundary'
import { window } from 'Utils'
import authReducer from './reducers/authReducer'
import Layout from './Layout'
import "./assets/css/style.css"

authService.init();
export const AuthContext = React.createContext([{}, function(){}]);


const App = () => {

  const initialState = {
    isAuthenticated: !!window.localStorage.user,
    user: window.localStorage.user ? JSON.parse(window.localStorage.user) : {},
    token: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <React.StrictMode>
      <AuthContext.Provider value={[state, dispatch]}>
        <ErrorBoundary>
          <BrowserRouter>
            <Layout>
              <Routes />
            </Layout>
          </BrowserRouter>
          <div id="modal-root"></div>
        </ErrorBoundary>
      </AuthContext.Provider>
    </React.StrictMode>
  );

}

ReactDOM.render(
  <App />,
  document.getElementById("react-container") // eslint-disable-line no-undef
);

if (module.hot)  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef

