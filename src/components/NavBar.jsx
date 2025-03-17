import NavLinks from "./Atoms/NavLinks";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function NavBar(){
    return(
        <nav className="
            flex flex-row md:justify-between  ml-[7px] md:ml-0 gap-2
            text-white text-xl
            p-0 m-0 ">

            <NavLinks text="About" link="#"/>
            <p>|</p>
            <NavLinks text="Portfolio" link="#"/>
            <p>|</p>
            <NavLinks text="Contact" link="#"/>
            <div className="text-white text-3xl">
                <a href="https://github.com/ChrisHubley" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="px-2" icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/chris-hubley-72b25b318/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="px-2" icon={faLinkedin} /></a>
            </div>
        </nav>
    )
}