import '../styles/Notification.scss';
import styles from '../styles/ProductView.module.scss';

export default function ProductView(props) {

  return (
    <>
      <div className={styles.productView}>
        <h1>{props.name}</h1>
        <img src={props.image} alt="" />
        <div className={styles.infoContainer}>
          <h2>${props.price}</h2>
          <p>{props.description}</p>
        </div>
        <div className={styles.buyContainer}>
          <button onClick={props.handleDecrease}>-</button>
          <div>{props.amount}</div>
          <button onClick={props.handleIncrease}>+</button>
          <button onClick={props.handleClick}>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
}