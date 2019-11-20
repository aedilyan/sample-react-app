import React, { useState, lazy } from 'react'

import { useWindowWidth } from "Hooks"
const LoginForm = lazy(() => import('./LoginForm'))
import {
    Product,
    Interval,
    Button,
    Counter,
    Counter2,
    Heading
} from 'Components'

const message = "please login to track your order";

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

            <Counter2 />
            <hr></hr>

            <p>Window width is {width}</p>
            <hr></hr>

            <LoginForm>
                <Heading message={message} />
            </LoginForm>
        </div>
    );
};

export default About;
