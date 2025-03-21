import { Link } from "react-router-dom";
import H3 from "./Atoms/H3.jsx";

export default function Projectlayout({title, image, alt}){
    return (
        <div className="max-w-100% max-w-[400px] my-0 mx-auto text-center font-[special-elite] text-[#fffb00] hover:text-[#ff00c7] text-[1.5rem]" >
            <Link key={title} to={`/project/${title}`} >
            <H3 text={title} />
            <img className="w-100% max-w-70 py-4" src={image} alt={alt}/>
            </Link>
        </div>
    )
}