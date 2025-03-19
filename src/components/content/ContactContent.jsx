import H2 from "../Atoms/H2.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import Button from "../Atoms/Button.jsx";

export default function ContactContent(){
    return(
        <div>
        <div id="contact"
             className="grid md:grid-cols-[3fr_1fr]
                w-100% max-w-2xl ">
            <H2 text="Get in touch"/>
            <div className="grid grid-cols-2 justify-self-end align-bottom">
                <a href="https://github.com/ChrisHubley" className="flex-col justify-items-center " target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        className="
                         text-[#ff00c7] hover:text-[#fffb00] active:text-[#ff00c7]
                        text-3xl px-2
                        "
                        icon={faGithub}/>
                    <p className="
                    text-white font-[special-elite] text-[1rem]
                    ">GitHub</p>
                </a>
                <a href="https://www.linkedin.com/in/chris-hubley-72b25b318/" className="flex-col justify-items-center" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon
                        className="
                         text-[#ff00c7] hover:text-[#fffb00] active:text-[#ff00c7]
                        text-3xl px-2
                        "
                        icon={faLinkedin}/>
                    <p className="
                    text-white font-[special-elite]
                    ">LinkedIn</p>
                </a>
            </div>
        </div>
            <form className="
            grid grid-cols-1 md:grid-cols-[1fr_4fr]
            px-10 py-3 gap-2
            text-white
            font-[special-elite]
            ">

                <label className="md:justify-self-end " htmlFor="name">Name:</label>
                <input className="bg-white" type="text" id="name" name="name"/>

                <label className="md:justify-self-end" htmlFor="email">Email Address:</label>
                <input className="bg-white" type="email" id="email" name="email"/>

                <label className="md:justify-self-end" htmlFor="message">Message:</label>
                <textarea className=" bg-white" id="message" name="message"></textarea>
                <span></span>
                <div>
                    <p className="error">Please complete all fields</p>
                    <Button type="submit" text="Submit" onClick="this.onClickSubmit"/>
                </div>
            </form>
        </div>
    )
}