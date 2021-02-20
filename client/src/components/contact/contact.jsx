import React from 'react'

import ContactForm from "./contactForm"
import {MainDiv} from "../../styles/ContactStyles"

function Contact() {
    return (
        <MainDiv className="snap" id="contact">
            <ContactForm/>
        </MainDiv>
    )
}

export default Contact