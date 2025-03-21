import Box from "../components/Atoms/Box.jsx";
import P from "../components/Atoms/P.jsx";
import FetchRequest from "../components/FetchRequest.jsx";

export default function About(){
    return(
        <Box title='About' content={
            <P text={
                <FetchRequest section="about"/>}
            />}
        />
    )
}