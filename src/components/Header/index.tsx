import Logo from '../../assets/full-logo.svg';
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={Logo} alt="" />
    </header>
  )
}
