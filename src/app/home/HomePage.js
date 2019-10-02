import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Heading from '../common/heading/Heading'
import Avatar from '../common/avatar/Avatar'
import Button from '../common/button/Button'
import UserModel from '../user/UserModel'

const config = {
    api: 'https://reqres.in/api/users?page=1'
}

const HomePage = ({ history }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(config.api).then(function (response) {
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
