import P from "../components/Atoms/P";

export default function Footer(){
    return(
        <footer className="
            h-5 md:h-12

            md:sticky md:bottom-0
            bg-[url(images/portfolio_background.png)]
            md:bg-[url(images/portfolio_background_desktop.png)]
            bg-cover
            flex justify-center items-center
            font-[special-elite]
            "> 
            <p className=" text-white text-xl align-self-middle drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Copyright 2025 </p>
        </footer>
    )
}