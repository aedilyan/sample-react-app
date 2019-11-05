import React, { useEffect, useState } from "react"
import { Image } from 'Components'
import { window } from 'Utils'
import Skeleton from 'react-skeleton-loader'
import './avatar.css'

//don't render if input props are the same - React.memo
const Avatar = React.memo(({ imageSrc, name, favorite }) => {

    console.log(`Avatar ${name} rendered - thx to memo!`) // eslint-disable-line no-undef
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        window.setTimeout(() => {
            setDescription(name)
            setImage(imageSrc)
        }, 1000)
    }, [name, imageSrc])

    return (
        <React.Fragment>
            <p className="description">{description || <Skeleton count={1} />}
                {favorite && <span> | my favorite</span>}
            </p>
            {image ? <Image src={image} className="avatar" alt="Avatar" /> : <Skeleton count={1} borderRadius={'20px'} width={'70px'} height={'50px'} />}
        </React.Fragment>
    );
});

export default Avatar;
