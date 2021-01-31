import styled from "styled-components"

const A = styled.a`
    text-decoration: none; 
`

const Img = styled.img`
   
`
const ProjDiv = styled.div`
    background-color: #0F1E2F;
    margin:.4rem;
`
const ProjDiv2 = styled.div`
    background-image: linear-gradient(90deg, rgb(144, 243, 179), rgb(144, 233, 243), rgb(144, 159, 243), rgb(204, 144, 243), rgb(243, 144, 209), rgb(243, 154, 144), rgb(243, 229, 144), rgb(184, 243, 144));
    margin: 1rem;
`
const Explain = styled.h2`
    font-size:2rem;
    text-align:center;
    color: #F8C7CC;
    margin: .5rem;
`

export {
    Img,
    ProjDiv,
    Explain,
    ProjDiv2,
    A
}