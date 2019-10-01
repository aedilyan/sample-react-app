import React from 'react'


const Image = ({ src, alt, className }) => {
    return (
        <img src={src} className={className} alt={alt} />
    );
};

export default Image;
