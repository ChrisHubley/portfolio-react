import { Link } from "react-router-dom";
import H3 from "./Atoms/H3.jsx";
import ToggleModalCode from "./ToggleModalCode.jsx";


export default function ProjectLayout({key, title, image, alt}) {



        return (
            <div className="max-w-100% max-w-[400px] my-0 mx-auto text-center font-[special-elite]
            text-[#fffb00] hover:text-[#ff00c7] text-[1.5rem]">
                <ToggleModalCode id={key} buttonContent={<H3 text={title}/>} />
                <ToggleModalCode id={key} buttonContent={<img className="w-100% max-w-70 py-4" src={image} alt={alt}/>}/>
            </div>
        )
    }
