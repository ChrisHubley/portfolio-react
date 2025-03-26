import { useEffect, useState } from "react";

export default function GetContent({section}){
    const [text, setText] = useState([])
     function getData(){
        fetch("/copy.json")
            .then(res => res.json())
            .then(fetchedInfo =>{
                setText(fetchedInfo.copy)
        })
     }
    useEffect(getData, [])
 
   return( text.map((copy, index) => {
        return (
           <span dangerouslySetInnerHTML={{__html: copy[section]}} key={index} />
        );
   }))
}