export default function Projectlayout({title, image, alt}){
    return (
        <div className="max-w-100% max-w-[400px] my-0 mx-auto text-center font-[special-elite] text-[#fffb00] hover:text-[#ff00c7] text-[1.5rem]" >
            <a href="#">{title}</a>
            <img className="w-100% max-w-70 py-4" src={image} alt={alt}/>
        </div>

    )
}