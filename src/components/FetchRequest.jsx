import { useEffect, useState } from "react";

export default function FetchRequest({section}){

    const [text, setText] = useState([])
     function getData(){
    
        fetch("/copy.json")
            .then(res => res.json())
            .then(fetchedInfo =>{
                setText(fetchedInfo.copy)
        })
     }
    useEffect(getData, [])
 
 
    let content = text.map((copy, index) => {
        return (
           <span key={index}>{copy[section]}</span>
        );
    });

    return content;
}