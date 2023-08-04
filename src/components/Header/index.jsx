import { styled } from "styled-components";
import { useEffect } from 'react'

import './style.css'

export const Header = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const container = document.getElementById("header-container")
            container.classList.toggle("scrolling", window.scrollY > 100)
        })
    }, [])

    const toggleMenu = () => {
        const menu = document.querySelector(".menu");
        console.log(menu)
        menu.classList.toggle("show")
    }

    return (
        <Container>
            <div id="header-container">
                <Logo></Logo>
                <NavList>
                    <li>Sobre mim</li>
                    <li>Formação</li>
                    <li>Projetos</li>
                </NavList>
                <LeftIcon>
                    <div className="socialmedia"></div>
                    <button className="menu" onClick={toggleMenu}></button>
                </LeftIcon>
            </div>
        </Container>
    )
}

const LeftIcon = styled.div`   
    @media (max-width: 700px) {
        & .socialmedia {
            display: none;
        }

        & .menu {
            display: block;
        }
    }
`

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
`

const Logo = styled.div`
    width: 50px;
    background-color: white;
    aspect-ratio: 1;
`

const NavList = styled.div`
    @media (max-width: 700px) {
        display: none;
    }
`
