import React, { useState, useEffect, Fragment } from 'react'
import Button from './button/Button'
import { console, window } from '../utils'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Counter component is mounting', '#0ada00');

        const intervalId = window.setInterval(() => {
            setCounter(c => c + 1);
        }, 1000);

        return () => {
            window.clearInterval(intervalId);
            console.log('Counter component is unmounting', '#bada55');
        }
    }, []);

    function handleAlertClick() {
        window.setTimeout(() => {
            window.alert(`You clicked counter on ${counter} seconds`);
        }, 3000);
    }

    return (
        <Fragment>
            <p>{`Counting: ${counter}`}</p>
            <Button onClick={handleAlertClick}>Show current number in 3 seconds</Button>
        </Fragment>
    );
};

export default Counter;