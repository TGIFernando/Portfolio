import { React, useState } from "react";
import {
  MainForm,
  Contact,
  DIV,
  P,
  Label,
  Input,
  Text,
  Button,
  LinkedIn,
  Github,
} from "../../styles/FormCStyles";
import axios from "axios";
import { useForm } from "react-hook-form";

import Popup from "./popup";
import linkedin from "./pics/61109.png";
import github from "./pics/githubLogo.png";

function ContactForm() {
  const [fin, setFin] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });

  const url = "https://tgif-portfolio.herokuapp.com/api/contact";
  // const urlLocal = "http://localhost:8000/api/contact/"

  const onSubmit = (data) => {
    axios
      .post(`${url}`, data)
      .then((_) => {
        setFin(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainForm onSubmit={handleSubmit(onSubmit)}>
      <Contact>Contact Form</Contact>
      <P>All fields are required</P>
      <br />
      <DIV>
        <Label htmlFor="name">Full Name</Label>
        <Input
          name="name"
          placeholder="Fernando Chavez"
          ref={register({ required: true, minLength: 2 })}
        />
        {/* {errors.name && (<P>Looks like there was an error: {errors.name.type}</P>)} */}
      </DIV>
      <br />
      <DIV>
        <Label htmlFor="email">Email Address</Label>
        <Input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          ref={register({
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />
        {errors.email && <P>Must have a valid email</P>}
      </DIV>
      <br />
      <DIV>
        <Label htmlFor="subject">Subject</Label>
        <Input
          name="subject"
          placeholder="Hiring"
          ref={register({ required: true, minLength: 1 })}
        />
        {/* {errors.name && (<P>Looks like there was an error: {errors.name.type}</P>)} */}
      </DIV>
      <br />
      <DIV>
        <Label htmlFor="message">Message</Label>
        <Text
          name="message"
          placeholder="I hope you have an amazing day \(^_^)/"
          ref={register({ required: true })}
        />
        {/* {errors.message && (<P>Looks like there was an error: {errors.message.type}</P>)} */}
      </DIV>
      <br />
      <Button type="submit" />
      <br></br>
      {fin ? <Popup setFin={setFin} /> : <></>}
      <div>
        <a
          href="https://www.linkedin.com/in/f-chavez/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn src={linkedin} />
        </a>
        <a
          href="https://github.com/TGIFernando"
          target="_blank"
          rel="noreferrer"
        >
          <Github src={github} />
        </a>
      </div>
    </MainForm>
  );
}

export default ContactForm;
