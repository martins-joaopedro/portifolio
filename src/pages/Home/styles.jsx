import { styled, keyframes} from "styled-components";

const moving = keyframes`
    0% {
        background-color: #010030;
    }
    50% {
        background-color: #1b0029 ;
    }
    75% {
        background-color: #0a0a0a;
    }
    100% {
        background-color: #010030;  
    }
`

export const Container = styled.div`
    background-size: 300%;
    height: 100vh;
    animation: ${moving} 10s infinite;
`