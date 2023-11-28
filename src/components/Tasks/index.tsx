import { Task } from '../Task'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <div className={styles.container}>
      <header className={styles.info}>
        <div>
          <span className={styles.created}>Tarefas criadas</span>
          <span className={styles.counter}>5</span>
        </div>
        <div>
          <span className={styles.done}>Concluídas</span>
          <span className={styles.counter}>2 de 5</span>
        </div>
      </header>
      <ul className={styles.list}>
        <li>
          <Task />
        </li>
      </ul>
    </div>
  )
}
