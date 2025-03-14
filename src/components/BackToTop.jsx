import Button from "./Atoms/Button.jsx";

export default function BackToTop() {
    return (
        <div className="fixed bottom-[30px] right-[20px]">
            <Button type="button" onClick={"/"} text="▲Back to top" />
        </div>
    )
}