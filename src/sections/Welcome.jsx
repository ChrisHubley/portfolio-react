import H2 from "../components/Atoms/H2.jsx";
import H4 from "../components/Atoms/H4.jsx";

export default function Welcome(){
    return(
     <section className=" py-[24px] ">
         <div className="
        p-5 w-100% max-w-3xl my-[24px] mx-2
        md:mx-auto md:px-[30px]

        ">
             <div className="flex">
                 <p className="text-[3rem] text-[#fffb00] font-[Harting]">✴</p>
                 <H2 text="Welcome!" />
             </div>
             <H4 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil odio provident accusantium dolore dolorum doloremque cumque! Officiis, accusamus repudiandae earum accusantium numquam error necessitatibus at sed. Corrupti, sint quod." />
         </div>
     </section>
    )
}