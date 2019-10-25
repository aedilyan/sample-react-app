import React, { useState } from 'react'
import './heartButton.css'


export const HeartButton = ({ userId, onClick }) => {
    const [favorite, setFavorite] = useState(false);

    const handleClick = async () => {
        setFavorite(!favorite);
        onClick(favorite, userId);
    }

    return (
        <div onClick={() => handleClick(userId)} >
            <i className={`fas fa-heart heart-${favorite}`}></i>
        </div>
    );
};

