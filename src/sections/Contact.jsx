import H2 from "../components/Atoms/H2";
import Button from "../components/Atoms/Button.jsx";

export default function Contact(){
    return(
        <section className="bg-[url(images/background2.jpg)]">
            <H2 text="Get in touch"/>
            <div id="contact">
                <form className="grid grid-cols-1 md:grid-cols-[2fr_1fr]
                        w-100% max-w-[500px] md:max-w-[1000px]
            p-3 bg-white">
                    <label htmlFor="name">Name:</label>
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