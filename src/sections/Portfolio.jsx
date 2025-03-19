import Box from "../components/Atoms/Box.jsx";
import PortfolioContent from "../components/content/PortfolioContent.jsx";

export default function Portfolio(){
    return (
        <section className=" p-[24px] content-center">
            <Box content={<PortfolioContent />}/>;
        </section>
    )
}