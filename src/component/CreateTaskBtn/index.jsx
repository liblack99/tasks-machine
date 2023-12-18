import { useContext } from "react";
import { TasksContext } from "../TasksContext";

import "./CreateTaskBtn.css";

function CreateTaskBtn() {
  const { openModal, setOpenModal } = useContext(TasksContext);

  return (
    <button className="Tasks__Btn" onClick={() => setOpenModal(!openModal)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-plus"
        width={40}
        height={40}
        viewBox="0 0 24 24"
        strokeWidth={4}
        stroke="white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path>
        <path d="M5 12l14 0"></path>
      </svg>
    </button>
  );
}
export { CreateTaskBtn };
