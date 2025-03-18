export default function PortfolioInfo({title, image, alt}){
    return (
        <div className="max-w-100% max-w-[400px] my-0 mx-auto text-center font-[special-elite] hover:text-[#fffb00] text-white active:text-[#ff00c7] text-[1.5rem]" >
            <a href="#">{title}</a>
            <img className="w-100% max-w-[300px] py-4" src={image} alt={alt}/>
        </div>

    )
}