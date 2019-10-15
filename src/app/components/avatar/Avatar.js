import React from "react"
import Image from '../image/Image'
import './avatar.css'

const Avatar = ({ imageSrc, name }) => {
    return (
        <React.Fragment>
            <p className="description">{name || 'guest'}</p>
            <Image src={imageSrc} className="avatar" alt="Avatar" />
        </React.Fragment>
    );
};

export default Avatar;
