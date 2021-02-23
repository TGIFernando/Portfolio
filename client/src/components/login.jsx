import {React, useState} from 'react'
import axios from "axios"
import { MainDiv, Form, H1} from "../styles/LoginStyles"
import { useHistory } from "react-router-dom"

const val = {
    username: "",
    password: ""
}

function Login() {

    const [form, setForm] = useState(val)
    const { push } = useHistory()

    const onChange = (evt) => {
        const {name, value} = evt.target
        setForm({...form, [name]: value})
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log(form)
        axios.post("https://tgif-portfolio.herokuapp.com/api/auth/login", form)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("id", res.data.userId)
                push("/")
            }).catch(err => {
                console.log(err.message)
            })
    }

    return (
        <MainDiv>
            <H1>ADMIN PAGE</H1>
            <Form onSubmit={onSubmit}>
                <label>Username</label>
                <input name="username" onChange={onChange}/>
                <label>Password</label>
                <input type="password" name="password" onChange={onChange}/>
                <br/>
                <input type="submit"/>
                <br/>
                <br/>
                <button><a href="/">Home</a></button>
            </Form>
        </MainDiv>
    )
}

export default Login
