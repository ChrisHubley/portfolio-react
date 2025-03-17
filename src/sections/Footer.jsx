import P from "../components/Atoms/P";

export default function Footer(){
    return(
        <footer className="h-[70px]
            bg-[url(images/portfolio_background.png)]
            md:bg-[url(images/portfolio_background_desktop.png)]
            bg-cover
            flex justify-center self-end
            "> 
            <p className=" text-white text-xl">Copyright 2025 </p>
        </footer>
    )
}