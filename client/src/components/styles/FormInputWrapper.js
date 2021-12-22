import styled from "styled-components";

export const FormInputWrapper = styled.div`
    width:100%;
    position:relative;
    margin-bottom:20px;
    
    input[type=text] {
        padding: 10px;
        background-color:white;
        
    }
    label {
        color: #a1a1a1;
        position:absolute;
        font-size:12px;
        top:7px;
        left:5px;
        user-select: none;
        pointer-events:none; //make label invisible to event
        /* -moz-user-select: none;
        -webkit-user-select: none;
        -webkit-transition: all .2s ease-out;
        -moz-transition: all .2s ease-out;
        -ms-transition: all .2s ease-out;
        -o-transition: all .2s ease-out; */
        transition: all .2s ease-out
    }

    input[type=text]:valid + label, input[type=text]:focus + label{
        top:-18px;
        color:white;
    }
    
    /* input {
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
    } */

    /* input:focus + label,input:valid + label{
        color:#a1a1a1;
        top:2px;
        font-size:10px;
        background-color:none;
    } */
               
`