import React from 'react'
import styled from "styled-components"

export const GlassCard = ({ children, padding }) => {
    return (
        <Container padding={padding}>
            { children }
        </Container>
    )
}

const Container = styled.div`
    width: clamp(100px, 85%, 700px);
    height: clamp(400px, 50vh, 500px);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(7px);
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.021);
    box-shadow: 0px 8px 32px rgb(0, 0, 0. 0.3);
    padding: ${props => props.padding}px;
`
