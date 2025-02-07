import NameAndTagLine from "../components/NameAndTagLine";
import NavBar from "../components/NavBar";

export default function Header(){
    return(
        <header className="bg-black">
            <div className="
                h-[90px] 
                bg-[url(images/portfolio_background.png)] 
            "></div>
            <div className="
            flex flex-row 
            justify-between items-baseline 
            py-0 pr-3 pl-0">
                <NameAndTagLine />
                <NavBar/>
            </div>

            
        </header>


    )
}