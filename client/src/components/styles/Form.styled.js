import styled from "styled-components";

export const StyledForm = styled.div`
    color:white;
    position: relative;
    background-color: 0; 
    display:flex;
    align-items:center;
    button {
        margin-left:5px;
        color:black;
        padding: 3px;
        background-color:#ffa31a;
        border:0;
        border-radius:1px;
        cursor: pointer;
        &:hover {
            background-color:#ffc56d;
        }
        &:active {
            margin-top:2px;
        }
    }
    label {
        color: #ffffff7b;
        position:absolute;
        top:17px;
        left:15px;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        font-size: 11px;
        transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
        
    }
    input {
        position:relative;
        padding:3px 5px;
        border: 1px solid white;
        background:none;
        border-radius: 2px;
        color:#cacaca;
        margin-left:10px;
        outline : none;
        background:none;
        caret-color:white;
        width:130px;
    }

    input:focus + label,input:valid + label{
        color:white;
        top:2px;
        font-size:10px;
        background-color:black;
    }
`