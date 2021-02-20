import styled from "styled-components"

const MainForm = styled.form`
    display: flex;
    /* justify-content:center; */
    align-items: center;
    flex-direction:column;
    background-color: #177E89;
    height: 90vh;
    width: 80vw;
    padding: 1rem;
`

const DIV = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;

`

const Contact = styled.h1`
    font-size: 3rem;
`

const P = styled.p`
    font-size: 2rem;
    text-align: center;
    color: darkred;
`

const Label = styled.label`
    font-size: 2rem;
    text-align: center;
`

const Input = styled.input`
    border-radius: 10px;
    width: 75vw;
    height: 2.5rem;
    border-color: #177E89;
`

const Text = styled.textarea`
    width: 75vw;
    height: 6rem;
    border-radius: 5px;
`

const Button = styled.input `
    width: 30vw;
    height: 2.5rem;
    border-radius: 5px;
`

const PopUpDiv = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    background-color: #6024b0;
    z-index: 2;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: 50vh;
    font-size:3rem;
    text-align: center;
`

const LinkedIn = styled.img`
    height: 10vh;
    &:hover{
        opacity: 50%;
        transition: .3s;
    }
`

const Github = styled.img`
    height: 10vh;
    &:hover{
        opacity: 50%;
        transition: .3s;
    }
`

const ButtonT = styled.button`
    width: 20vw;
    height: 5vh;
`

export {
    MainForm,
    DIV,
    PopUpDiv,
    P,
    Label,
    Input,
    Text,
    Button,
    LinkedIn,
    Github,
    Contact,
    ButtonT
}