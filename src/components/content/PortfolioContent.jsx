import H2 from "../Atoms/H2.jsx";
import PortfolioInfo from "../PortfolioInfo.jsx";
import {useEffect, useState} from "react";

export default function PortfolioContent(){
    const [portfolioData, setPortfolioData] = useState([])
    function getData(){

        fetch("/portfolio/portfolio.json")
            .then(res => res.json())
            .then(fetchedInfo => {
                setPortfolioData(fetchedInfo.projects)
                console.log(fetchedInfo.projects)

            })
    }
    useEffect(getData, [])
   return (
       <div className="

             ">
        <H2 text="Projects" />
        <div className="
            grid grid-cols-1 md:grid-cols-2 gap-2">

            {portfolioData.map(function (project){
                return <PortfolioInfo
                    key={project.title}
                    title={project.title}
                    image={project.image}
                    info={project.info}
                    alt={project.alt}
                    link={project.link}
                />
            })}
        </div>
    </div>
   )
}