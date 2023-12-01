import { ITask, Task } from '../Task'
import styles from './Tasks.module.css'

interface ITasks {
  tasks: ITask[];
  onCompletedTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Tasks({ tasks, onCompletedTask, onDeleteTask }: ITasks) {

  const createdTasks = tasks.length;
  const finishedTasks = tasks.reduce((acc, current) => {
    if (current.isDone) return acc += 1
    return acc
  }, 0)

  return (
    <div className={styles.container}>
      <header className={styles.info}>
        <div>
          <span className={styles.created}>Tarefas criadas</span>
          <span className={styles.counter}>{createdTasks}</span>
        </div>
        <div>
          <span className={styles.done}>Concluídas</span>
          <span className={styles.counter}>
            {createdTasks === 0 ? '0' : `${finishedTasks} de ${createdTasks}`}
          </span>
        </div>
      </header>
      <ul className={styles.list}>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <Task {...task} onCompletedTask={onCompletedTask} onDeleteTask={onDeleteTask} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
