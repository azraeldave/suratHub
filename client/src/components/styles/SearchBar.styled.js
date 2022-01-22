import styled from 'styled-components'

export const StyledSearchBar = styled.div`
position:absolute;
top:-15px;
left:200px;
animation:pop-out 0.5s ease;
@keyframes pop-out {
 0% {
    top: 15px;
    opacity:0;
 }
 80% {
    top: -18px;
    display:block;
}
100% {
    top: -15px;
    display:block;
    opacity:1
}
}










input   {
    border:none;
    padding: 5px 15px;
    border-radius:10px 0 0 10px;
    position:relative;
    &:focus{
        outline:none;
        }
}

input:focus + :after {
        content:'';
        position:absolute;
        background-color: #ffa31a;
        border: #ffa31a solid 1.5px;
        top: 23px;
        width:188px;
        left:-182px;
        border-radius:20px 100px 20px 20px;
        animation: left-right 0.3s ease-in-out forwards;
        
        @keyframes left-right{
            from {
                width:0px;
            }
            to {
                width:188px;
            }
        }
    }
    input:valid + :after {
        content:'';
        position:absolute;
        background-color: #ffa31a;
        border: #ffa31a solid 1.5px;
        top: 23px;
        width:188px;
        left:-182px;
        border-radius:20px 100px 20px 20px;
        animation: left-right 0.3s ease-in-out forwards;
        
        @keyframes left-right{
            from {
                width:0px;
            }
            to {
                width:188px;
            }
        }
    }
    
button{
    border:none;
    background:none;
    color:black;
    background-color :#ffa31a;
    padding: 5px;
    border-radius: 10px;
    transform:translateX(-15px);
    outline:none;
    cursor: pointer;
    &:active{
        background-color :#b6781b
    }
    z-index:0;
    
}


`