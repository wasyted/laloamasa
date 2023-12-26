import styles from '../styles/Header.module.scss';
import { Link } from 'react-router-dom';

export default function Nav(){
  return(
    <>
      <nav className={styles.navContainer}>
        <Link to='/'>
          <h1 className={styles.logo}>laloamasa</h1>
        </Link>
        <Link to='/cart'>
          <button className={styles.cartButton}></button>
        </Link>
      </nav>
    </>
  )
}