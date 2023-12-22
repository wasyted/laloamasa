import styles from './Header.module.scss';

export default function Nav(){
  return(
    <>
      <nav className={styles.navContainer}>
        <h1 className={styles.logo}>laloamasa</h1>
        <button className={styles.cartButton}></button>
      </nav>
    </>
  )
}