import NavLinks from "./Atoms/NavLinks";


export default function NavBar(){
    return(
        <nav className="
            flex flex-row justify-between ml-[7px] md:ml-0 p-0 gap-1
            text-white text-sm md:text-lg
           ">
            <div className="flex gap-1">
            <NavLinks text="About" link="#About"/>
            <p>|</p>
            <NavLinks text="Projects" link="#Projects"/>
            <p>|</p>
            <NavLinks text="Contact" link="#Get In Touch"/>
            <p>|</p>
            <NavLinks text="Home" link="/"/>
            </div>
        </nav>
    )
}