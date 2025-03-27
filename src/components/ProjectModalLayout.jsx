import P from "./Atoms/P.jsx";
import H2 from "./Atoms/H2.jsx";
import ButtonLink from "./Atoms/ButtonLink.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export default function ProjectModalLayout({toggle, title, info, image, alt, github,liveLink, date}) {
    function link(liveLink){
        if (liveLink){
            return <ButtonLink link={liveLink} text="View Website" />
        }
    }
    return (
        <div className="bg-black/50 z-10 fixed top-0 right-0 left-0 w-100% h-100% pb-500">
            <div className="p-5 w-100% max-w-2xl my-[24px] mx-2 md:mx-auto md:px-[30px] bg-black border-[#0910ce] border-2">

                <div className="flex justify-between items-center pb-5">
                    <H2 text={title}/>
                    <button onClick={toggle}> <FontAwesomeIcon className="text-[#fffb00] hover:text-[#ff00c7] text-[1.7rem]" icon={faXmark} /></button>

                </div>
                <div className="grid md:grid-cols-[3fr_2fr] pb-5 gap-5">
                    <div>
                        <div className="flex md:justify-between justify-items-left gap-5 pb-5 md:px-5">
                            <ButtonLink link={github} text="View on Github" />
                            {link(liveLink)}
                        </div>
                        <P text={info} />
                        <P text={date} />
                    </div>
                <img className="justify-self-center" src={image} alt={alt} />
            </div>
        </div>
        </div>
    )
}