import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
//import useLocalStorage from '../hooks/useLocalStorage'
import { UserContext } from '../../App'
import './header.css'

const Header = () => {

    //const [name, setName] = useLocalStorage('name', 'Bob');
    const [authUser, setAuthUser] = Array.isArray(useContext(UserContext)) ? useContext(UserContext) : [{}, function () { }]; // eslint-disable-line react-hooks/rules-of-hooks

    return (
        <div className="nav">
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
                <NavLink to="/about" activeClassName="selected">About</NavLink>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={authUser.email}
                    onChange={e => setAuthUser({ ...authUser, email: e.target.value })}
                />
            </div>
        </div>
    );
};

export default Header;
