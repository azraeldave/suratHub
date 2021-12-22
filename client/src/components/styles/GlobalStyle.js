import { createGlobalStyle } from "styled-components";


const colors = {
    dark: {
        dark1: '#1b1b1b',
        dark2: '#292929',
        dark3: '#808080',
        dark4: '#ffa31a',
    },
    bright: {
        bright1: '#FFFFFF',
        bright2: '#F4F1E0',
        bright3: '#F14C38',
        bright4: '#144955',
    }
}

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Readex Pro', sans-serif;
        padding: 0;
        /* background-color: black; */
        box-sizing: border-box;
    }
    body{
        position:relative;
        background-color: black;
    }
`
export default GlobalStyle