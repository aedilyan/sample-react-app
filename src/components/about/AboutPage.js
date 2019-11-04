import React, { useState, lazy } from 'react'
import Button from 'Common/button/Button'
import useWindowWidth from "Hooks/useWindowWidth"
const Interval = lazy(() => import('Common/Interval'));
const Product = lazy(() => import('Common/product/Product'));
const Counter = lazy(() => import('Common/counter/Counter'));
const LoginForm = lazy(() => import('./LoginForm'));


const About = () => {
    const [isCounting, setIsCounting] = useState(false);
    const [productId, setProductId] = useState(0);
    const width = useWindowWidth();


    return (
        <div className="page-container main">
            <hr></hr>
            <Button onClick={() => setIsCounting(counting => !counting)}>Start/Stop counting</Button>
            {isCounting && <Interval />}
            <hr></hr>

            <Button onClick={() => setProductId(id => id + 1)}>Change productId</Button>
            <Product productId={productId} />
            <hr></hr>

            <Counter />
            <hr></hr>

            <p>Window width is {width}</p>
            <hr></hr>

            <h4>Enter username and password to Login</h4>
            <LoginForm />
        </div>
    );
};

export default About;
