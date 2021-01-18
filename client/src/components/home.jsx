import {MainDiv, Name, Hello, Stack} from "../styles/HomeStyles"

function Home(){




    return(
        <MainDiv className="snap" id="home">
            <Hello>🚀Hello, I'm🚀</Hello>
            <Name>Fernando Chavez</Name>
            <Stack>A Full Stack Web Developer</Stack>
        </MainDiv>
    )
}

export default Home