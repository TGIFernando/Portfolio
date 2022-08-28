import { MainDiv, Proj, FlexyDiv } from "../styles/ProjectsStyles";
import ProjectContainer from "./projectContainer";
import image from "./../projPic/TRICK.png";
import image2 from "./../projPic/mark.png";
import image3 from "./../projPic/SIC.png";
import image4 from "./../projPic/shame.png";

function Projects() {
  const e1 =
    "Fernando Chavez helped with the accessibility of the site and with essential game functions such as the timer displaying the correct time to all of the players in the lobby.";
  const e2 =
    "Fernando Chavez is currently the social media manager for Mark and Monica's Family Pizza. If you would like to see more work check out the mark and monica's instagram";
  const e3 =
    "Fernando Chavez created all the connectivity from the front end to the back end using redux for the state management, all sign in pages and all API calls, I also helped with the front end design.";
  const e4 =
    "Fernando Chavez helped with the main layout of the site, helped set up POS and other things like Google Analytics. Currently making custom UI for them.";
  const l1 = "https://tricktionary.monster/";
  const l2 = "http://www.markandmonicaspizza.com/";
  const l3 = "https://frontend-olive-nine.vercel.app/";
  const l4 = "https://shamelessbidets.com/";
  return (
    <MainDiv className="aboutMain" id="projects">
      <Proj className="proj snap">Projects</Proj>
      <FlexyDiv>
        <ProjectContainer link={l2} explain={e2} image={image2} />
        <ProjectContainer link={l4} explain={e4} image={image4} />
        <ProjectContainer link={l1} explain={e1} image={image} />
        <ProjectContainer link={l3} explain={e3} image={image3} />
      </FlexyDiv>
    </MainDiv>
  );
}

export default Projects;
