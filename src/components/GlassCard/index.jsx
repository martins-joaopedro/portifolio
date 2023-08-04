import React from 'react'
import styled from "styled-components"

import me from '../../assets/pic.png'

export const GlassCard = () => {
    return (
        <Container>

        </Container>
    )
}

const Container = styled.div`
    height: 50vh;
    width: 80vw;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(7px);
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.021);
    box-shadow: 0px 8px 32px rgb(0, 0, 0. 0.3);
`


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