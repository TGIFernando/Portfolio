import React, {useState} from 'react'
import styled from "styled-components"

import NavBar from "./NavBar"

const StyledBurger = styled.div`
    height: 1rem;
    width: 4.5rem;
    position: fixed;
    top: 15px;
    right:2.5rem;
    z-index:1;
    @media (min-width: 768px){
        height: 4rem;
        width:6.1rem;
    }

div{
    width:10rem;
    height:.5rem;
    background-color: ${({ open }) => open ? "white" : "black"};
    border-radius: 10px;
    transform-origin: 0;
    margin: 5px;
    transition: all 0.3s linear;
    @media (min-width: 768px){
        height:.8rem;
    }

    &:nth-child(1){
        transform: ${({open}) => open ? "rotate(25.5deg)" : "rotate(0)"}
    }
    &:nth-child(2){
        transform: ${({open}) => open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({open}) => open ? "0" : "1"};
    }
    &:nth-child(3){
        transform: ${({open}) => open ? "rotate(-25.5deg)" : "rotate(0)"}
    }
}`

function Burger({logg}) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </StyledBurger>
            <NavBar open={open} logg={logg} setOpen={setOpen}/>
        </>
    )
}

export default Burger
