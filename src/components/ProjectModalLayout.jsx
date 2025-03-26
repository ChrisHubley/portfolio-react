import P from "./Atoms/P.jsx";
import H2 from "./Atoms/H2.jsx";
import ButtonLink from "./Atoms/ButtonLink.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import CodeModalOpen from "./CodeModalOpen.jsx";

export default function ProjectModalLayout({toggle, id, title, info, image, alt, github,liveLink, date}) {
    return (
        <modal className="bg-black fixed top-[150px] right-0 left-0 w-100% h-100%">
            <div className="p-5 w-100% max-w-2xl my-[24px] mx-2 md:mx-auto md:px-[30px] border-[#0910ce] border-2">
               <button onClick={toggle}> <FontAwesomeIcon className="hover:text-[#fffb00] text-[#ff00c7] active:text-[#ff00c7] text-[1.7rem]" icon={faXmark} /></button>

                <div className="flex justify-between items-center pb-5">
                    <H2 text={title}/>
                    <p className="text-[2rem] text-[#fffb00] pr-2 font-[Harting]">✴</p>
                </div>
                <P text={info} />
                <img src={image} alt={alt} />
                <P text={date} />
                <ButtonLink link={github} text="View on Github" />
                <ButtonLink link={liveLink} text="View Website" />
            </div>
        </modal>
    )
}