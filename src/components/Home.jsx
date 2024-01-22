import { useState, useEffect } from 'react';
import Header from './nav/Header';
import Banner from './nav/Banner';
import Nav from './nav/Nav';
import SearchBar from './inputs/SearchBar';
import CategoriesSection from './categories/CategoriesSection';
import ProductsContainer from './products/ProductsContainer';
import '../_variables.scss';
import '../Style.scss';
import '../App.css';

export default function Home() {
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/wasyted/laloamasajson/main/products.json");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedCategory(null);
  };

  return (
    <>
      <div style={{ backgroundColor: 'var(--gray)' }}>
        <Header />
        <Banner />
        <Nav />
        <SearchBar searchCallback={handleSearch} />
        <div style={{ margin: 'auto', maxWidth: '1280px' }}>
          <CategoriesSection setSelectedCategory={setSelectedCategory} />
        </div>
        <div style={{ backgroundColor: '#fff'}}>
          <ProductsContainer products={products} selectedCategory={selectedCategory} searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
}