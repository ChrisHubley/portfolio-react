import H2 from "./Atoms/H2.jsx";
import P from "./Atoms/P.jsx";
import {useState} from "react";

export default function ProjectModal(){
    //TODO: Make modal and make it work
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
    const [image, setImage] = useState("")
    const [alt, setAlt] = useState("")
    const [github, setGithub] = useState("")
    const [link, setLink] = useState("")

    function getData(){

        fetch(`/portfolio/portfolio.json/${title}`)
            .then(res => res.json())
            .then(fetchedInfo => {
                setTitle(fetchedInfo.projects)

            })

}






// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog