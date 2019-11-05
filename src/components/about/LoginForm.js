import React from 'react'
import { useInput } from "Hooks"
import { Input } from 'Components'
import { console } from 'Utils'

const LoginForm = () => {
    const { value: userName, bind: bindUserName, reset: resetUserName } = useInput('', 'username');
    const { value: password, bind: bindPassword, reset: resetPassword } = useInput('', 'password');
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('', 'email');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Submitting ${userName} ${password} ${email}`);
        resetUserName();
        resetPassword();
        resetEmail();
    }

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <Input type="text" name="username" placeholder="Enter username" autoComplete="username" {...bindUserName} />
            <Input type="text" name="email" placeholder="Enter email" autoComplete="email" {...bindEmail} />
            <Input type="password" name="password" placeholder="Enter password" autoComplete="current-password" {...bindPassword} />
            <Input type="submit" value="Submit" />
        </form>
    );
}


export default LoginForm;