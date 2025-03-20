import Box from "../components/Atoms/Box.jsx";
import PortfolioContent from "../components/content/PortfolioContent.jsx";

export default function Portfolio(){
    return (
        <section >
            <Box title="Projects" content={<PortfolioContent />}/>;
        </section>
    )
}