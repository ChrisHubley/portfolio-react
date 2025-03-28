import H4 from "../components/Atoms/H4.jsx";
import GetContent from "../components/GetContent.jsx";
import H3 from "../components/Atoms/H3.jsx";

export default function Welcome(){
    return(
     <section >
         <div className="md:pt-2 mt-2 z-2 md:fixed md:top-27">
             <H3 text={<GetContent section="tagline" />}/>
         </div>
         <div className="
                w-full max-w-4xl
                md:my-20 my-5
                md:mx-auto md:px-[30px]
                md:grid md:grid-cols-[2fr_1fr]
                items-end
            ">
             <div className="grid md:grid-cols-[1fr_7fr] grid-cols-[1fr_12fr]">
                 <p className="text-3xl md:text-6xl mt-5  text-[#fffb00] self-center md:pr-3 font-[Harting]">✴</p>
                 <h2 className="text-[#ff00c7] mt-5 md:text-5xl text-3xl font-[special-elite] md:leading-19">Welcome!</h2>
                 <span></span>
                 <div className="border-t-[#0910ce] border-2 py-3 mr-5">
                     <H4 text={<GetContent section="welcome" />} />
                 </div>
             </div>
             <img className="
                         w-full max-w-[200px] mx-auto justify-self-center
                        rounded-full drop-shadow-[10px_5px_0_#fffb00]"
                        src="/src/images/my_picture.jpg" alt="" />
         </div>
     </section>
    )
}