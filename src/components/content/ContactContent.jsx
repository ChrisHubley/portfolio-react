import H2 from "../Atoms/H2.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Button from "../Atoms/Button.jsx";

export default function ContactContent(){
    return(
        //TODO: Make form work, add validations

        <div>
            <form className="
            grid grid-cols-1 md:grid-cols-[1fr_3fr]
            pt-3 gap-2
            text-white
            font-[special-elite]
            ">
                <label className="md:justify-self-end text-white" htmlFor="name">Name:</label>
                <input className="bg-white text-black pl-1 font-sans text-sm" type="text" id="name" name="name"/>

                <label className="md:justify-self-end text-white" htmlFor="email">Email Address:</label>
                <input className="bg-white text-black pl-1 font-sans text-sm" type="email" id="email" name="email"/>

                <label className="md:justify-self-end text-white" htmlFor="message">Message:</label>
                <textarea className=" bg-white text-black pl-1 font-sans text-sm h-20" id="message" name="message"></textarea>
                <span></span>
                <div>
                    <Button className="my-5" type="submit" text="Submit" onClick="this.onClickSubmit"/>
                    <div className="grid grid-cols-2 justify-self-end align-items-top">
                        <a href="https://github.com/ChrisHubley" className="flex-col justify-items-center " target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                className="text-[#ff00c7] hover:text-[#fffb00] active:text-[#ff00c7] text-3xl px-2"
                                icon={faGithub}/>
                            <p className="text-white font-[special-elite] text-[1rem]">GitHub</p>
                        </a>
                        <a href="https://www.linkedin.com/in/chris-hubley-72b25b318/" className="flex-col justify-items-center" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                className="text-[#ff00c7] hover:text-[#fffb00] active:text-[#ff00c7] text-3xl px-2"
                                icon={faLinkedin}/>
                            <p className="text-white font-[special-elite]">LinkedIn</p>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}