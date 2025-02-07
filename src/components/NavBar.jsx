import NavLinks from "../Atoms/NavLinks";

export default function NavBar(){
    return(
        <nav className="
            flex flex-row justify-between align-baseline gap-2
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