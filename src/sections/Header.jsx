import NameAndTagLine from "../components/NameAndTagLine";
import NavBar from "../components/NavBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function Header(){
    return(
        <header className="bg-black">
            <div className="
                h-[90px] 
                backdrop-brightness-50
                bg-[url(images/portfolio_background.png)] 
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