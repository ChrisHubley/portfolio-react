import Box from "../components/Atoms/Box.jsx";
import P from "../components/Atoms/P.jsx";
import GetContent from "../components/GetContent.jsx";

export default function About(){
    return(
        <Box title='About' content={
            <P text={
                <GetContent section="about"/>}
            />}
        />
    )
}