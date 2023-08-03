import { useEffect } from 'react'
import {Container, Logo, NavList, SocialMedia, LeftIcon} from './styles'

import './style.css'

export const Header = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const container = document.getElementById("header-container");
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
                    <NavList.itens>Sobre mim</NavList.itens>
                    <NavList.itens>Experiências</NavList.itens>
                    <NavList.itens>Projetos</NavList.itens>
                </NavList>
                <LeftIcon>
                    <div className="socialmedia"></div>
                    <button className="menu" onClick={toggleMenu}></button>
                </LeftIcon>
            </div> 
        </Container>
    )
}