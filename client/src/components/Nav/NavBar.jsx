import React from 'react'
import styled from "styled-components"

const OL = styled.ol`
list-style: none;
display:flex;
align-items: center;
justify-content:center;
flex-flow: column nowrap;
position: fixed;
top: 0;
right: 0;
height: 100vh;
width: 50vw;
background-color: #687F90;
transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"};
transition: 0.3s ease-in-out;
`

const LI = styled.li`
    padding: 10px;
    font-size: 10rem;
    color: white;
    a{
        text-decoration: none;
        color: white;
    }
    @media (max-width: 375px){
        font-size: 4rem;
    }
`

function NavBar({ open }) {
    return (
        <nav>
            <OL open={open}>
                <LI><a href="#home">Home</a></LI>
                <LI><a href="#projects">Projects</a></LI>
            </OL>
        </nav>
    )
}

export default NavBar
