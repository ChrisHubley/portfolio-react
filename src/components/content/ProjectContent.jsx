import ProjectLayout from "../ProjectLayout.jsx";
import {useEffect, useState} from "react";

export default function ProjectContent(){
    const [portfolioData, setPortfolioData] = useState([])

    function getData(){

        fetch("/portfolio/portfolio.json")
            .then(res => res.json())
            .then(fetchedInfo => {
                setPortfolioData(fetchedInfo.projects)
            })
    }
    useEffect(getData, [])
   return (
       <div>
           <p className=" text-white
            m-0
            pb-7
            font-[special-elite]
            text-[18px]
            ">Click a project to find out more and view on Github</p>
        <div className="
            grid grid-cols-1 md:grid-cols-2 gap-10">

            {portfolioData.map(function (project){
                return <ProjectLayout
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    alt={project.alt}
                />
            })}
    </div>
       </div>

   )
}