import ButtonLink from "./Atoms/ButtonLink.jsx";

export default function BackToTop() {
    return (
        <div className="fixed bottom-[10px] right-[20px]">
            <ButtonLink link="/" text="▲Back to top" />
        </div>
    )
}