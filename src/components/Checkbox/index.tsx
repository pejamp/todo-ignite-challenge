import styles from './Checkbox.module.css'

export function Checkbox() {
  return (
    <label className={styles.control}>
      <input type="checkbox" name="task" />
    </label>
  )
}
