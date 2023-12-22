import { useState , useEffect } from 'react';
import Header from './nav/Header';
import SearchBar from './inputs/SearchBar';
import CategoriesSection from './categories/CategoriesSection';
import ProductsContainer from './products/ProductsContainer';
import '../_variables.scss';
import '../Style.scss';
import '../App.css';

export default function Home(){
  const [products , setProducts] = useState(null);

  const fetchProducts = async () => {
    try{
      const response = await fetch("https://raw.githubusercontent.com/wasyted/laloamasajson/main/products.json");
      const productsList = await response.json();
      setProducts(productsList);
    } catch{
      if(error){
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchProducts();
  } , []);

  return (
    <>
      <div style={{backgroundColor: 'var(--gray)'}}>
        <Header />
        <SearchBar />
        <div style={{margin: 'auto', maxWidth: '1280px'}}>
          <CategoriesSection />
        </div>
      </div>
        <div style={{maxWidth: '1280px', margin: 'auto'}}>
          <ProductsContainer products={products}/>
        </div>
    </>
  )
}