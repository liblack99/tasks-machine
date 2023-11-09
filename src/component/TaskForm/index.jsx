import { TasksContext } from "../TasksContext";
import { useContext } from "react";
import { useState } from "react";

import "./TaskForm.css";

function TaskForm() {
  const { addTask, setOpenModal } = useContext(TasksContext);

  const [newTasksValue, setNewTasksValue] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTasksValue);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTasksValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo Tarea</label>
      <textarea
        placeholder="Agrega una Tarea"
        value={newTasksValue}
        onChange={onChange}
      />
      <div className="TaskForm-buttonContainer">
        <button
          type="button"
          className="TaskForm-button TaskForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TaskForm-button TaskForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}
export { TaskForm };
