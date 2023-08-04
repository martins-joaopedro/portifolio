import { styled, keyframes} from "styled-components";

const moving = keyframes`
    0% {
        background-color: #111111;
    }
    50% {
        background-color: #080327;
    }
    75% {
        background-color: #0b0016;
    }
    100% {
        background-color: #111111;  
    }
`

export const Container = styled.div`
    height: 200vh;
    animation: ${moving} 3s infinite ease-in-out;
    padding-top: 350px;
    display: flex;
    justify-content: center;
`