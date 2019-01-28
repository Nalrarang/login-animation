import * as React from 'react'
import LoginForm from './Form/LoginForm'
import Logo from './Logo/Logo'

import './Login.scss'

class Login extends React.Component {
    public render() {
        return (
            <div className="login-container">
                <div className="login-box">
                    <Logo />
                    <LoginForm test="test" />
                </div>
            </div>
        )
    }
}

export default Login