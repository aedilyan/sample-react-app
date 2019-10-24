import React, { useState, lazy } from 'react'
import Button from '../components/button/Button'
const Interval = lazy(() => import('../components/Interval'));
const Product = lazy(() => import('../components/product/Product'));
const Counter = lazy(() => import('../components/counter/Counter'));


const About = () => {
    const [isCounting, setIsCounting] = useState(false);
    const [productId, setProductId] = useState(0);

    return (
        <div className="container">

            <Button onClick={() => setIsCounting(counting => !counting)}>Start/Stop counting</Button>
            {isCounting && <Interval />}
            <hr></hr>

            <Button onClick={() => setProductId(id => id + 1)}>Change productId</Button>
            <Product productId={productId} />
            <hr></hr>

            <Counter />
        </div>
    );
};

export default About;
