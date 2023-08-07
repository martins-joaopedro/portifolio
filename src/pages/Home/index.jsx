import React from "react"

import { Header } from '../../components/Header'
import { GlassCard } from '../../components/GlassCard'
import { Blob } from '../../components/Blob'
import { styled, keyframes } from "styled-components";
import { Waves } from "../../components/Waves";

export const Home = ({ children }) => {
    return (
        <Container>
            <Header></Header>
            <Blob></Blob>
            <GlassCard padding={15}>
                <Text>Olá me chamo João Pedro</Text>
            </GlassCard>
            <Waves c1={"#27027e92"} c2={"#070031"} ></Waves>
        </Container>
    )
}

const Image = styled.img`
    width: 50%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: 10px 10px;
    background-color: #dfdfdf1d;
    border-radius: 50%;
    
    &:hover {
        box-shadow: 1px 1px 3rem #55555540;
    }
`

const Text = styled.p`
    font-family: 'Montserrat medium';
    font-size: 1.5rem;
    color: #fff;
`

const CardContainer = styled.div`

`

const moving = keyframes`
    0% {
        background-color: #0e0d0d;
    }

    25% {
        background-color: #311313;
    }

    50% {
        background-color: #1a1a1a;
    }

    75% {
        background-color: #0e0d0d;
    }
    100% {
        background-color: #25002e;  
    }
`

const Container = styled.div`
    height: 150vh;
    animation: ${moving} 10s infinite alternate;
    padding-top: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
`