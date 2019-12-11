import { window } from 'Utils'
import React, { useReducer } from "react"
import authReducer from './../reducers/authReducer'

export const AuthContext = React.createContext([{}, function () { }]);

export const AuthContextProvider = ({ children }) => {

    const initialState = {
        isAuthenticated: !!window.localStorage.user,
        user: window.localStorage.user ? JSON.parse(window.localStorage.user) : {},
        token: null
    };
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    );
}
