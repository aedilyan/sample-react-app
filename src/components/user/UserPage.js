
import React, { Fragment } from 'react'
import { useParams, useHistory } from "react-router-dom"
import Avatar from '../common/avatar/Avatar'
import Button from '../common/button/Button'

const UserPage = () => {
    const history = useHistory();
    const user = history.location.state.user;
    let { userId } = useParams();


    return (
        <Fragment>
            <Avatar name={`${userId}:${user.email}`} imageSrc={user.avatar} />
            <Button onClick={() => history.goBack()} className="btn-small">Go Back</Button>
        </Fragment>
    );
};

export default UserPage;

