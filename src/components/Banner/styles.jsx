import styled from "styled-components"

export const Container = styled.div`
    margin-top: 5rem;
    height: 20vh;
    width: 80vw;
    background-color: #0f0f0f; 
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
`
export const ImageMask = styled.div`
    width: 180px;
    height: 180px;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 10px 10px;
    background-color: #202020; 
`

export const Text = styled.p`
    font-family: 'Montserrat medium';
    font-size: 2rem;
    color: #fff;
`
