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
            {props.warning && <span className="error">{props.warning}</span>}
        </Fragment >
    );
}


export default Input;