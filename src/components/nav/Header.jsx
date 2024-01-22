import styles from '../styles/Header.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SideMenu from './SideMenu';
const calculateTotalAmount = () => {
  const cart = JSON.parse(localStorage.getItem('Cart')) || { cartList: [] };
  return cart.cartList.reduce((total, item) => total + item.amount * item.price, 0);
};

export default function Header(){
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  return(
    <>
      <nav className={styles.navContainer}>
        <button className={styles.sideMenuButton} onClick={toggleSideMenu}><img src="src/assets/icons/kisspng-hamburger-button-menu-computer-icons-5aec355f4b22d7.2596969515254295993078.png" alt="" /></button>
        <Link to='/'>
          <h1 className={styles.logo}>#laloamasa</h1>
        </Link>
        <Link to='/carrito'>
          <div className={styles.cartContainer}>
            {localStorage.getItem('Cart') && (
              <span className={styles.cartTotal}>
                {`${calculateTotalAmount().toLocaleString("es-AR", { style: "currency", currency: "ARS" })}`}
              </span>
            )}
            <button className={styles.cartButton}></button>
          </div>
        </Link>
      </nav>
      <SideMenu onClose={toggleSideMenu} isOpen={isSideMenuOpen} />
    </>
  )
}