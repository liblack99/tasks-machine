import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
const TasksContext = React.createContext();

function TaskProvider({ children }) {
  const {
    item: tasks,
    saveItem: saveLocal,
    loading,
    error,
  } = useLocalStorage("tasks", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const searchedTasks = tasks.filter((task) => {
    return task.text
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  const completedTasks = tasks.filter((task) => task.completed).length;

  const totalTask = tasks.length;
  const taskCompleted = (text) => {
    const newTasks = [...tasks];
    const newTasksIndex = newTasks.findIndex((task) => task.text === text);
    newTasks[newTasksIndex].completed = !newTasks[newTasksIndex].completed;
    saveLocal(newTasks);
  };

  const addTask = (text) => {
    const newTasks = [...tasks];
    newTasks.push({
      text,
      completed: false,
    });
    saveLocal(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const newTasksIndex = newTasks.findIndex((task) => task.text === text);

    newTasks.splice(newTasksIndex, 1);
    saveLocal(newTasks);
  };
  return (
    <TasksContext.Provider
      value={{
        loading,
        error,
        completedTasks,
        searchValue,
        totalTask,
        setSearchValue,
        searchedTasks,
        taskCompleted,
        deleteTask,
        openModal,
        setOpenModal,
        addTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TaskProvider };
