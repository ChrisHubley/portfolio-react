import { useEffect } from "react"
import { useState } from "react"
import H2 from "../components/Atoms/H2";
import PortfolioInfo from "../components/PortfolioInfo";
import PortfolioModal from "../components/PortfolioModal.jsx";

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
            <div className="p-1.5 bg-[url(images/portfolio_background.png)]
                                            md:bg-[url(images/portfolio_background_desktop.png)]
                                            bg-cover
                                            w-100% max-w-[350px] lg:max-w-[1050px] md:max-w-[700px] my-[24px] md:mx-auto">
            <div className="bg-white
            p-4
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                <PortfolioModal />


        </section>

    )
}