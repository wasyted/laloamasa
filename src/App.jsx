import { useState , useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import Header from './components/nav/Header';
import SearchBar from './components/inputs/SearchBar';
import './_variables.scss';
import './Style.scss';
import './App.css';
import CategoriesSection from './components/categories/CategoriesSection';
import ProductsContainer from './components/products/ProductsContainer';

function App() {
  const [products , setProducts] = useState(null);
  useEffect(() => {
    const defaultProducts = [
      {id: uuidv4(), name: 'Pan', price: 100, description: 'Pan amasado con harina 0000', image: 'src/assets/thumbnails/pan-thumb.png', category: 'pan'},
      {id: uuidv4(), name: 'Pan integral', price: 110, description: 'Pan amasado con harina integral', image: 'src/assets/thumbnails/pan-integral-thumb.png', category: 'pan'},
      {id: uuidv4(), name: 'Pan sin TACC', price: 130, description: 'Pan amasado sin gluten', image: 'src/assets/thumbnails/pan-sin-tacc-thumb.png', category: 'pan'},
      {id: uuidv4(), name: 'Pan dulce', price: 150, description: 'Pan dulce con fruta abrillantada', image: 'src/assets/thumbnails/pan-dulce-thumb.png', category: 'fiestas'},
      {id: uuidv4(), name: 'Budín chico', price: 160, description: 'Budin de 150gr', image: 'src/assets/thumbnails/budin-thumb.png', category: 'budin'},
      {id: uuidv4(), name: 'Budín mediano', price: 200, description: 'Budin de 250gr', image: 'src/assets/thumbnails/budin-thumb.png', category: 'budin'},
      {id: uuidv4(), name: 'Budín grande', price: 300, description: 'Budin de 600gr', image: 'src/assets/thumbnails/budin-thumb.png', category: 'budin'},
    ];
    setProducts(defaultProducts)
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

export default App
