import { useEffect } from "react"
import { useState } from "react"
import H2 from "../components/Atoms/H2";
import PortfolioInfo from "../components/PortfolioInfo";

export default function Portfolio(){
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
        <section className="bg-[url(images/welcome_background.jpg)] pb-[24px]">
             <H2 text="Portfolio" />
            <div className="bg-white
            p-[20px] my-[20px] mx-auto w-100% max-w-[700px] ">

                {portfolioData.map(function (project){
                    return <PortfolioInfo
                            key={project.title}
                            title={project.title}
                            image={project.image}
                            info={project.info}
                            alt={project.alt}
                        />
            })}
            </div>

        </section>

    )
}