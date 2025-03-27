import NameAndTagLine from "../components/NameAndTagLine";
import NavBar from "../components/NavBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function Header(){
    return(
        <header className="sticky z-1 top-0 bg-black">
            <div className="
                md:h-[90px]
                h-[50px]
                backdrop-brightness-50
                bg-[url(images/portfolio_background.png)]
                md:bg-[url(images/portfolio_background_desktop.png)]
                bg-cover
            "></div>
            <div className="
            md:flex
            md:flex-row 
            md:justify-between md:items-baseline 
            py-0 pr-3 pl-0">
                <NameAndTagLine />

                <div>
                <NavBar/>

                </div>
            </div>

            
        </header>


    )
}