import { AppUI } from "./AppUi";
import "./App.css";
import { TaskProvider } from "../TasksContext";

function App() {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
