import {useState} from "react";
import ProjectModal from "./ProjectModal.jsx";

export default function CodeModalClose({buttonContent,}) {
    const [modalVisible, setModalVisible] = useState(true)
    const changeState=()=>{
        setModalVisible(false);
    }
    return (
        <div className="bg-black">
            {modalVisible ? <ProjectModal />: null}
            <button onClick={changeState}>{buttonContent}
            </button>
        </div>
    )
}