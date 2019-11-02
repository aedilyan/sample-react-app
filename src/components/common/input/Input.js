import React, { Fragment } from 'react'
import './input.css'

const Input = ({ type = "text", name = "name", ...props }) => {

    return (
        <Fragment>
            <input
                type={type}
                name={name}
                {...props}
            />
            {(props.warning && !props.warning.valid) && <span className="error">{props.warning.message}</span>}
        </Fragment >
    );
}


export default Input;