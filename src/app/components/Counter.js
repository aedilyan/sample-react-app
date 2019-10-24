import React, { useState, useEffect, Fragment } from 'react'
import Button from './button/Button'

const _window = window; // eslint-disable-line no-undef

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = _window.setInterval(() => {
            setCounter(c => c + 1);
        }, 1000);

        return () => {
            _window.clearInterval(intervalId);
            _window.console.log('%c Counter component is unmounting', 'background: #222; color: #bada55');
        }
    }, []);

    function handleAlertClick() {
        _window.setTimeout(() => {
            _window.alert(`You clicked counter on ${counter} seconds`);
        }, 3000);
    }

    return (
        <Fragment>
            <p>{`Counting: ${counter}`}</p>
            <Button onClick={handleAlertClick} >Show current number in 3 seconds</Button>
        </Fragment>
    );
};

export default Counter;