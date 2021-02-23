import styled from "styled-components"

const MainDiv = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: #776885;
`
const Name = styled.h1`
    font-size: 3.5rem;
    color: #F3E8EE;
    @media (min-width: 768px){
     font-size:10rem;   
    }
    @media (min-width: 1440px){
     font-size:15rem;   
    }
`

const Hello = styled.h2`
    color:#A0AFBA;
    font-size: 4rem;
    @media (min-width: 768px){
     font-size:8rem;   
    }
    @media (min-width: 1440px){
     font-size:10rem;   
    }
`

const A = styled.a`
    text-decoration: none;
    color: #F3E8EE;
    cursor: pointer;
`

const Stack = styled.h2`
    color:#A0AFBA;
    font-size: 3.5rem;
    text-align: center;
    @media (min-width: 768px){
     font-size:8rem;   
    }
    @media (min-width: 1440px){
     font-size:10rem;   
    }
`

const Button = styled.h1`
    background-color: #3d7ba9;
    padding: .5rem;
    font-size:3rem;
    border-radius: 20px;
    box-shadow: 2px 5px 5px;
    &:active{
        box-shadow: inset 2px 5px 5px;
    }
`

export {
    MainDiv,
    Name,
    Hello,
    Stack,
    A,
    Button,
}