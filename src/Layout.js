import React, { Fragment } from 'react'
import Header from './components/header/Header'

const Layout = ({ children }) => {
    return (
        <Fragment>
            <div className="container">
                <Header />
                {children}
                <div className="footer"></div>
            </div>
        </Fragment>
    )
}

export default Layout;