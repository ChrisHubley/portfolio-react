import { useEffect, useState } from "react";
import H2 from "../Atoms/H2.jsx";
import P from "../Atoms/P.jsx";

export default function AboutText(){

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
        <div >
            <H2 text="About"/>
            {text.map(function (copy){
                return (
                    <P key={copy.about} text={copy.about}/>
                )})}
        </div>
    )
}