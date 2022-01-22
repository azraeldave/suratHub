import styled from "styled-components";
import { StyledIconBase } from '@styled-icons/styled-icon'

export const StyledMain = styled.div`
    /* background-color: red; */
    margin-top:45px;
    display:flex;
    justify-content:center;
    height:auto;
`
export const StyledMain_2 = styled.div`
    /* background-color: blue; */
    width:1400px;
    height:auto;
    display:flex;
    justify-content:center;
`
export const Main1 = styled.div`
    /* background-color: green; */
    width:50%;
    height:auto;
    margin-right:20px;
    background-color: #292929;
    border-radius: 10px;

`
export const Main2 = styled.div`
    width:50%;
    height:fit-content;
    margin-right:20px;
    background-color: #292929;
    border-radius: 10px;
`
export const Main1_container = styled.div`
    width:auto
    height:auto;
`
export const Main1_Menu = styled.div`
position:relative;
    margin-top: 26px;
    width:auto;
    height:auto;
    display:flex;
    justify-content: center;
`
export const IconWrapper = styled.div`
  ${StyledIconBase} {
    color: #ffa31a;
    background-color: transparent;
    margin: 20px;
    cursor: pointer;
    &:active {
        transform:translateY(2px);
        color : #cc8417;
    }
    /* icon styles go here */
  }
`
export const Main2_Menu = styled.div`
    h3 {color:#ffa31a};
    margin-top: 26px;
    width:auto;
    height:auto;
    display:flex;
    justify-content: center;
    align-items:center;
`

