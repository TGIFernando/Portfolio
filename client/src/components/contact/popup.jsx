import React from 'react'
import { PopUpDiv, ButtonT} from "../../styles/FormCStyles"

function Popup(props) {
    const onClick = () => {
        props.setFin(false)
    } 
    return (
        <PopUpDiv>
            <p>Your form has been submitted</p>
            <ButtonT onClick={onClick}>👍</ButtonT>
        </PopUpDiv>
    )
}

export default Popup
