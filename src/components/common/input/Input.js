import React from 'react'
import './input.css'

const Input = ({ type = "text", name = "name", ...props }) => {

    return (
        <input
            type={type}
            name={name}
            {...props}
        />
    );
}


export default Input;