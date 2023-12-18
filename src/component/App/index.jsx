import { AppUI } from "./AppUi";

import { TaskProvider } from "../TasksContext";

function App() {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
