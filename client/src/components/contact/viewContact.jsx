import {React, useEffect, useState} from 'react'
import {axiosWithAuth} from "../../Utility/axiosWithAuth"
import Contain from "./contactContainer"
import {MainDiv} from "../../styles/ViewContact"

const initaial = [{ID: 0, name: "", email: "", subject: "", message:""}]
function ViewContact() {

    const [data, setData] = useState(initaial)

    useEffect(() => {
         axiosWithAuth().get("/")
            .then(async res => {
                console.log(res)
                await setData((res.data))
                console.log(data)
            }).catch(error => {
                console.log(error.message)
            })
    }, [])

    return (
        <MainDiv>
             {data.map(item => <Contain key={item.ID} name={item.Name} email={item.Email} subject={item.Subject} message={item.Message}/>)}
        </MainDiv>
    )
}

export default ViewContact
