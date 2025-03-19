import H2 from "../Atoms/H2.jsx";
import H4 from "../Atoms/H4.jsx";

export default function WelcomeContent(){
    return(
            <div>
                <div className="flex">
                    <p className="text-[3rem] text-[#fffb00] font-[Harting]">✴</p>
                    <H2 text="Welcome!" />
                </div>
                <H4 text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil odio provident accusantium dolore dolorum doloremque cumque! Officiis, accusamus repudiandae earum accusantium numquam error necessitatibus at sed. Corrupti, sint quod." />
            </div>
    )
}