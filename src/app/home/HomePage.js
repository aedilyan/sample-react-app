import React, { useState } from 'react'
import axios from 'axios'
import Heading from '../common/heading/Heading'
import Avatar from '../common/avatar/Avatar'
import Button from '../common/button/Button'

const config = {
    defaultName: 'Jon Smith',
    defaultImage: 'https://www.w3schools.com/howto/img_avatar.png',
    api: 'https://reqres.in/api/users?page=2'
}

const HomePage = () => {
    const [user, setUser] = useState({
        name: config.defaultName,
        image: config.defaultImage
    });

    const updateImage = () => {
        axios.get(config.api)
            .then(function (response) {
                // handle success
                setUser({ ...user, image: response.data.data[0].avatar })
            })
    }

    return (
        <div className="container">
            <Heading message="awesome heading component text" />
            <Avatar name={user.name} imageSrc={user.image} />
            <Button onClick={() => updateImage()} className="btn-small" text="Update my profile pic" />
        </div>
    );
};

export default HomePage;
