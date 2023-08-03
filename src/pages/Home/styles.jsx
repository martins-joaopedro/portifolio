import { styled, keyframes} from "styled-components";

const moving = keyframes`
    0% {
        background-color: #ccc;
    }
    50% {
        background-color: #ccc ;
    }
    75% {
        background-color: #ccc;
    }
    100% {
        background-color: #ccc;  
    }
`

export const Container = styled.div`
    background-size: 300%;
    height: 200vh;
    animation: ${moving} 10s infinite;
`