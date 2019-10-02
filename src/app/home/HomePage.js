import React, { useState, useEffect } from 'react'
import { getUser } from '../services/userService'
import Heading from '../common/heading/Heading'
import Avatar from '../common/avatar/Avatar'
import Button from '../common/button/Button'
import UserModel from '../user/UserModel'



const HomePage = ({ history }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUser.then(function (response) {
            // handle success
            setUsers(response.data.data.map(user => {
                return new UserModel(user);
            }))
        })
    }, []);

    const goProfile = (user) => {
        history.push(`/user/${user.id}`, { user });
    }

    return (
        <div className="container">
            <Heading message="awesome users list" />

            {users.map((user) => (
                <div key={user.id}>
                    <Avatar name={user.name} imageSrc={user.avatar} />
                    <Button onClick={() => goProfile(user)} className="btn-small" text="Go my profile" />
                </div>
            ))}
            {users.length === 0 && <div>Loading...</div>}

        </div>
    );
};

export default HomePage;
