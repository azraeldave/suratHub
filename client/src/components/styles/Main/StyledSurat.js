import styled from "styled-components";

export const StyledSurat = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #838383;
    .buruh {
        margin: 0;
    }
    h1 {
        margin: 0;
        font-size: 17px;
    }
    h2 {
        margin: 0;
        font-size: 17px;
    }
    h3 {
        margin: 0;
        position:absolute;
        font-size: 15px;
        top:6px;
        right:10px;
    }
    p {
        margin: 0;
    }
    &:after {
    position:absolute;
    top:0px;
    content: '';
    border:1px solid #ffa31a9b;
    background-color:#ffa31a9b;
    width: calc(100% - 2px);
}
`
export const InnerContainer = styled.div`
    width: 90%;
    margin: 10px 10px 10px -20px 
`