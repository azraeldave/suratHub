import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed; 
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5); /* color */
    /* display: none; making it hidden by default */
`

export const StyledModal = styled.div`
    h3 {
       color: #ffa31a;
    }
    color: #696969;
    background-color: #292929;
    width: 500px;
    height:650px;
    -webkit-box-shadow: 0px 0px 42px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 42px 2px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 42px 2px rgba(0,0,0,0.75);
    border-radius: 10px;
`
export const StyledModa2 = styled.div`
    display:flex;
    flex-direction:column;
    margin:0px 20px 20px 20px;
    form {
        div {
            width:100%;
            display:flex;
            flex-direction:column;
        }
        position:relative;
        margin-top:0px;
        display:flex;
        flex-direction:column;
        align-items:center;
        height:100%;
            input[type=date] {
                margin-top:7px;
                background-color:#ffa31a;
                width:150px;
                outline:none;
                padding: 7px 10px;
                font-size:12px;
                border:none;
                border-radius:10px;
                ::-webkit-calendar-picker-indicator {
                    background-color:white;
                    border-radius:5px;
                    cursor:pointer;
                }
            }
            
            
            span{
                margin-top:15px;
                width:80%;
                display:flex;
                justify-content:center;
                flex-wrap:wrap;
                    input[type=radio] { 
                    position: absolute;
                    opacity: 0;
                    width: 0;
                    height: 0;
                    /* &:checked + img {
                        -webkit-filter: grayscale(0%);
                        -moz-filter:    grayscale(0%);
                        -ms-filter:     grayscale(0%);
                        -o-filter:      grayscale(0%);
                    } */
                    }

                    input[type=radio]:checked + img {
                        -webkit-filter: grayscale(0%);
                        -moz-filter:    grayscale(0%);
                        -ms-filter:     grayscale(0%);
                        -o-filter:      grayscale(0%);
                    }
                
                    label {
                        position:relative;

                        
                        }
                        img {
                            user-drag: none;
                            -webkit-user-drag: none;
                            -moz-user-select: none;
                            -webkit-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                            selectable:none
                            filter:none;
                            width: 100px;
                            height:100px;
                            -webkit-filter: grayscale(100%);
                            -moz-filter:    grayscale(100%);
                            -ms-filter:     grayscale(100%);
                            -o-filter:      grayscale(100%);
                            cursor: pointer;

                            
                        }
                
                }
            }        
            button {
            /* transform: translateY(150px); */
            width:120px;
            margin-top:30px;
            color:black;
            padding: 3px;
            background-color:#ffa31a;
            border:0;
            border-radius:2px;
            cursor: pointer;
            &:hover {
                background-color:#ffc56d;
            }
            &:active {
                transform: translateY(3px);
            }
            }
    
`
export const Button = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    

    button {
    color:black;
    width:65px;
    padding: 3px 0;
    background-color:#ffa31a;
    margin:0;
    border:none;
    border-radius:1px;
    cursor: pointer;
    &:hover {
        background-color:#ffc56d;
    }
    &:active {
        transform:translateY(2px);
    }}
`
export const InputWrapper = styled.div`
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


