import React, { useState, useEffect, Fragment } from 'react'
import Button from './button/Button'
import { console, window } from 'Utils'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Counter component is mounting', '#0ada00');

        const intervalId = window.setInterval(() => {
            setCounter(c => c + 1);
        }, 1000);

        const logOnClick = () => {
            console.log('clicked on document');
        }

        window.addEventListener("click", logOnClick);

        return () => {
            window.clearInterval(intervalId);
            window.removeEventListener("click", logOnClick);
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