export default function ButtonLink({text, link}){
    return(
        <a href={link} className=
            "bg-black text-[#fffb00]
            hover:bg-[#ff00c7] hover:text-black
            border border-[#ff00c7]
            font-[special-elite]
            p-[6px_7px_5px_7px]
            rounded-sm
            transition duration-500
            ">{text}</a>
    )

}