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
    font-size: 13rem;
    color: #F3E8EE;
    @media (max-width: 1024px){
    font-size: 10rem;
    }
    @media (max-width: 768px){
    font-size: 8rem;
    }
    @media (max-width: 412px){
    font-size: 5rem;
    }
    @media (max-width: 375px){
    font-size: 5rem;
    }
`

const Hello = styled.h2`
    color:#A0AFBA;
    font-size: 11rem;
    @media (max-width: 1024px){
    font-size: 8rem;
    }
    @media (max-width: 768px){
    font-size: 6rem;
    }
    @media (max-width: 412px){
    font-size: 4rem;
    }
    @media (max-width: 375px){
    font-size: 4rem;
    }
`

const Stack = styled.h2`
    color:#A0AFBA;
    font-size: 10rem; 
    margin-bottom: 5rem;
    @media (max-width: 1024px){
    font-size: 7rem;
    }
    @media (max-width: 768px){
    font-size: 5rem;
    }
    @media (max-width: 412px){
    font-size: 3rem;
    }
    @media (max-width: 375px){
    font-size: 3rem;
    }
`

export {
    MainDiv,
    Name,
    Hello,
    Stack
}