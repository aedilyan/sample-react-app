
import React from 'react'
import Avatar from '../common/avatar/Avatar'

const UserPage = ({history}) => {
    
    const user = history.location.state.user;

    return (
        <Avatar name={user.name} imageSrc={user.avatar} />
    );
};

export default UserPage;
