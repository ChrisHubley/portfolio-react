
import H1 from "./Atoms/H1";
import H3 from "./Atoms/H3";
import FetchRequest from "./FetchRequest";

export default function NameAndTagLine(){
   return(
        <div>
            <H1 text="chris hubley." />
            <H3 text={
                <FetchRequest section="tagline" /> 
            }/>
        </div>
    )
}