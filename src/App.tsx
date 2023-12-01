import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";
import styles from "./styles/App.module.css";

import { initialTasks } from "./api/tasks";
import { ITask } from "./components/Task";
import { Empty } from "./components/Empty";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddNewTask(task: ITask) {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  }

  function handleCompletedTask(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function handleDeleteTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  const isEmptyTasks = tasks.length === 0;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <NewTask onAddNewTask={handleAddNewTask} />
        {isEmptyTasks ? (
          <Empty />
        ) : (
          <Tasks 
            tasks={tasks} 
            onCompletedTask={handleCompletedTask} 
            onDeleteTask={handleDeleteTask}
          />
        )}
      </main>
    </>
  );
}

export default App;
