import React, { useState } from 'react'
import { StyledModal, StyledModa3, Button, ModalOverlay } from './styles/Modal.styled'
import { FormInputWrapper } from './styles/FormInputWrapper'
import jne from '../images/expe/jne.png'
import jnt from '../images/expe/jnt.png'
import kgp from '../images/expe/kgp.png'
import ptpos from '../images/expe/ptpos.png'
import sicepat from '../images/expe/sicepat.png'

export default function Modal({
    closeNewMail,
    kurirInput,
    onDelete, nomor, tujuan, resi, hal, tanggal, nomorChange, tujuanChange, resiChange, halChange, tanggalChange, setFormInput }) {



    return (
        <>
            <ModalOverlay>
                <StyledModal>
                    <StyledModa3>
                        <Button>
                            <h3>Edit Mail</h3>
                            <button onClick={closeNewMail}>X</button>
                        </Button>
                        <form

                            onSubmit={(event) => {
                                event.preventDefault()
                                setFormInput()
                            }}

                            autoComplete="off" >
                            <div>
                                <FormInputWrapper><input value={nomor} onChange={(event) => nomorChange(event,)} name='nomor' type="text" required /> <label htmlFor="">Nomor Surat</label></FormInputWrapper>
                                <FormInputWrapper><input value={tujuan} onChange={(event) => tujuanChange(event,)} name='tujuan' type="text" required /> <label htmlFor="">Tujuan</label></FormInputWrapper>
                                <FormInputWrapper><input value={resi} onChange={(event) => resiChange(event,)} name='resi' type="text" required /> <label htmlFor="">No. Resi</label></FormInputWrapper>
                                <FormInputWrapper><input value={hal} onChange={(event) => halChange(event,)} name='hal' className='perihal' type="text" required /> <label htmlFor="">Perihal</label></FormInputWrapper>
                                <input className='date' value={tanggal} onChange={(event) => tanggalChange(event,)} name='tanggal' type="date" required />
                            </div>
                            <span>
                                <label onClick={kurirInput} htmlFor="ptpos"> <input type="radio" name='kurir' id='ptpos' value='ptpos' /> <img src={ptpos} alt="" /></label>
                                <label onClick={kurirInput} htmlFor="jne">   <input type="radio" name='kurir' id='jne' value='jne' /> <img src={jne} alt="" /></label>
                                <label onClick={kurirInput} htmlFor="jnt">   <input type="radio" name='kurir' id='jnt' value='jnt' /> <img src={jnt} alt="" /></label>
                                <label onClick={kurirInput} htmlFor="kgp">  <input type="radio" name='kurir' id='kgp' value='kgp' /> <img src={kgp} alt="" /></label>
                                <label onClick={kurirInput} htmlFor="sicepat">  <input type="radio" name='kurir' id='sicepat' value='sicepat' />  <img src={sicepat} alt="" /></label>
                            </span>
                            <container>
                                <button style={{ marginRight: '20px' }} type='button' onClick={onDelete}>Delete Mail</button>
                                <button type='submit'>Update</button>
                            </container>
                        </form>
                    </StyledModa3>
                </StyledModal>
            </ModalOverlay>
        </>
    )
}
