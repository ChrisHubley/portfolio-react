import {useState} from "react";
import H3 from "./Atoms/H3.jsx";

export default function ToggleModalCode({title, image, alt, buttonContent}) {
    const [modalVisible, setModalVisible] = useState(false)
        const changeState=()=>{
            setModalVisible((pre => !pre));
        }
        return (
            <>
                {modalVisible ? <div>Show Content</div> : null}
                <button onClick={changeState}>{buttonContent}
                </button>
            </>
        )
}