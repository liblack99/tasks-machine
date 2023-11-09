import { useContext } from "react";
import { TaskCount } from "../TaskCount";
import { TaskSearch } from "../TaskSearch";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { CreateTaskBtn } from "../CreateTaskBtn";
import { Loading } from "../Loading";
import { Error } from "../Error";
import { TasksContext } from "../TasksContext";
import { Modal } from "../Modal";
import { TaskForm } from "../TaskForm";
import { ContainerApp } from "../ContainerApp";
import { Empty } from "../Empty";

function AppUI() {
  const {
    loading,
    error,
    searchedTasks,
    deleteTask,
    taskCompleted,
    openModal,
  } = useContext(TasksContext);
  return (
    <>
      <ContainerApp>
        <TaskCount />
        <TaskSearch />

        <TaskList>
          {loading && <Loading />}
          {error && <Error />}
          {!loading && searchedTasks.length === 0 && <Empty />}
          {searchedTasks &&
            searchedTasks.map((task) => (
              <TaskItem
                text={task.text}
                key={task.text}
                completed={task.completed}
                onComplete={() => taskCompleted(task.text)}
                onDelete={() => deleteTask(task.text)}
              />
            ))}
        </TaskList>
        <CreateTaskBtn />
      </ContainerApp>

      {openModal && (
        <Modal>
          <TaskForm />
        </Modal>
      )}
    </>
  );
}
export { AppUI };
