import styled from "styled-components"

const MainDiv = styled.div`
    height: 100vh;
    background-color: #5C6D70;
`
const Proj = styled.h1`
    text-align: center;
    font-size: 8rem;
    color: #F8C7CC;
    padding: 1rem;
`
const Img = styled.img`
height:45rem;
`
const ProjDiv = styled.div`
background-color: #0F1E2F;
margin:.4rem;
`
const ProjDiv2 = styled.div`
width:35%;
background-image: linear-gradient(90deg, rgb(144, 243, 179), rgb(144, 233, 243), rgb(144, 159, 243), rgb(204, 144, 243), rgb(243, 144, 209), rgb(243, 154, 144), rgb(243, 229, 144), rgb(184, 243, 144));
margin: 1rem;
`
const Explain = styled.h2`
font-size:3rem;
text-align:center;
color: #F8C7CC;
margin: .5rem;
`
const FlexyDiv = styled.div`
display:flex;
justify-content: space-around;
flex-flow: row wrap;
`
const A = styled.a`
text-decoration: none;
`
export {
    MainDiv,
    Proj,
    Img,
    ProjDiv,
    Explain,
    FlexyDiv,
    ProjDiv2,
    A
}