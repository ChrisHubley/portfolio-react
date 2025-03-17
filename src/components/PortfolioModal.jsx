import H2 from "./Atoms/H2.jsx";
import P from "./Atoms/P.jsx";

export default function PortfolioModal(){
    return(
        <div className="p-1.5 bg-[url(images/portfolio_background.png)] bg-cover
                                 md:bg-[url(images/portfolio_background_desktop.png)]
                                 w-100% max-w-3xl my-[24px] mx-2 md:mx-auto">
            <div className="bg-white p-5 md:px-[30px] md:py-[40px]">
                <h2> Project Title</h2>
                <P text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." />
            </div>
        </div>
    )
}






// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog