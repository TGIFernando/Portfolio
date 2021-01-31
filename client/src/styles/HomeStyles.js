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

export {
    MainDiv,
    Name,
    Hello,
    Stack
}