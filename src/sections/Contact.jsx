import ContactContent from "../components/content/ContactContent.jsx";
import Box from "../components/Atoms/Box.jsx";

export default function Contact(){
    return(
        <section className="pb-[150px]">
            <Box title="Get In Touch" content={<ContactContent />} />
        </section>
    )
}