import React from 'react'
import useInput from "../../hooks/useInput"
import Input from '../common/input/Input'
import { console } from '../../utils'

const LoginForm = () => {
    const { value: userName, bind: bindUserName, reset: resetUserName } = useInput('');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Submitting ${userName} ${password}`);
        resetUserName();
        resetPassword();
    }

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <Input type="text" name="name" {...bindUserName} />
            <Input type="password" name="password" {...bindPassword} />
            <Input type="submit" value="Submit" />
        </form>
    );
}


export default LoginForm;