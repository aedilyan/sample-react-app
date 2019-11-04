import React, { useContext, useState, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Input from '../common/input/Input'
import Button from '../common/button/Button'
import { AuthContext } from '../../App'
import authAction from '../../actions/authAction'
import './header.css'

const Header = () => {

    const [authState, dispatch] = useContext(AuthContext);
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        !!email && dispatch({ type: authAction.signin, payload: { ...authState, user: { ...authState.user, email: email } } })
    }

    const handleLogout = () => {
        dispatch({ type: authAction.signout })
        setEmail('')
    }

    return (
        <div className="nav header">
            <div className="nav-header">
                <div className="nav-title">
                    React app
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
                <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                <NavLink to="/about" activeClassName="selected" className="vl">About</NavLink>
                {!authState.isAuthenticated &&
                    <Fragment>
                        <Input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Button onClick={handleLogin}>Sign in</Button>
                    </Fragment>}
                {authState.isAuthenticated &&
                    <Fragment>
                        <span className="welcome">{`Wlcome, ${authState.user.email}`}</span>
                        <Button onClick={handleLogout}>Sign out</Button>
                    </Fragment>}
            </div>
        </div>
    );
};

export default Header;
