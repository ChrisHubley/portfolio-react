import H2 from "./H2";

export default function Box({title, content}){
    return(
        <div>
            <div className="p-5 w-100% max-w-2xl my-[24px] mx-2 md:mx-auto md:px-[30px] border-[#0910ce] border-2">
                <div className="flex justify-between items-center pb-5">
                    <H2 text={title}/>
                    <p className="text-[2rem] text-[#fffb00] pr-2 font-[Harting]">✴</p>
                </div>
                    {content}
            </div>
        </div>
    )
}
