import { MainDiv, Proj, FlexyDiv, } from "../styles/ProjectsStyles"
import ProjectContainer from "./projectContainer"
import image from "./../projPic/MC.png"
import image2 from "./../projPic/SFR.png"
import image3 from "./../projPic/SIC.png"
import image4 from "./../projPic/SLF.png"

function Projects(){
    const e1 = "Fernando Chavez created and designed the landing page and the explore your cabinet page using html and css anlong with media queries." 
    const e2 = "Fernando Chavez made the entire back end, including login, register, adding a new recipe, viewing recipes, deleting and editing recipes."
    const e3 = "Fernando Chavez created all the connectivity from the front end to the back end using redux for the state management, all sign in pages and all API calls, I also helped with the front end design."
    const e4 = "Fernando Chavez created everything on this app(except the api). It makes an api call to find the lyrics and I made a loading indicator and other special case indicators."
    const l1 = "https://med-cabinet-tgif.netlify.app/"
    const l2 = "https://secret-family-recipes-tt-18.maustrauk.vercel.app/"
    const l3 = "https://frontend-olive-nine.vercel.app/"
    const l4 = "https://tgiflyricfinder.netlify.app/"
    return(
        <MainDiv className="aboutMain" id="projects">
            <Proj className="proj snap">Projects</Proj>
            <FlexyDiv>
                <ProjectContainer link={l1} explain={e1} image={image}/>
                <ProjectContainer link={l2} explain={e2} image={image2}/>
                <ProjectContainer link={l3} explain={e3} image={image3}/>
                <ProjectContainer link={l4} explain={e4} image={image4}/>
            </FlexyDiv>
        </MainDiv>
    )
}

export default Projects