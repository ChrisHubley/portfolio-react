export default function NavLinks({text, link}){
    return(
        <a className="
            text-base md:text-lg
            hover:text-[#fffb00]
            active:text-[#ff00c7]
            font-[special-elite]
            leading-7 md:leading-9
        " href={link}>{text}</a>
    )
}


