import styles from './Checkbox.module.css'

interface Checkbox {
  done: boolean;
  onChangeCheckbox: () => void;
}

export function Checkbox({ done, onChangeCheckbox }: Checkbox) {
  
  return (
    <label className={styles.control}>
      <input 
        type="checkbox" 
        name="task" 
        checked={done}
        onChange={onChangeCheckbox}
      />
    </label>
  )
}
