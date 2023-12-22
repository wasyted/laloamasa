import { useEffect, useState } from 'react';
import styles from '../styles/ProductsContainer.module.scss';
import { Link } from 'react-router-dom';
export default function ProductsContainer(props){
  const [productsList , setProductsList] = useState();
  useEffect(() =>{
    setProductsList(props.products)
  });
  return(
    <div>
      <h1 className={styles.productsContainerHeader}>Productos / Todos</h1>
      <div className={styles.productsContainer}>
        {productsList && productsList.map((product) => {
          return (
            <div key={product.id} className={styles.productContainer}>
              <img src={product.image} alt="foto producto" />
              <p>{product.name} <span className={styles.price}>${product.price}</span></p>
              <Link to={`/product/${product.id}`}><button>ver producto</button></Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}