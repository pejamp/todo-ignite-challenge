import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { Checkbox } from '../Checkbox'

export function Task() {
  return (
    <div className={styles.wrapper}>
      <Checkbox />
      <p className={styles.text}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button className={styles.buttonBox}>
        <Trash size={20} />
      </button>
    </div>
  )
}
