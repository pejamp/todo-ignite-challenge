import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { Checkbox } from '../Checkbox'

export interface ITask {
  id: string;
  title: string;
  isDone: boolean;
}

interface TaskProps extends ITask {
  onCompletedTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ onCompletedTask, onDeleteTask, ...props }: TaskProps) {

  function handleChangeCheckbox() {
    onCompletedTask(props.id);
  }

  return (
    <div className={styles.wrapper}>
      <Checkbox done={props.isDone} onChangeCheckbox={handleChangeCheckbox} />
      <p className={`${styles.text} ${props.isDone ? styles.textDone : ''}`}>{props.title}</p>
      <button onClick={() => onDeleteTask(props.id)} className={styles.buttonBox}>
        <Trash size={20} />
      </button>
    </div>
  )
}
