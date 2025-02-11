import P from "./Atoms/P";


export default function PortfolioInfo({title, link, image, info, alt}){
    return (
        <div>
            <a href={link}>{title}</a>
             <div className="grid grid-cols-[1.2fr_1fr]">
                <P className="p-0 m-0" text={info} />
                <img className="max-w-100%" src={image} alt={alt}/>
             </div>

        </div>

    )
}