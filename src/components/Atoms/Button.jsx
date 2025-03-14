export default function Button({type, text, onClick, as, href}) {
    return (
        <button className="
        bg-black text-[#fffb00]
        hover:bg-[#ff00c7] hover:text-black
        border border-[#ff00c7]

        p-[6px_7px_5px_7px]
        rounded-sm
        transition duration-500
        " 
         type={type} onClick={onClick}>
         {text}
        </button>
    )
}