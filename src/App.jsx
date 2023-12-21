import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './_variables.scss';
import './Style.scss';
import './App.css';
import CategoriesSection from './components/CategoriesSection';
import ProductsContainer from './components/ProductsContainer';

function App() {
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
          <ProductsContainer />
        </div>
    </>
  )
}

export default App
