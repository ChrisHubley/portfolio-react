import H4 from "../components/Atoms/H4.jsx";
import GetContent from "../components/GetContent.jsx";

export default function Welcome(){
    return(
     <section className=" py-[24px] ">
         <div className="
        w-100% max-w-3xl md:my-12 mx-2
        md:mx-auto md:px-[30px]
        flex
        ">
             <p className="text-[4rem] text-[#fffb00] justify-object-top pr-3 font-[Harting]">✴</p>
             <div className="md:flex ">
                 <div className="">
                 <h2 className="
                    text-[#ff00c7]
                    text-[2.5rem]
                    font-[special-elite]
                    leading-19
                    "
                 >Welcome!</h2>
                     <div className="border-t-[#0910ce] border-2 py-3 mr-10">
                         <H4 text={<GetContent section="welcome" />} />
                     </div>
                 </div>
                 <div>
                     <img className="
                    w-100% max-w-[200px] my-0 mx-auto rounded-full
                    md:max-w-[200px]
                    drop-shadow-[10px_5px_0_#fffb00]"
                    src="/src/images/my_picture.jpg" alt="" />
                </div>
             </div>
         </div>
     </section>
    )
}