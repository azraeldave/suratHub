import React from 'react'
import { NotifContainer } from './styles/Notification'

export default function Notification({ title, message }) {
    return (
        <NotifContainer>
            <div>
                <h3>{title}</h3>
                <p style={{ textAlign: 'center' }}>{message}</p>
            </div>
        </NotifContainer>
    )
}
