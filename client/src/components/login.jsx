import {React, useState} from 'react'
import axios from "axios"
import { MainDiv, Form} from "../styles/LoginStyles"
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
        axios.post("http://localhost:8000/api/auth/login", form)
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
            <Form onSubmit={onSubmit}>
                <label>Username</label>
                <input name="username" onChange={onChange}/>
                <label>Password</label>
                <input type="" name="password" onChange={onChange}/>
                <br/>
                <input type="submit"/>
            </Form>
        </MainDiv>
    )
}

export default Login
