import { styled } from "styled-components";
import { useEffect } from 'react'
import './style.css'

import instagram from '../../assets/images/instagram.png'

export const Header = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let container = document.getElementById("header-container")
            container.classList.toggle("scrolling", window.scrollY > 10)
        })
    }, [])

    const toggleMenu = () => {
        const menu = document.querySelector(".menu-container");
        const tooltip = document.querySelector(".menu-tooltip");
        menu.classList.toggle("close")
        tooltip.classList.toggle("show")
    }

    return (
        <Container>
            <div id="header-container">
                <NavList>
                    <li>Sobre mim</li>
                    <li>Formação</li>
                    <li>Projetos</li>
                </NavList>
                <LeftIcon>
                    <div className="socialmedia">
                    <img class="icons" src={instagram}></img>
                    </div>
                    <button className="button-menu" onClick={toggleMenu}>
                        <div className="menu-container">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </LeftIcon>
            </div>
            <div className="menu">
                <div className="menu-tooltip">
                    <li>Sobre mim</li>
                    <li>Formação</li>
                    <li>Projetos</li>
                </div>
            </div>
        </Container>
    )
}

const LeftIcon = styled.div`   
    @media (max-width: 700px) {

        & .socialmedia {
            display: none;
        }

        & .menu-container {
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

    @media (max-width: 700px) {
        & #header-container {
            height: 50px;
            background-color: rgb(255, 255, 255);
            color: #000;
        }
    }
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

