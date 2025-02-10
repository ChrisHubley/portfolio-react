import AboutText from "../components/AboutText";

export default function About(){
    return(
        <section className="bg-[url(images/background2.jpg)]">
            <div className="grid grid-cols-[2fr_1fr]
            w-100% max-w-[1000px]
            my-0 mx-auto ">
                <AboutText />
                <img className="
                max-w-[300px] rounded-full mt-[30px] mr-[30px]  mb-[20px]
                drop-shadow-[10px_5px_0_rgba(255,229,87,1)]"
                src="./src/images/my_picture.jpg" alt="" />
            </div>
        </section>
    )
}