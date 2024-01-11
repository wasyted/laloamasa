import { useEffect , useState } from 'react';
import styles from '../styles/ProductsContainer.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export default function RecommendedContainer(props){
  const [ recommendedProducts , setRecommendedProducts ] = useState();
  const productsList = props.products;
  const getRecommendedProducts = ()=>{
    const sorted = [
      productsList[Math.floor(Math.random() * productsList.length)],
      productsList[Math.floor(Math.random() * productsList.length)],
      productsList[Math.floor(Math.random() * productsList.length)],
      productsList[Math.floor(Math.random() * productsList.length)]
    ];
    setRecommendedProducts(sorted);
  }
  useEffect(()=>{
    getRecommendedProducts(productsList);
  }, [])

  return(
    <div className={styles.recommendedProducts} style={{maxWidth: '1280px', margin: 'auto'}}>
      <h1 className={styles.productsContainerHeader}>Mirá tambien</h1>
      <div className={styles.recommendedProductsContainer}>
        {recommendedProducts && recommendedProducts.map((product) => {
          return (
            <Link key={uuidv4()} to={`/producto/${product.id}`}>
              <div className={styles.recommendedProductContainer}>
                <div className={styles.productImageContainer}>
                  <img src={product.image} alt="foto producto" />
                </div>
                <p>{product.name} <span className={styles.price}>${product.price}</span></p>
                <button>Ver producto</button>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}