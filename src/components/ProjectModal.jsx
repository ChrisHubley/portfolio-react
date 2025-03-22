import {useEffect, useState} from "react";
import ProjectModalLayout from "./ProjectModalLayout.jsx";

export default function ProjectModal({id}){
    //TODO: Make modal and make it work

    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
    const [image, setImage] = useState("")
    const [alt, setAlt] = useState("")
    const [github, setGithub] = useState("")
    const [link, setLink] = useState("")
    const [date, setDate] = useState("")

    function getProject() {

        fetch(`/portfolio/portfolio.json/${id}`)
            .then(res => res.json())
            .then(fetchedInfo => {
                setTitle(fetchedInfo.projects.title)
                setInfo(fetchedInfo.projects.info)
                setImage(fetchedInfo.projects.image)
                setAlt(fetchedInfo.projects.alt)
                setGithub(fetchedInfo.projects.github)
                setLink(fetchedInfo.projects.liveLink)
                setDate(fetchedInfo.projects.date)
            })
    }

    useEffect(getProject, [])

    return(
        <ProjectModalLayout info={info} alt={alt} github={github} image={image} title={title} date={date} liveLink={link} />
    )
}






// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog