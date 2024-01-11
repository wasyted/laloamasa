import Notification from './Notification';
import ProductView from './products/ProductView';
import RecommendedContainer from './products/RecommendedContainer';
import Nav from './nav/Nav';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../components/styles/Notification.scss'
import '../_variables.scss';
import '../Style.scss';
import '../App.css';

export default function Product() {
  const urlParams = useParams();
  const [products, setProducts] = useState();
  const [product, setProduct] = useState();
  const [amount, setAmount] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  function showNotificationWithMessage(message) {
    setNotificationMessage(message);
    setShowNotification(true);

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
      setNotificationMessage('');
    }, 3000);
  }

  const fetchProduct = async () => {
    const response = await fetch("https://raw.githubusercontent.com/wasyted/laloamasajson/main/products.json");
    const data = await response.json();
    setProducts(data.products);
    setProduct(data.products.find(product => product.id == urlParams.id));
  };

  useEffect(() => {
    fetchProduct();
  }, [urlParams.id]);

  function addItemToCart(productToAdd) {
    const existingCart = JSON.parse(localStorage.getItem("Cart")) || { cartList: [] };

    // Check if the product is already in the cart
    const existingProductIndex = existingCart.cartList.findIndex(item => item.id === productToAdd.id);

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update the amount
      existingCart.cartList[existingProductIndex].amount += productToAdd.amount;
    } else {
      // If the product is not in the cart, add it to the cart list
      existingCart.cartList.push(productToAdd);
    }

    localStorage.setItem("Cart", JSON.stringify(existingCart));
  }

  function handleIncrease() {
    setAmount(amount + 1);
  }

  function handleDecrease() {
    (amount <= 0 ) ? setAmount(amount) : setAmount(amount - 1);
  }

  function handleClick() {
    if(amount > 0){
      addItemToCart({ ...product, amount})
      showNotificationWithMessage(`Agregaste ${amount} ${product.name} al carrito`);
      return;
    }
    showNotificationWithMessage(`Debés agregar 1 o más items al carrito`);
  }

  return (
    <>
      <Nav />
      {product && (
        <ProductView
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
          category={product.category}
          amount={amount}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleClick={handleClick}
        />
      )}
      {showNotification && <Notification message={notificationMessage} onClose={() => setShowNotification(false)} />}
      {products && <RecommendedContainer products={products} />}
    </>
  );
}