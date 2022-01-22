import React from 'react'
import { NavContainer1, NavContainer2, LoginContainer } from './styles/Navigation.styled'
import { ReactComponent as DarkLogo } from '../images/dark_logo.svg'
import { ReactComponent as Login } from '../images/login.svg'
import LoginForm from './LoginForm'

export default function Navbar({ loginStatus, loginClick, cancelLogin, activateLogin }) {
    return (
        <NavContainer1>
            <NavContainer2>
                <DarkLogo width='200px' height='50px' />
                {loginStatus == false ?
                    <LoginContainer onClick={loginClick}>
                        <Login width='35px' height='35px' className='icon' />
                        <label htmlFor={<Login />}>Log In</label>
                    </LoginContainer>
                    : <LoginForm activateLogin={activateLogin} cancelLogin={cancelLogin} />}
            </NavContainer2>
        </NavContainer1>
    )
}
