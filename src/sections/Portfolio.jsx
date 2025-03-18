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
        <section className="bg-[url(images/welcome_background.jpg)] p-[24px] content-center">
            <div className="bg-black border-2 border-[#0910ce]
             w-100% max-w-[350px] lg:max-w-[1050px] md:max-w-[700px]
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
             my-[24px] mx-2 md:mx-auto
             md:px-[30px]  p-5
             ">
                <H2 text="Portfolio" />
            <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

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