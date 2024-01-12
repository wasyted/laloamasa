import { useEffect, useState } from 'react';
import styles from '../styles/ProductsContainer.module.scss';
import { Link } from 'react-router-dom';

export default function ProductsContainer({ products, selectedCategory, searchTerm }) {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [sortType, setSortType] = useState('price'); // 'price', 'name'

  useEffect(() => {
    // Reset the displayed products when the selected category, search term, or sort order changes
    setDisplayedProducts([]);
  }, [selectedCategory, searchTerm, sortOrder, sortType]);

  useEffect(() => {
    // Update displayed products when products, selectedCategory, itemsPerPage, or sort order changes
    const startIndex = 0;
    const endIndex = startIndex + itemsPerPage;
    const newProducts = getNewProducts(startIndex, endIndex);

    setDisplayedProducts(newProducts);
  }, [products, selectedCategory, itemsPerPage, searchTerm, sortOrder, sortType]);

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

    // Sort the products based on the selected sort type and order
    filteredProducts = sortProducts(filteredProducts);

    return filteredProducts.slice(startIndex, endIndex);
  };

  const sortProducts = (productsToSort) => {
    return productsToSort.sort((a, b) => {
      let aValue, bValue;

      if (sortType === 'price') {
        aValue = a.price;
        bValue = b.price;
      } else if (sortType === 'name') {
        aValue = a.name[0].toLowerCase();
        bValue = b.name[0].toLowerCase();
      }

      if( sortType === 'price' && sortOrder === 'asc'){
        return aValue - bValue
      } 
      if( sortType === 'price' && sortOrder === 'desc'){
        return bValue - aValue
      }
      if (sortType === 'name' && sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      }
      if (sortType === 'name' && sortOrder === 'desc') {
        return bValue.localeCompare(aValue);
      }
    });
  };

  const handleSortChange = (newSortType) => {
    // Toggle sort order if the same sort type is selected again
    setSortOrder((prevSortOrder) => (sortType === newSortType ? (prevSortOrder === 'asc' ? 'desc' : 'asc') : 'asc'));
    setSortType(newSortType);
  };

  const loadMoreItems = () => {
    setItemsPerPage((prevItemsPerPage) => prevItemsPerPage + 8);
  };

  return (
    <div>
      {(selectedCategory === null) ? <h1 className={styles.productsContainerHeader}>Productos / Todos</h1> : <h1 className={styles.productsContainerHeader}>Productos / {selectedCategory}</h1> }
      <div className={styles.sortButtons}>
      <p style={{paddingRight: '10px'}}>Ordernar: </p>
        <button
          className={sortType === 'price' ? `${styles.active} ${styles.sortButton}` : styles.sortButton}
          onClick={() => handleSortChange('price')}
        >
          Precio{sortType === 'price' && `(${sortOrder === 'asc' ? '$ > $$$' : '$$$ > $'})`}
        </button>
        <button
          className={sortType === 'name' ? `${styles.active} ${styles.sortButton}` : styles.sortButton}
          onClick={() => handleSortChange('name')}
        >
          Nombre{sortType === 'name' && `(${sortOrder === 'asc' ? 'A a Z' : 'Z a A'})`}
        </button>
      </div>
      <div className={styles.productsContainer}>
        {displayedProducts.map((product) => (
          <Link key={product.id} to={`/producto/${product.id}`}>
            <div className={styles.productContainer}>
              <div className={styles.productImageContainer}>
                <img src={product.image} alt="" />
              </div>
              <p>{product.name} <span className={styles.price}>${product.price}</span></p>
              <button style={{ justifySelf: 'flex-end' }}>Ver producto</button>
            </div>
          </Link>
        ))}
      </div>
      {products && products.length > displayedProducts.length && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '20px' }}>
          <button className={styles.loadMoreButton} onClick={loadMoreItems}>
            Cargar más productos
          </button>
        </div>
      )}
    </div>
  );
}