import H2 from "../Atoms/H2";
import H4 from "../Atoms/H4";

export default function Welcome(){
    return(
     <section className="bg-[url(images/welcome_background.jpg)]">
         <H2 text="Welcome!" />
         <H4 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil odio provident accusantium dolore dolorum doloremque cumque! Officiis, accusamus repudiandae earum accusantium numquam error necessitatibus at sed. Corrupti, sint quod." />
     </section>
    )
}