import AboutText from "../components/AboutText";
export default function About(){
    return(
        <section className="bg-[url(images/background2.jpg)] pb-[24px]">
            <div className="
                grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center
                w-100% max-w-[500px] md:max-w-[1000px]
                my-0 mx-2 md:mx-auto p-0 md:gap-2 ">

                <AboutText />
                <img className="
                w-100% max-w-[300px] my-0 mx-auto rounded-full
                md:max-w-[300px]
                drop-shadow-[10px_5px_0_#fffb00]"
                src="./src/images/my_picture.jpg" alt="" />
            </div>
        </section>
    )
}