export default function H4({text}){
    return(
        <div id="div2" className="p-1.5 bg-[url(images/portfolio_background.png)] bg-cover
                                  md:bg-[url(images/portfolio_background_desktop.png)]
                                 w-100% max-w-3xl my-[24px] mx-2 md:mx-auto">
            <h4 className="text-black bg-white p-5 md:px-[30px] md:py-[40px]">{text}</h4>
        </div>
    )
}