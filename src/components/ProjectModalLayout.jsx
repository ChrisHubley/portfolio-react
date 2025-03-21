import P from "./Atoms/P.jsx";
import H2 from "./Atoms/H2.jsx";
import ButtonLink from "./Atoms/ButtonLink.jsx";

export default function ProjectModalLayout({title, info, image, alt, github,liveLink, date}) {
    return (
        <div>
            <div className="p-5 w-100% max-w-2xl my-[24px] mx-2 md:mx-auto md:px-[30px] border-[#0910ce] border-2">
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
        </div>
    )
}