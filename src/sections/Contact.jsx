import ContactContent from "../components/content/ContactContent.jsx";
import Box from "../components/Atoms/Box.jsx";

export default function Contact(){
    return(
        <section className="bg-[url(images/background2.jpg)] py-[24px]">
            <Box content={<ContactContent />} />
        </section>
    )
}