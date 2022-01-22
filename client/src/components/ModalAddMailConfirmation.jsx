import React from 'react'
import { StyledModal, StyledModa2, ModalOverlay } from './styles/Modal.confirmation'

export default function ModalNewMail({ confirmYes, confirmNo, messageText }) {
    return (
        <ModalOverlay>
            <StyledModal>
                <h3>{messageText} </h3>
                <StyledModa2>
                    <button onClick={confirmYes}>Yes</button>
                    <button onClick={confirmNo}>Cancel</button>
                </StyledModa2>
            </StyledModal>
        </ModalOverlay>
    )
}
