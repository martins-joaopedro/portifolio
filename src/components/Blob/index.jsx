import React from "react";
import { styled, keyframes } from "styled-components";

export const Blob = () => {
    return(
        <Container>
            <Main></Main>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 30%;
`

const move = keyframes`
    0% {
        border-radius: 48% 74% 56% 98% / 34% 78% 46% 58%;
        background-position: 0%;
    }
    
    50% { 
        border-radius: 51% 17% 25% 17% / 34% 100% 32% 89%;
        background-position: 25%;
        height: 550px;
        width: 550px;
    }

    75% {
        border-radius: 16% 45% 96% 52% / 13% 19% 23% 78%;
        background-position: 50%;
        width: 430px;
        height: 430px
    }

    100% {
        border-radius: 48% 74% 56% 98% / 34% 78% 46% 58%;
        background-position: 95%;
        height: 430px;
        height: 430px;
    }
`

const Main =  styled.div`
    background: linear-gradient(-45deg, #1839f5, #540568, #3558a197, #c53e81, #095e52);
    background-size: 500%;
    width: 500px;
    height: 500px;
    backdrop-filter: blur(10px);
    animation: ${move} 10s alternate infinite;
`