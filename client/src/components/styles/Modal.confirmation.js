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
h3{
    transform:translateY(-40px);
}
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color: white;
    background-color: #292929;
    width: 500px;
    height:240px;
    border-radius: 10px;
`
export const StyledModa2 = styled.div`
    /* transform:translateY(-60px); */
    display:flex;
    justify-content:center;
    button {
            /* transform: translateY(150px); */
            width:120px;
            margin-top:30px;
            margin-right:30px;
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
            }}
`


