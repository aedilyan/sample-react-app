import React, { useState, lazy } from 'react'
import Button from '../common/button/Button'
import useWindowWidth from "../../hooks/useWindowWidth"
const Interval = lazy(() => import('../common/Interval'));
const Product = lazy(() => import('../common/product/Product'));
const Counter = lazy(() => import('../common/counter/Counter'));


const About = () => {
    const [isCounting, setIsCounting] = useState(false);
    const [productId, setProductId] = useState(0);
    const width = useWindowWidth();


    return (
        <div className="container">

            <Button onClick={() => setIsCounting(counting => !counting)}>Start/Stop counting</Button>
            {isCounting && <Interval />}
            <hr></hr>

            <Button onClick={() => setProductId(id => id + 1)}>Change productId</Button>
            <Product productId={productId} />
            <hr></hr>

            <Counter />
            <hr></hr>

            <p>Window width is {width}</p>
        </div>
    );
};

export default About;
