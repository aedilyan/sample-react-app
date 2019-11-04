import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import authService from './api/authService'
import ErrorBoundary from './components/common/ErrorBoundary'
import { window } from './utils'
import authReducer from './reducers/authReducer'
import Layout from './Layout'
import "./assets/css/style.css"

authService.init();
export const AuthContext = React.createContext();


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

