import {MainDiv, Name, Hello, Stack, A} from "../styles/HomeStyles"

function Home(){

    return(
        <MainDiv className="snap" id="home">
            <Hello>🚀Hello, I'm🚀</Hello>
            <Name>Ferna<A href="https://www.youtube.com/watch?v=DLzxrzFCyOs" target="_blank">n</A>do Chavez</Name>
            <Stack>A Full Stack Web Developer</Stack>
        </MainDiv>
    )
}

export default Home