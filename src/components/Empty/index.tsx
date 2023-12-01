import clipboardIcon from "../../assets/clipboard.svg"
import styles from  './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboardIcon} alt="" />
      <h1>
        <span>Você ainda não tem tarefas cadastradas</span>
        Crie tarefas e organize seus itens a fazer
      </h1>
    </div>
  );
}
