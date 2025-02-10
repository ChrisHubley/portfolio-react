import H2 from "./Atoms/H2";
import P from "./Atoms/P";

export default function AboutText(){
    return(
        <div>
            <H2 text="About"/> 
            <div className="grid grid-cols-[1fr_3fr]">
                <span></span>
                <p className="
                    text-sm 
                    font-sans 
                    p-20px
                    bg-white
                    mt-[20px] mr-[30px] mb-0 ml-0
                    p-[10px]
                ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt expedita quibusdam perspiciatis odio, nostrum voluptate similique reiciendis reprehenderit optio numquam ullam explicabo, porro, placeat quas distinctio iure mollitia magni incidunt.</p>
            </div>
        </div>
    )
}