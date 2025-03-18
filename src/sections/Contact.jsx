import H2 from "../components/Atoms/H2";
import Button from "../components/Atoms/Button.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import P from "../components/Atoms/P.jsx";
import NavLinks from "../components/Atoms/NavLinks.jsx";

export default function Contact(){
    return(
        <section className="bg-[url(images/background2.jpg)] py-[24px]">
                <div id="contact" className="p-1.5 bg-[url(images/portfolio_background.png)]
                                            md:bg-[url(images/portfolio_background_desktop.png)]
                                            bg-cover
                                            w-100% max-w-2xl my-[24px] mx-2 md:mx-auto">
                    <div className="bg-white px-2 py-4">
                        <div className="grid md:grid-cols-[3fr_1fr]  pr-10">
                            <H2 text="Get in touch"/>
                            <div className="grid grid-cols-2 justify-self-end">
                                <a href="https://github.com/ChrisHubley" className="flex-col justify-items-center" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="hover:text-[#fffb00] text-[#ff00c7] active:text-[#ff00c7] text-3xl px-2" icon={faGithub}/>
                                    <p className="
                                    text-black font-[special-elite] text-[1rem]
                                    ">GitHub</p>
                                </a>
                                <a href="https://www.linkedin.com/in/chris-hubley-72b25b318/" className="flex-col justify-items-center" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="hover:text-[#fffb00] text-[#ff00c7] active:text-[#ff00c7] text-3xl px-2" icon={faLinkedin}/>
                                    <p className="
                                    text-black font-[special-elite]
                                    ">LinkedIn</p>
                                </a>
                            </div>
                        </div>
                        <form className="grid grid-cols-1 md:grid-cols-[1fr_4fr] px-10 py-3
                                        gap-2  bg-white ">
                            <label className="md:justify-self-end" htmlFor="name">Name:</label>
                            <input className="border" type="text" id="name" name="name"/>
                            <label className="md:justify-self-end" htmlFor="email">Email Address:</label>
                            <input className="border" type="email" id="email" name="email"/>
                            <label className="md:justify-self-end" htmlFor="message">Message:</label>
                            <textarea className="border comments" id="comments" name="field3"></textarea>
                            <span></span>
                            <div>
                                <p className="error">Please complete all fields</p>
                                <Button type="submit" text="Submit" onClick="this.onClickSubmit"/>
                            </div>
                        </form>
                    </div>
                </div>
        </section>
    )
}