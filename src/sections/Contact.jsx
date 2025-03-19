import ContactContent from "../components/content/ContactContent.jsx";
import Box from "../components/Atoms/Box.jsx";

export default function Contact(){
    return(
        <section className=" py-[24px]">
            <Box content={<ContactContent />} />
        </section>
    )
}