import NavLinks from "./Atoms/NavLinks";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function NavBar(){
    return(
        //TODO: Make links work
        <nav className="
            flex flex-row md:justify-between ml-[7px] md:ml-0 gap-1 align-top
            text-white text-[1.2rem]">

            <NavLinks text="About" link="#"/>
            <p>|</p>
            <NavLinks text="Projects" link="#"/>
            <p>|</p>
            <NavLinks text="Contact" link="#"/>
                <a href="https://github.com/ChrisHubley" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="hover:text-[#fffb00] text-[#ff00c7] active:text-[#ff00c7] pl-1 text-[1.7rem]" icon={faGithub}/></a>
                <a href="https://www.linkedin.com/in/chris-hubley-72b25b318/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="hover:text-[#fffb00] text-[#ff00c7] active:text-[#ff00c7] pl-1 text-[1.7rem]" icon={faLinkedin}/></a>
            {/*</div>*/}
        </nav>
    )
}