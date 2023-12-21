import Flicking from "@egjs/react-flicking";
import styles from './CategoriesSection.module.scss';
import "@egjs/react-flicking/dist/flicking.css";
export default function CategoriesSection(){
  return(
    <>
      <h1 className={styles.categoriesHeader}>Categorías:</h1>
      <Flicking moveType="freeScroll" align="prev" bound={true}>
        <div className={styles.categoryContainer}>
          <div className={styles.categoryCard}>
            <img src="src/assets/icons/icons8-bread-100.png" alt="" srcset="" />
            Panes
          </div>
          <div className={styles.categoryCard}>         
          <img src="src/assets/icons/icons8-discount-100.png" alt="" srcset="" />
          Budines   
          </div>
          <div className={styles.categoryCard}>        
          <img src="src/assets/icons/icons8-ban-96.png" alt="" srcset="" />
          Sin TACC
          </div>
          <div className={styles.categoryCard}>           
          <img src="src/assets/icons/icons8-cake-100.png" alt="" srcset="" />
          Tortas 
          </div>
          <div className={styles.categoryCard}>          
          <img src="src/assets/icons/icons8-cookies-100 (1).png" alt="" srcset="" />
          Salados  
          </div>
          <div className={styles.categoryCard}>           
          <img src="src/assets/icons/icons8-gift-90.png" alt="" srcset="" />
          Box de regalo 
          </div>
          <div className={styles.categoryCard}>           
          <img src="src/assets/icons/icons8-cupcake-66.png" alt="" srcset="" />
          Fiestas 
          </div>
        </div>
      </Flicking>
    </>
  )
}