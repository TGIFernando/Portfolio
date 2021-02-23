import {MainDiv, Name, Hello, Stack, A, Button} from "../styles/HomeStyles"
import {useHistory} from "react-router-dom"
import {useState, useEffect} from 'react'

function Home(){
    const {push} = useHistory()
    const [count1, setCount1] = useState(0)
    const onClick1 = () => {
        setCount1(count1+1)
        console.log(count1)
    }
    const [count2, setCount2] = useState(0)
    const onClick2 = () => {
        setCount2(count2+1)
        console.log(count2)
    }

    useEffect(() => {
        if (count1 === 5 && count2 === 5){
           push("/login")
        }
    }, [count2, count1, push])

    return(
        <MainDiv className="snap" id="home">
            <Hello><span onClick={onClick1}>🚀</span>Hello, I'm<span onClick={onClick2}>🚀</span></Hello>
            <Name>Ferna<A href="https://www.youtube.com/watch?v=DLzxrzFCyOs" target="_blank">n</A>do Chavez</Name>
            <Stack>A Full Stack Web Developer</Stack>
            <Button><A href="#contact">Contact Me</A></Button>
        </MainDiv>
    )
}

export default Home