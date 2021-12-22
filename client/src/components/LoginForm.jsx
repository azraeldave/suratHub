import React from 'react'
import { StyledForm } from './styles/Form.styled'

export default function LoginForm({ activateLogin, cancelLogin }) {
    return (
        <StyledForm>
            <input id='codeLogin' type="password" autoComplete='off' required />
            <label id='labelBruh' htmlFor="codeLogin">enter login code!</label>
            <button onClick={activateLogin}>enter</button>
            <button onClick={cancelLogin}>X</button>
        </StyledForm>
    )
}
