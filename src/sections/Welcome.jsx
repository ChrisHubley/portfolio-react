import H2 from "../components/Atoms/H2";
import H4 from "../components/Atoms/H4";

export default function Welcome(){
    return(
     <section className="bg-[url(images/welcome_background.jpg)] py-[24px] ">
             <div className="bg-black border-2 border-[#0910ce] p-5 md:px-[30px] w-100% max-w-3xl my-[24px] mx-2 md:mx-auto">
                <div className="flex">
                    <p className="text-[3rem] text-[#fffb00] font-[Harting]">✴</p>
                    <H2 text="Welcome!" />
                </div>
                 <H4 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil odio provident accusantium dolore dolorum doloremque cumque! Officiis, accusamus repudiandae earum accusantium numquam error necessitatibus at sed. Corrupti, sint quod." />
             </div>
     </section>
    )
}