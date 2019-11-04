import authAction from '../actions/authAction'
import { window } from '../utils'

const reducer = (state, action) => {
    switch (action.type) {
        case authAction.signin:
            window.localStorage.setItem("user", JSON.stringify(action.payload.user));
            window.localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case authAction.signout:
            window.localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                token: null,
            };
        default:
            return state;
    }
};

export default reducer;