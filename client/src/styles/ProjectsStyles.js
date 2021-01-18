import styled from "styled-components"

const MainDiv = styled.div`
    height: 100vh;
    background-color: #5C6D70;
    @media (max-width: 375px){
    height: 235vh;
    }
`
const Proj = styled.h1`
    text-align: center;
    font-size: 8rem;
    color: #F8C7CC;
    padding: 1rem;
    @media (max-width: 375px){
    font-size: 6rem;
    }
`

const FlexyDiv = styled.div`
display:flex;
justify-content: space-around;
flex-flow: row wrap;
`

export {
    MainDiv,
    Proj,
    FlexyDiv
}