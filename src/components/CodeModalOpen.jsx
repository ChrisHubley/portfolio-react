import {useState} from "react";
import ProjectModal from "./ProjectModal.jsx";

export default function CodeModalOpen({buttonContent, id}) {
    const [isOpen, setIsOpen] = useState();

        function toggle() {
            setIsOpen((isOpen) => !isOpen);
        }

        return (
            <div className="App">
                {isOpen && <ProjectModal id={id} toggle={toggle} />}
                <button onClick={toggle}>{buttonContent}</button>
            </div>
        );
    }




//     const [modalVisible, setModalVisible] = useState(false)
//         const changeState=()=>{
//             setModalVisible(true);
//         }
//         return (
//             <div className="bg-black">
//                 {modalVisible ? <ProjectModal id={id} />: null}
//                 <button onClick={changeState}>{buttonContent}
//                 </button>
//             </div>
//         )
// }