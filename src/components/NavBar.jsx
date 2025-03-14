import NavLinks from "./Atoms/NavLinks";

export default function NavBar(){
    return(
        <nav className="
            flex flex-row md:justify-between ml-[7px] md:ml-0 gap-2
            text-white text-xl
            p-0 m-0 ">

            <NavLinks text="About" link="#"/>
            <p>|</p>
            <NavLinks text="Portfolio" link="#"/>
            <p>|</p>
            <NavLinks text="Contact" link="#"/>

        </nav>
    )
}