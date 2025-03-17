export default function NavLinks({text, link}){
    return(
        
        <a className="
            text-white 
            text-xl
            p-0
            text-[1.5rem]
            hover:text-[#fffb00]
            active:text-[#ff00c7]
            
        " href={link}>{text}</a>
    
    
    )
}


