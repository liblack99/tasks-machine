import "./TaskItem.css";
import { IconCheck } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";

function TaskItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TaskItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <IconCheck />
      </span>
      <p className={`TaskItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <IconTrash />
      </span>
    </li>
  );
}
export { TaskItem };
