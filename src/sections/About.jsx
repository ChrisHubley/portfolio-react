import AboutText from "../components/AboutText";

export default function About(){
    return(
        <section className="bg-[url(images/background2.jpg)] ">
            <div className="
            grid grid-cols-1 md:grid-cols-[2fr_1fr]
            w-100% max-w-[500px] md:max-w-[1000px]
            my-0 mx-auto p-0 ">
                <AboutText />
                <img className="
                w-[100%] max-w-[300px] my-[10px] mx-auto rounded-full
                md:max-w-[300px] 
                md:mt-[30px] md:mr-[30px]  md:mb-[20px]
                drop-shadow-[10px_5px_0_rgba(255,229,87,1)]"
                src="./src/images/my_picture.jpg" alt="" />
            </div>
        </section>
    )
}