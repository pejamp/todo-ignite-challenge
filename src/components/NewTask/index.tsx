import { PlusCircle } from '@phosphor-icons/react'
import styles from './NewTask.module.css'

export function NewTask() {
  return (
    <form className={styles.wrapper}>
      <label className={styles.inputBox}>
        <input type="text" placeholder='Adicione uma nova tarefa' />
      </label>
      <button className={styles.buttonBox} type='submit'>
        <span>Criar</span>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
