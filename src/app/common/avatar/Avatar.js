import React from "react";
import './avatar.css'

const Avatar = ({ imageSrc, name }) => {
    return (
        <React.Fragment>
            <p className="description">{name || 'guest'}</p>
            <img src={imageSrc} className="avatar" alt="Avatar" />
        </React.Fragment>
    );
};

export default Avatar;
