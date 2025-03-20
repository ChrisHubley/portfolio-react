import ContactContent from "../components/content/ContactContent.jsx";
import Box from "../components/Atoms/Box.jsx";

export default function Contact(){
    return(
        <section>
            <Box title="Get In Touch" content={<ContactContent />} />
        </section>
    )
}