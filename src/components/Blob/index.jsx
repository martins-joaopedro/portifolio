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
`

const move = keyframes`
    0% {
        border-radius: 48% 74% 56% 98% / 34% 78% 46% 58%;
        transform: translateX(-20px) rotate(25deg);
        background-position: 0%;
        box-shadow: 1px 1px 3rem #ff93064e;
    }
    
    25% { 
        border-radius: 100% 27% 100% 42% / 100% 20% 100% 71%;
        transform: rotate(25deg) translateY(-40px);
        background-position: 45%;
        box-shadow: -5px -1px 5rem #ff0946,
        10px 10px 3rem #e63600  ;
    }

    30% {
        border-radius: 29% 100% 100% 53% / 51% 81% 40% 32%;
    }

    50% { 
        border-radius: 51% 56% 61% 45% / 51% 57% 89% 54%;
        background-position: 25%;
        transform: rotate(20deg) translateY(100px);
        box-shadow: 5px 5px 3rem #ff0984;
    }

    75% {
        border-radius: 97% 45% 96% 52% / 67% 85% 97% 78%;
        background-position: 75%;
        transform: translateX(-40px) rotate(-15deg);
        box-shadow: 1px 1px 3rem #6d6d6d5e;
    }

    100% {
        border-radius: 48% 74% 56% 98% / 34% 78% 46% 58%;
        background-position: 95%;
        transform: rotate(0deg) translateX(10px) translateY(-10px) ;
        box-shadow: -10px -10px 3rem #ce0bff,
        10px 10px 3rem #1839f5;
    }
`

const Main =  styled.div`
    width: clamp(200px, 50vw, 500px);
    aspect-ratio: 1;
    background: linear-gradient(-45deg, #1839f5, #ce0bff, #e63600, #ff0984, #ff9306);
    background-size: 800%;
    animation: ${move} 10s alternate infinite;
`