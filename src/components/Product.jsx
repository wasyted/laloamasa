import ProductView from './products/ProductView';
import RecommendedContainer from './products/RecommendedContainer';
import Nav from './nav/Nav';
import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import '../_variables.scss';
import '../Style.scss';
import '../App.css';

export default function Product(){
  const urlParams = useParams();
  const [ products , setProducts ] = useState();
  const [ product , setProduct ] = useState();
  
  const fetchProduct = async () => {
    const response = await fetch("https://raw.githubusercontent.com/wasyted/laloamasajson/main/products.json");
    const data = await response.json();
    setProducts(data.products)
    setProduct(data.products.find(product => product.id == urlParams.id))
  }

  useEffect(() => {
    fetchProduct();
  }, [urlParams.id]);
  
  function addItemToCart(product){
    const newCart = JSON.parse(localStorage.getItem("Cart"));
    newCart.cartList.push(product)
    localStorage.setItem("Cart", JSON.stringify(newCart))
  }

  function handleClick(){
    addItemToCart(product);
  }
  
  return (
    <>
      <Nav />
      {product && <ProductView id={product.id} name={product.name} price={product.price} description={product.description} image={product.image} category={product.category} handleClick={handleClick} />}
      {products && <RecommendedContainer products={products}/>}
    </>
  )
}