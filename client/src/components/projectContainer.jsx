import React from 'react'
import {Img, ProjDiv, Explain, ProjDiv2, A} from "../styles/ProjectContainerStyles"

function ProjectContainer(props) {
    return (
        <ProjDiv2 className="hoverR">
            <A target="_blank" href={props.link}>
                <ProjDiv>
                    <Img src={props.image}/>
                    <Explain>{props.explain}</Explain>
                </ProjDiv>
            </A>
        </ProjDiv2>
    )
}

export default ProjectContainer
