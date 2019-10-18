import React, { useEffect, useReducer } from 'react'
import { getUser } from '../api/userService'
import Heading from '../components/heading/Heading'
import Avatar from '../components/avatar/Avatar'
import Button from '../components/button/Button'
import UserModel from '../user/UserModel'
import { userReducer } from '../reducers/userReducer'
import userAction from '../actions/userAction';

const HomePage = ({ history }) => {

    const [users, dispatch] = useReducer(userReducer, []);

    useEffect(() => {
        getUser.then(function (response) {
            // handle success
            const users = response.data.data.map(user => {
                return new UserModel(user);
            })
            dispatch({ type: userAction.setUser, data: users })
        })
    }, []);

    const goProfile = (user) => {
        history.push(`/user/${user.id}`, { user });
    }

    const handleMakeFavorite = (user) => {
        dispatch({ type: userAction.favorite, userId: user.id })
    }

    return (
        <div className="container">
            <Heading message="awesome users list" />

            {users.map((user) => (
                <div key={user.id}>
                    <Avatar name={user.name} imageSrc={user.avatar} favorite={user.favorite} />
                    <Button onClick={() => goProfile(user)} className="btn-small" text="Go my profile" />
                    <Button onClick={() => handleMakeFavorite(user)} className="btn-small" text={user.favorite ? 'favorite' : 'make favorite'} />
                </div>
            ))}
            {users.length === 0 && <div>Loading...</div>}

        </div>
    );
};

export default HomePage;
