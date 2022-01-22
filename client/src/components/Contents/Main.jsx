import React from 'react'
import { StyledMain, StyledMain_2, Main1, Main2, Main2_Menu, Main1_container, Main1_Menu, IconWrapper } from '../styles/Main/Main'
import { MailAdd, SearchSettings } from '@styled-icons/fluentui-system-filled'
import { MailCheckmark, MailArrowUp, MailError, MailClock, } from 'styled-icons/fluentui-system-regular'
import { FileExcel2 } from 'styled-icons/remix-fill';
import { RefreshOutline } from 'styled-icons/typicons';
import Surat from './Surat';
import Scraped from './Scraped'
import SearchBar from '../SearchBar';




export default function Main({ data, addMailModal, showEditModal, showSearch, showSearchBar, onSearchChange, searchGO }) {
    return (
        <StyledMain>
            <StyledMain_2>
                <Main1>
                    <Main1_container>
                        <Main1_Menu>
                            <IconWrapper><MailAdd onClick={addMailModal} size='40px' /></IconWrapper>
                            <IconWrapper> <SearchSettings onClick={showSearch} size='40px' /></IconWrapper>
                            <IconWrapper> <FileExcel2 size='40px' /></IconWrapper>
                            <IconWrapper> <RefreshOutline size='40px' /></IconWrapper>
                            {/* SET SHOHW SEARCH BAR */}
                            {showSearchBar ? <SearchBar onSearchChange={onSearchChange} searchGO={searchGO} /> : null}
                        </Main1_Menu>

                        <Surat data={data} showEditModal={showEditModal} />

                    </Main1_container>
                </Main1>
                <Main2>
                    <Main2_Menu>
                        <MailClock color='#ffa31a' size='30px' />
                        <h3>History</h3>
                    </Main2_Menu>
                    <Scraped />
                </Main2>
            </StyledMain_2>
        </StyledMain>
    )
}
