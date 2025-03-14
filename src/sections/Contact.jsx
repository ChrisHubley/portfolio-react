import H2 from "../components/Atoms/H2";
import Button from "../components/Atoms/Button.jsx";

export default function Contact(){
    return(
        <section className="bg-[url(images/background2.jpg)] pb-[24px]">
            <H2 text="Get in touch"/>
            <div id="contact" className="
               w-100% max-w-[500px] md:max-w-[700px] md:m-auto
            my-0 mx-auto p-0">
                <form className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:m-[24px] bg-white p-4">
                    <label className="md:justify-right" htmlFor="name">Name:</label>
                    <input className="border" type="text" id="name" name="name"/>
                    <label htmlFor="email">Email Address:</label>
                    <input className="border" type="email" id="email" name="email"/>
                    <label htmlFor="message">Message:</label>
                    <textarea className="border comments" id="comments" name="field3"></textarea>
                    <span></span>
                    <div>
                        <p className="error">Please complete all fields</p>
                        <Button type="submit" text="Submit" onClick="this.onClickSubmit"/>
                        {/*<input type="submit" value="Submit"/>*/}
                    </div>
                </form>
            </div>
        </section>
    )
}