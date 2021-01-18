import styled from "styled-components"

const MainDiv = styled.div`
    height: 100vh;
    background-color: #5C6D70;
    @media (max-width: 1920px){
    height: 150vh;
    }
    @media (max-width: 412px){
    height: 300vh;
    }
    @media (max-width: 375px){
    height: 300vh;
    }
`
const Proj = styled.h1`
    text-align: center;
    font-size: 8rem;
    color: #F8C7CC;
    padding: 1rem;
    @media (max-width: 412px){
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