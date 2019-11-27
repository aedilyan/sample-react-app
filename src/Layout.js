import React, { Fragment } from 'react'
import Header from './components/header/Header'
import { GoogleTranslate } from './components/common/GoogleTranslate/GoogleTranslate'

const Layout = ({ children }) => {
    return (
        <Fragment>
            <div className="container">
                <GoogleTranslate></GoogleTranslate>
                <Header />
                {children}
                <div className="footer"></div>
            </div>
        </Fragment>
    )
}

export default Layout;