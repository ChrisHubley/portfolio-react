import { useEffect, useState } from "react";
import H2 from "./Atoms/H2";
import P from "./Atoms/P";

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
        <div>
            <H2 text="About"/> 
            <div className="md:grid md:grid-cols-[1fr_3fr]">
                <span></span>
                {text.map(function (copy){
                    return (
                    <P 
                    className="
                    text-sm 
                    font-sans 
                    p-[20px]
                    bg-white
                    mt-[20px] mr-[30px] mb-0 ml-0
                    "

                    key={copy.about} text={copy.about} />
                     )})}

            </div>
        </div>
    )
}