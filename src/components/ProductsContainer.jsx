import styles from './ProductsContainer.module.scss';
import Fade from 'react-reveal/Fade';

export default function ProductsContainer(){
  return(
    <div>
      <h1 className={styles.productsContainerHeader}>Productos / Todos</h1>
      <div className={styles.productsContainer}>
        <Fade fraction={0.3} bottom>
          <div className={styles.productContainer}>
            <img src="" alt="foto producto" />
            <p>Pan</p>
            <button>ver producto</button>
          </div>
        </Fade>
        <Fade fraction={0.3} bottom>
          <div className={styles.productContainer}>
            <img src="" alt="foto producto" />
            <p>Pan integral</p>
            <button>ver producto</button>
          </div>
        </Fade>
        <Fade fraction={0.3} bottom>
          <div className={styles.productContainer}>
            <img src="" alt="foto producto" />
            <p>Pan sin tacc</p>
            <button>ver producto</button>
          </div>
        </Fade>
        <Fade fraction={0.3} bottom>
          <div className={styles.productContainer}>
            <img src="" alt="foto producto" />
            <p>Pan dulce</p>
            <button>ver producto</button>
          </div>
        </Fade>
        <Fade fraction={0.3} bottom>
          <div className={styles.productContainer}>
            <img src="" alt="foto producto" />
            <p>Budin chico</p>
            <button>ver producto</button>
          </div>
        </Fade>
        <Fade fraction={0.3} bottom>
          <div className={styles.productContainer}>
            <img src="" alt="foto producto" />
            <p>Budin mediano</p>
            <button>ver producto</button>
          </div>
        </Fade>
        <Fade fraction={0.3} bottom>
          <div className={styles.productContainer}>
            <img src="" alt="foto producto" />
            <p>Budin grande</p>
            <button>ver producto</button>
          </div>
        </Fade>
      </div>
    </div>
  )
}