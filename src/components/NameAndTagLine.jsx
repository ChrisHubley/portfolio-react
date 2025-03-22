
import H1 from "./Atoms/H1";
import H3 from "./Atoms/H3";
import GetContent from "./GetContent.jsx";

export default function NameAndTagLine(){
   return(
        <a href="/" >
            <H1 text="chris hubley." />
            <H3 text={
                <GetContent section="tagline" />
            }/>
        </a>
    )
}