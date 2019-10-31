import React, { useCallback, useContext } from 'react'
import { useHistory } from "react-router-dom"
import Heading from '../common/heading/Heading'
import Avatar from '../common/avatar/Avatar'
import Button from '../common/button/Button'
import { HeartButton } from '../common/heartButton/HeartButton'
import useAxiosFetch from '../../hooks/useAxiosFetch'
import { UserContext } from '../../App'

const HomePage = () => {
    let history = useHistory();
    const { data, isLoading, updateDataRecord } = useAxiosFetch("https://reqres.in/api/users?page=1", []);
    const [authUser] = useContext(UserContext);

    const goProfile = (user) => {
        history.push(`/user/${user.id}`, { user });
    }

    const handleMakeFavorite = useCallback((user) => {

        const toggledRec = { ...user, favorite: !user.favorite };

        //Do api call then update the record
        updateDataRecord(toggledRec);

    }, [updateDataRecord]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="page-container main">
            <Heading message={`here are [${authUser.email}]'s followers`} />
            <hr></hr>

            {data.map((user) => (
                <div key={user.id}>
                    <Avatar name={`${user.first_name} ${user.last_name}`} imageSrc={user.avatar} favorite={user.favorite} />
                    <Button onClick={() => goProfile(user)} className="btn-small" text="Go my profile" />
                    <HeartButton userId={user.id} onClick={() => handleMakeFavorite(user)} />
                </div>
            ))}
            {data.length === 0 && <div>Loading...</div>}

        </div>
    );
};

export default HomePage;
