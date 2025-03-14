// import { useEffect, useState } from "react";


// export default function fetchCopy({copyType}){
//     const [{text}, setText] = useState([])
    
    
//     function getData(){

//         fetch("/copy.json")
//             .then(res => res.json())
//             .then(fetchedInfo =>{
//                 setText(fetchedInfo.copy)
//                 // console.log(fetchedInfo.copy)

//             })
//     }
// useEffect(getData, [])

//     return(
//         <>
//         {text.map(function (copy){
//                 return text={copy.{copyType}}
//                         })}
//         </>
//     )
// }