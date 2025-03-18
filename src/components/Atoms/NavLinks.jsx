export default function NavLinks({text, link}){
    return(
        <a className="
            text-[1.2rem]
            hover:text-[#fffb00]
            active:text-[#ff00c7]
            font-[special-elite]
            leading-10
        " href={link}>{text}</a>
    )
}


