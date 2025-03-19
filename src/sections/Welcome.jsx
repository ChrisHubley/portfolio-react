import Box from "../components/Atoms/Box.jsx";
import WelcomeContent from "../components/content/WelcomeContent.jsx";

export default function Welcome(){
    return(
     <section className="bg-[url(images/welcome_background.jpg)] py-[24px] ">
         <Box content={<WelcomeContent />} />
     </section>
    )
}