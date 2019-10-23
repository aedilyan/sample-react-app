import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
//import useLocalStorage from '../hooks/useLocalStorage'
import { UserContext } from '../../App'
import './header.css'

const Header = () => {

    //const [name, setName] = useLocalStorage('name', 'Bob');
    const [authUser, setAuthUser] = useContext(UserContext);

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
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
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
