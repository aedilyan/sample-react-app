import React from "react"
import Image from '../image/Image'
import './avatar.css'

//don't render if input props are the same - React.memo
const Avatar = React.memo(({ imageSrc, name, favorite }) => {

    console.log(`Avatar ${name} rendered - thx to memo!`) // eslint-disable-line no-undef

    return (
        <React.Fragment>
            <p className="description">{name || 'guest'}
                {favorite && <span> | my favorite</span>}
            </p>
            <Image src={imageSrc} className="avatar" alt="Avatar" />
        </React.Fragment>
    );
});

export default Avatar;
