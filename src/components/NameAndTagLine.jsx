import { useEffect, useState } from "react"
import H3 from "./Atoms/H3";
import H1 from "./Atoms/H1";

export default function NameAndTagLine(){

    const [text, setText] = useState([])
    function getData(){

        fetch("/copy.json")
            .then(res => res.json())
            .then(fetchedInfo =>{
                setText(fetchedInfo.copy)

            })
    }
    useEffect(getData, [])
    return(
        <div>
            <H1 text="chris hubley." />
            {text.map(function (copy){
                return <H3 key={copy.tagline} text={copy.tagline} />
            })}
             
        </div>
        

    )
}