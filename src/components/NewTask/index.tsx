import { FormEvent, ChangeEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import styles from "./NewTask.module.css";
import { ITask } from "../Task";
import { v4 as uuidv4 } from 'uuid';

interface INewTask {
  onAddNewTask: (newtask: ITask) => void;
}

export function NewTask({ onAddNewTask }: INewTask) {
  const [newTaskChange, setNewTaskChange] = useState('');

  function handleSubmitNewTask(event: FormEvent) {
    event.preventDefault();

    if (newTaskChange.trim() === "") return;

    const newTask = {
      id: uuidv4(),
      title: newTaskChange,
      isDone: false
    }

    onAddNewTask(newTask);
  }

  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskChange(event.target.value)
  }

  return (
    <form onSubmit={handleSubmitNewTask} className={styles.wrapper}>
      <label className={styles.inputBox}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskChange}
          onChange={handleChangeNewTask}
        />
      </label>
      <button className={styles.buttonBox} type="submit">
        <span>Criar</span>
        <PlusCircle size={20} />
      </button>
    </form>
  );
}
