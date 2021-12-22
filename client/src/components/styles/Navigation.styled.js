import styled from "styled-components";

export const NavContainer1 = styled.div`
    margin-top:10px;
    width: 100%;
    height:75px;
    display: flex;
    justify-content: center;
    background-color: black;
    align-items:center;
`
export const NavContainer2 = styled.div`
    width: 1300px;
    background-color: black;
    display:flex;
    justify-content:space-between;
`
export const LoginContainer = styled.div`
    background-color: black;
    display:flex;
    justify-content:space-between;
    align-items:center;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

    cursor: pointer;

    label {
        font-size:15px;
        color: white;
        margin-left:10px;
        cursor: pointer;
    }
    svg path{
        fill:white;
    }
    &:hover svg path {
        fill:#ffa31a;
    }
    &:hover label {
        color:#ffa31a;
    }
    &:active {
        margin-top:5px;
    }
    
`