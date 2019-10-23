import React, { useCallback } from 'react'
import Heading from '../components/heading/Heading'
import Avatar from '../components/avatar/Avatar'
import Button from '../components/button/Button'
import { HeartButton } from '../components/HeartButton/HeartButton'
import useAxiosFetch from '../hooks/useAxiosFetch'

const HomePage = ({ history }) => {

    const { data, isLoading, updateDataRecord } = useAxiosFetch("https://reqres.in/api/users?page=1", []);

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
        <div className="container">
            <Heading message="awesome users list" />

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
