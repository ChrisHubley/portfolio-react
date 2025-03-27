export default function Button({type, text, onClick}) {
    return (
        <button className="
        bg-black text-[#fffb00]
        hover:bg-[#ff00c7] hover:text-black
        text-sm
        border border-[#ff00c7]
        font-[special-elite]
        p-[6px_7px_3px_7px]
        rounded-sm
        transition duration-500
        " 
         type={type} onClick={onClick}>
         {text}
        </button>
    )
}