import React from "react"
import Heading from '../common/heading/Heading'
import Avatar from '../common/avatar/Avatar'

const HomePage = () => {
    return (
        <div className="container">
            <Heading message="awesome heading component text" />
            <Avatar name="Jon Smith" imageSrc="https://www.w3schools.com/howto/img_avatar.png" />
        </div>
    );
};

export default HomePage;
