import { useContext } from "react";
import "./TaskCount.css";
import { TasksContext } from "../TasksContext";
function TaskCount() {
  const { completedTasks, totalTask } = useContext(TasksContext);
  return (
    <h1>
      <span>Task</span>
      <br />
      Has completado <span className="Result">{completedTasks}</span> de{" "}
      <span className="Result">{totalTask}</span> tareas
    </h1>
  );
}
export { TaskCount };
