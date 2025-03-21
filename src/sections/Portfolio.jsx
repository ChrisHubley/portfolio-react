import Box from "../components/Atoms/Box.jsx";
import ProjectContent from "../components/content/ProjectContent.jsx";

export default function Portfolio(){
    return (
        <section >
            <Box title="Projects" content={<ProjectContent />}/>;
        </section>
    )
}