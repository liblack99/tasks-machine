import "./TaskSearch.css";
import { useContext } from "react";
import { TasksContext } from "../TasksContext";
import { IconSearch } from "@tabler/icons-react";

function TaskSearch() {
  const { searchValue, setSearchValue } = useContext(TasksContext);
  return (
    <label>
      <input
        type="text"
        placeholder="Encuentra tus tareas"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <IconSearch />
    </label>
  );
}
export { TaskSearch };
