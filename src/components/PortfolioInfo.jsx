import P from "./Atoms/P";


export default function PortfolioInfo({title, link, image, info, alt}){
    return (
        <div className="max-w-100% max-w-[400px] my-0 mx-auto md:max-w-[1000px]" >
            <a href={link}>{title}</a>
             <div className="md:grid md:grid-cols-[1.2fr_1fr]">
                <P text={info} />
                <img className="max-w-100% max-w-[300px]" src={image} alt={alt}/>
             </div>

        </div>

    )
}