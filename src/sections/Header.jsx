import NavBar from "../components/NavBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import H1 from "../components/Atoms/H1.jsx";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";


export default function Header(){
    return(
        <header className="sticky z-1 top-0 bg-black">
            <div className="
                md:h-[90px]
                h-[30px]
                backdrop-brightness-50
                bg-[url(images/portfolio_background.png)]
                md:bg-[url(images/portfolio_background_desktop.png)]
                bg-cover
            "></div>
            <div className="
            grid grid-cols-[5fr_1fr]
            md:justify-between md:items-center
            pr-3 pl-0 h-7 md:h-12">
                <a href="/" >
                    <H1 text="chris hubley." />
                </a>
                <div className="hover:text-[#fffb00] text-[#ff00c7] active:text-[#ff00c7] pb-4 pt-1 text-right align-top text-2xl md:text-3xl" >
                    <a href="https://github.com/ChrisHubley" className="px-1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon  icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/chris-hubley-72b25b318/" className="px-1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </div>
            <div className="grid md:justify-items-end align-top pr-3">
                <NavBar/>
            </div>
        </header>


    )
}