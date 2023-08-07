import { styled, keyframes } from "styled-components"
import "./styles.css"

const random = (max = 100) => {
    return Math.floor(Math.random() * max);
}

let move = {};

export const SideBarLights = () => {

    window.addEventListener("scroll", () => {
       let wrapper = document.getElementById("wrapper")
       wrapper.classList.toggle("show", window.scrollY > 600)
    }) 

    let i= [1,2,3,4,5,6,7,8,9]
    
    return(
        <Container>
                <Wrapper id="wrapper">
                    {
                        i.map((i, v) => {
                            return(<>
                                <Light className={"c"+i} top={random(20)} right={random()} size={random(20)}></Light>
                            </>)
                        })  
                    }
                    
                    
                </Wrapper>
        </Container>
    )
}

const blur = keyframes`

    0% {
        filter: blur(1px);
    }

    50% {
        filter: blur(7px);
    }

    100%{
        filter: blur(2px);
    }

    100%{
        filter: blur(0px);
    }
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    & .show {
        transform: translateX(100%);
        animation: ${blur} 2s infinite;
    }

`
let N = 5;
let colors = ["#ff8800", "#fbff00", "#fd5d00", "#ff9900", "#ffd754"]

const getAnimation = () => {
    console.log("chamou")
    let move = keyframes`
        0% {
            top: ${random()}%;
            left: ${random()}%;
            background-color: ${colors[random(2)]};
            
        }
        25% {
            box-shadow: 0px 0px 0.5rem #ffffff34;
        }
        50%{
            top: ${random()}%;
            left: ${random()}%;
            background-color: ${colors[random(2)]};
            box-shadow: 0px 0px 2rem ${colors[random(2)]};
        }
        75%{
            box-shadow: 0px 0px 0.5 #ffffff34;
        }
        100% {
            top: ${random()}%;
            left: ${random()}%;
            background-color: ${colors[random(2)]};
            box-shadow: 0px 0px 2rem ${colors[random(2)]};
        }
    `
    return move;
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    overflow-x: hidden;
    left: -100%;
    width: 100%;
    height: 100%;
    transition: all 5s ease-in-out;

    & .c1 {
        animation: ${getAnimation()} infinite alternate-reverse 20s;
    }
    & .c2 {
        animation: ${getAnimation()} infinite alternate-reverse 20s;
    }
    & .c3 {
        animation: ${getAnimation()} infinite alternate-reverse 20s;
    }
    & .c4 {
        animation: ${getAnimation()} infinite alternate-reverse 20s;
    }
    & .c5 {
        animation: ${getAnimation()} infinite alternate-reverse 20s;
    }
    & .c6 {
        animation: ${getAnimation()} infinite alternate-reverse 20s;
    }
    & .c7 {
        animation: ${getAnimation()} infinite alternate-reverse 20s;
    }
    & .c8 {
        animation: ${getAnimation()} infinite alternate-reverse 20s;
    }
    & .c9 {
        animation: ${getAnimation()} infinite alternate-reverse 20s;
    }
`

let Light = styled.div`
    position: absolute;
    top: ${props => props.top}%;
    right: ${props => props.right}%;
    width: ${props => props.size}px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${props => props.color};

    
`

