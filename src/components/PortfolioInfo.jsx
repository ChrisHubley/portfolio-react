import P from "./Atoms/P";
export default function PortfolioInfo({title, image, info, alt}){
    return (
        <div className="max-w-100% max-w-[400px] my-0 mx-auto text-center " >
            <a href="#">{title}</a>
            <img className="w-100% max-w-[300px] py-2" src={image} alt={alt}/>
        </div>

    )
}