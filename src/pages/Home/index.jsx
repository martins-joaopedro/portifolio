import React from "react"

import { Header } from '../../components/Header'
import { GlassCard } from '../../components/GlassCard'
import { Blob } from '../../components/Blob'
import { styled, keyframes} from "styled-components";

export const Home = () => {
  return (
    <Container>
       <Header></Header>
       <Blob></Blob>
       <GlassCard></GlassCard>
    </Container>
  )
}

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 10px 10px;
    background-color: #202020; 
`

const Text = styled.p`
    font-family: 'Montserrat medium';
    font-size: 2rem;
    color: #fff;
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
`