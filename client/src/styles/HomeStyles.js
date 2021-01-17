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
`

const Hello = styled.h2`
    color:#A0AFBA;
    font-size: 11rem;
`

const Stack = styled.h2`
    color:#A0AFBA;
    font-size: 10rem; 
    margin-bottom: 5rem;
`

export {
    MainDiv,
    Name,
    Hello,
    Stack
}