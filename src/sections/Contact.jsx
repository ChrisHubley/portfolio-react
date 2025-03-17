import H2 from "../components/Atoms/H2";
import Button from "../components/Atoms/Button.jsx";

export default function Contact(){
    return(
        <section className="bg-[url(images/background2.jpg)] pb-[24px]">
            <H2 text="Get in touch"/>
                <div id="contact" className="p-1.5 bg-[url(images/portfolio_background.png)]
                                            md:bg-[url(images/portfolio_background_desktop.png)]
                                            bg-cover
                                            w-100% max-w-3xl my-[24px] mx-2 md:mx-auto">
                    <form className="grid grid-cols-1 md:grid-cols-[1fr_3fr] p-4
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

        </section>
    )
}