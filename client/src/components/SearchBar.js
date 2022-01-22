import React from 'react'
import { StyledSearchBar } from './styles/SearchBar.styled'

export default function SearchBar({ onSearchChange, searchGO }) {
    return (
        <StyledSearchBar>
            <input required type='text' onChange={e => onSearchChange(e)} placeholder='enter keyword...' />
            <button onClick={searchGO}>Go</button>
        </StyledSearchBar>
    )
}
