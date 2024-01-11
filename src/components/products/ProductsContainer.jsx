import { useEffect, useState } from 'react';
import styles from '../styles/ProductsContainer.module.scss';
import { Link } from 'react-router-dom';

export default function ProductsContainer({ products, selectedCategory, searchTerm }) {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    // Reset the displayed products when the selected category or search term changes
    setDisplayedProducts([]);
  }, [selectedCategory, searchTerm]);

  useEffect(() => {
    // Update displayed products when products, selectedCategory, or itemsPerPage change
    const startIndex = 0;
    const endIndex = startIndex + itemsPerPage;
    const newProducts = getNewProducts(startIndex, endIndex);

    setDisplayedProducts(newProducts);
  }, [products, selectedCategory, itemsPerPage, searchTerm]);

  const getNewProducts = (startIndex, endIndex) => {
    let filteredProducts = products || []; // Handle null or undefined

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      const searchTermLowerCase = searchTerm.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTermLowerCase)
      );
    }

    return filteredProducts.slice(startIndex, endIndex);
  };

  const loadMoreItems = () => {
    setItemsPerPage(prevItemsPerPage => prevItemsPerPage + 8);
  };

  return (
    <div>
      {(selectedCategory === null) ? <h1 className={styles.productsContainerHeader}>Productos / Todos</h1> : <h1 className={styles.productsContainerHeader}>Productos / {selectedCategory}</h1> }
      <div className={styles.productsContainer}>
        {displayedProducts.map((product) => (
          <Link key={product.id}to={`/producto/${product.id}`}>
            <div className={styles.productContainer}>
              <div className={styles.productImageContainer}>
                <img src={product.image} alt="" />
              </div>
              <p>{product.name} <span className={styles.price}>${product.price}</span></p>
              <button style={{justifySelf: 'flex-end'}}>Ver producto</button>
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
