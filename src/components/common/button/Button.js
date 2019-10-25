import React from 'react'
import './button.css'

const Button = ({ text, onClick, className, children }) => {
    return (
        <button onClick={() => onClick()} className={className}>{text || children}</button>
    );
};

export default Button;
