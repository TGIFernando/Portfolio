import React from 'react'
import {Img, ProjDiv, Explain, ProjDiv2, A} from "../styles/ProjectsStyles"

function ProjectContainer(props) {
    return (
        <ProjDiv2 >
            <A target="_blank" href={props.link}>
                <ProjDiv className="hoverR">
                    <Img src={props.image}/>
                    <Explain>{props.explain}</Explain>
                </ProjDiv>
            </A>
        </ProjDiv2>
    )
}

export default ProjectContainer
