import styles from './ProductView.module.scss'

export default function ProductView(props){
  return(
    <div className={styles.productView}>
      <h1>{props.name}</h1>
      <img src={props.image} alt="" />
      <div className={styles.infoContainer}>
        <h2>${props.price}</h2>
        <p>{props.description}</p>
      </div>
      <div className={styles.buyContainer}>
          <button>-</button>
          <div>0</div>
          <button>+</button>
          <button>Agregar al carrito</button>
        </div>
    </div>
  )
}