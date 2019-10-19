import React, { useEffect, useReducer } from 'react'
import { getUser } from '../api/userService'
import Heading from '../components/heading/Heading'
import Avatar from '../components/avatar/Avatar'
import Button from '../components/button/Button'
import { HeartButton } from '../components/HeartButton/HeartButton'
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

    const handleMakeFavorite = (favorite, userId) => {
        dispatch({ type: favorite ? userAction.unFavorite : userAction.favorite, userId: userId })
    }

    return (
        <div className="container">
            <Heading message="awesome users list" />

            {users.map((user) => (
                <div key={user.id}>
                    <Avatar name={user.name} imageSrc={user.avatar} favorite={user.favorite} />
                    <Button onClick={() => goProfile(user)} className="btn-small" text="Go my profile" />
                    <HeartButton userId={user.id} onClick={handleMakeFavorite} />
                </div>
            ))}
            {users.length === 0 && <div>Loading...</div>}

        </div>
    );
};

export default HomePage;
