import React from 'react'
import { StyledSurat, InnerContainer } from '../styles/Main/StyledSurat'
import { MailCheckmark } from 'styled-icons/fluentui-system-regular'
import { MapMarkerAlt } from 'styled-icons/fa-solid'
import { SuratIcons, SuratIcons_container } from '../styles/SuratIcons'
import { MailSettings } from '@styled-icons/fluentui-system-filled'





export default function Surat({ data, lastTracked, showEditModal }) {


    return (
        <>
            {data.map(
                (surat, index) => (
                    <StyledSurat>
                        <InnerContainer>
                            <h1>{surat.nomor}</h1>
                            <h2>{surat.hal}</h2>
                            <h3>{surat.tanggal}</h3>
                            <p><MapMarkerAlt size='18px' /> {surat.tujuan}</p>
                            <p>Last Tracked : {lastTracked}</p>
                        </InnerContainer>
                        <SuratIcons_container>
                            <SuratIcons><MailCheckmark color='#8fd357' /></SuratIcons>
                            <SuratIcons><MailSettings onClick={
                                () => showEditModal(surat, index)} /></SuratIcons>
                        </SuratIcons_container>
                    </StyledSurat >
                )
            )}


        </>
    )
}



