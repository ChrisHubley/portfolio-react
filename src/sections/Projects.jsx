import Box from "../components/Atoms/Box.jsx";
import ProjectContent from "../components/content/ProjectContent.jsx";

export default function Projects(){
    return (
        <section >
            <Box title="Projects" content={<ProjectContent />}/>;
        </section>
    )
}