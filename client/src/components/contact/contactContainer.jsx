import React from 'react'
import { ConDiv, Name, } from "../../styles/ViewContact"

function ContactContainer({name, email, subject, message}) {
    return (
        <ConDiv>
            <Name>{name}</Name>
            <Name>{email}</Name>
            <Name>{subject}</Name>
            <h1>{message}</h1>
        </ConDiv>
    )
}

export default ContactContainer
