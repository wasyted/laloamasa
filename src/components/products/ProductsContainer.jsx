import { useEffect, useState } from 'react';
import styles from '../styles/ProductsContainer.module.scss';
import { Link } from 'react-router-dom';

export default function ProductsContainer({ products, selectedCategory }) {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    // Reset the displayed products when the selected category changes
    setDisplayedProducts([]);
  }, [selectedCategory]);

  useEffect(() => {
    // Update displayed products when products or itemsPerPage change
    if (products && products.length > displayedProducts.length) {
      const startIndex = 0;
      const endIndex = startIndex + itemsPerPage;
      console.log(endIndex)
      const newProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory).slice(startIndex, endIndex)
        : products.slice(startIndex, endIndex);

      setDisplayedProducts(prevProducts => [...prevProducts, ...newProducts]);
    }
  }, [products, selectedCategory, itemsPerPage]);

  const loadMoreItems = () => {
    setItemsPerPage(prevItemsPerPage => prevItemsPerPage + 9);
  };

  return (
    <div>
      <h1 className={styles.productsContainerHeader}>Productos / Todos</h1>
      <div className={styles.productsContainer}>
        {displayedProducts.map((product) => (
          <Link to={`/product/${product.id}`}>
            <div key={product.id} className={styles.productContainer}>
              <img src={product.image} alt="foto producto" />
              <p>{product.name} <span className={styles.price}>${product.price}</span></p>
            </div>
          </Link>
        ))}
      </div>
      {products && products.length > displayedProducts.length && (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: "20px"}}>
          <button className={styles.loadMoreButton} onClick={loadMoreItems}>
            Cargar más productos
          </button>
        </div>
      )}
    </div>
  );
}
