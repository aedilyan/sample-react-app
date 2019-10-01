import React from 'react'
import './button.css'

const Button = ({ text, onClick, className }) => {
    return (
        <button onClick={() => onClick()} className={className}>{text}</button>
    );
};

export default Button;
