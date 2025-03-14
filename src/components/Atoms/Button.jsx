export default function Button({type, text, onClick}) {
    return (
        <button className="
        bg-black text-[#ffe557] 
        hover:bg-[#ff00c7] hover:text-black

        p-[6px_7px_5px_7px]
        rounded-sm
        transition duration-500
        " 
         type={type} onClick={onClick}>
         {text}
        </button>
    )
}