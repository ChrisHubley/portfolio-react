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
                <div className="md:grid md:grid-cols-[1fr_3fr]">
                    <span></span>
                        <div className="px-7 py-5 my-[24px] md:mt-[50px] bg-black border-2 border-[#0910ce]">
                            <H2 text="About"/>
                            {text.map(function (copy){
                            return (
                                <P key={copy.about} text={copy.about}/>
                             )})}
                        {/*</div>*/}
                    </div>
                </div>
    )
}