import styles from '../styles/Header.module.scss';
import { Link } from 'react-router-dom';
const calculateTotalAmount = () => {
  const cart = JSON.parse(localStorage.getItem('Cart')) || { cartList: [] };
  return cart.cartList.reduce((total, item) => total + item.amount * item.price, 0);
};

export default function Nav(){
  return(
    <>
      <nav className={styles.navContainer}>
        <Link to='/'>
          <h1 className={styles.logo}>laloamasa</h1>
        </Link>
        <Link to='/carrito'>
          <div className={styles.cartContainer}>
            {localStorage.getItem('Cart') && (
              <span className={styles.cartTotal}>{`$${calculateTotalAmount().toFixed(2)}`}</span>
            )}
            <button className={styles.cartButton}></button>
          </div>
        </Link>
      </nav>
    </>
  )
}