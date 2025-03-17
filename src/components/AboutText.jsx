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
                <div className="md:grid md:grid-cols-[1fr_3fr]">
                    <span></span>
                    <div className="p-1.5 bg-[url(images/portfolio_background.png)]
                                       md:bg-[url(images/portfolio_background_desktop.png)] bg-cover
                                      my-[24px] md:mt-[24px] md:mb-0">
                        <div className="p-4 bg-white">
                        {text.map(function (copy){
                            return (
                                <P key={copy.about} text={copy.about}/>
                             )})}
                        </div>
                    </div>
                </div>
            </div>
    )
}