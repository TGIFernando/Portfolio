import styled from "styled-components"

const A = styled.a`
    text-decoration: none; 
`

const Img = styled.img`
    height:45rem;
    @media (max-width: 1920px){
        height: 30rem;
    }
`
const ProjDiv = styled.div`
    background-color: #0F1E2F;
    margin:.4rem;
    height:98%;
`
const ProjDiv2 = styled.div`
    width:35%;
    background-image: linear-gradient(90deg, rgb(144, 243, 179), rgb(144, 233, 243), rgb(144, 159, 243), rgb(204, 144, 243), rgb(243, 144, 209), rgb(243, 154, 144), rgb(243, 229, 144), rgb(184, 243, 144));
    margin: 1rem;
    @media (max-width: 1920px){
        width: 30%;
    }
    @media (max-width: 1920px){
        width: 40%;
    }
    @media (max-width: 768px){
        width:45%
    }
    @media (max-width: 375px){
        width: 75%;
    }
`
const Explain = styled.h2`
    font-size:3rem;
    text-align:center;
    color: #F8C7CC;
    margin: .5rem;
    @media (max-width: 768px){
        font-size: 2rem;
    }
`

export {
    Img,
    ProjDiv,
    Explain,
    ProjDiv2,
    A
}