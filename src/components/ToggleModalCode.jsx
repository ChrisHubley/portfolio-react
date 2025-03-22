import {useState} from "react";
import ProjectModal from "./ProjectModal.jsx";

export default function ToggleModalCode({buttonContent, id}) {
    const [modalVisible, setModalVisible] = useState(null)
        const changeState=()=>{
            setModalVisible((pre => !pre));
        }
        return (
            <div>
                {modalVisible ? <ProjectModal id={id} />: null}
                <button onClick={changeState}>{buttonContent}
                </button>
            </div>
        )
}