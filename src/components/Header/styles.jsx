import { styled } from "styled-components";

export const LeftIcon = styled.div`   
    @media (max-width: 700px) {
        & .socialmedia {
            display: none;
        }

        & .menu {
            display: block;
        }
    }
`


export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`


export const Logo = styled.div`
    width: 50px;
    background-color: white;
    aspect-ratio: 1;
`

export const NavList = styled.div`
    @media (max-width: 700px) {
        display: none;
    }
`

NavList.itens = styled.li`
    display: inline-block;
    list-style-type: none;
    margin: 0 10px;
`

export const SocialMedia = styled.div`
    width: 50px;
    background-color: white;
    aspect-ratio: 1;
`

