import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav/Nav";
import RecommendedContainer from "./products/RecommendedContainer";
import Notification from './Notification';
import './styles/Cart.scss';

export default function Cart() {
  const [products , setProducts] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(1000);
  const [total, setTotal] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  function showNotificationWithMessage(message) {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      setNotificationMessage('');
    }, 3000);
  }

  function updateCart() {
    const cart = JSON.parse(localStorage.getItem("Cart")) || { cartList: [] };
    setCartProducts(cart.cartList);

    const newSubtotal = cart.cartList.reduce((acc, product) => {
      return acc + product.price * product.amount;
    }, 0);
    setSubtotal(newSubtotal);

    const newTotal = newSubtotal + shipping;
    setTotal(newTotal);
  }

  function removeOneItemFromCart(productToDelete) {
    const cart = JSON.parse(localStorage.getItem("Cart"));
    for (let i = 0; i < cart.cartList.length; i++) {
      if (cart.cartList[i].id === productToDelete.id) {
        if (cart.cartList[i].amount > 1) {
          // If there is more than 1 item, decrement the amount
          cart.cartList[i].amount -= 1;
        } else {
          // If there is only 1 item, remove the entire product
          cart.cartList.splice(i, 1);
        }
        localStorage.setItem("Cart", JSON.stringify(cart));
        updateCart();
        showNotificationWithMessage(`Sacaste 1 ${productToDelete.name} del carrito`);
        return;
      }
    }
  }

  function addItemToCart(productToDelete) {
    const cart = JSON.parse(localStorage.getItem("Cart"));
    for (let i = 0; i < cart.cartList.length; i++) {
      if (cart.cartList[i].id === productToDelete.id) {
          cart.cartList[i].amount += 1;
        localStorage.setItem("Cart", JSON.stringify(cart));
        updateCart();
        showNotificationWithMessage(`Agregaste 1 ${productToDelete.name} al carrito`);
        return;
      }
    }
  }

  function removeItemFromCart(productToDelete) {
    const cart = JSON.parse(localStorage.getItem("Cart"));
    for (let i = 0; i < cart.cartList.length; i++) {
      if (cart.cartList[i].id === productToDelete.id) {
        cart.cartList.splice(i, 1);
        localStorage.setItem("Cart", JSON.stringify(cart));
        updateCart();
        showNotificationWithMessage(`Sacaste ${productToDelete.amount} ${productToDelete.name} del carrito`);
        return;
      }
    }
  }

  function emptyCart() {
    localStorage.setItem("Cart", JSON.stringify({ cartList: [] }));
    updateCart();
    showNotificationWithMessage('Vaciaste el carrito');
  }

  const fetchProducts = async () => {
    try{
      const response = await fetch("https://raw.githubusercontent.com/wasyted/laloamasajson/main/products.json");
      const data = await response.json();
      setProducts(data.products);
    } catch{
      if(error){
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchProducts();
  } , []);
  
  useEffect(() => {
    updateCart();
  }, []);
  return (
    <>
      <Nav />
      <div className="cart">
        {cartProducts.length === 0 ? (
          <div style={{display: 'flex' , justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 20}}>
            <h1>Ups..</h1>
            <h2>Tu carrito está vacío.</h2>
            <p>Hacé click o tocá acá para volver a la página de productos y añadirlos al carrito.</p>
            <Link to="/"><button style={{filter: 'invert(100%)'}} onClick={emptyCart}>Seguir comprando</button></Link>
          </div>
        ) : (
          <div className="cart">
            <h1>Carrito</h1>
            <ul>
              {cartProducts.map((product) => (
                <li key={uuidv4()}>
                {/* <div className="product-image">
                  <img src={product.image} alt="" />
                </div> */}
                  <div style={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center',width: '100%'}}>
                    <Link to={`/producto/${product.id}`}>
                      <div style={{paddingRight: '10px', display: 'flex', flexDirection: 'column', gap: '10px', justifySelf: 'start'}}>
                        <div style={{display: 'flex', gap: '10px'}}>
                          <p style={{fontWeight: 'bold'}}>{product.name}</p>
                          <p style={{fontWeight: 'bold'}}>${product.price * product.amount}</p>
                        </div>
                        <div style={{display: 'flex', gap: '10px'}}>
                          <p style={{fontSize: '12px', color: "#656565"}}>{product.description}</p>
                          <p style={{fontSize: '12px'}}>{product.amount} {(product.amount > 1) ? 'unidades' : 'unidad'}</p>
                        </div>
                      </div>
                    </Link>
                  <div style={{display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <button style={{alignSelf: 'end'}}className="" onClick={()=>addItemToCart(product)}><img src="src/assets/icons/pngwing.com (21).png"></img></button>
                    <button style={{alignSelf: 'end'}}className="" onClick={()=>removeOneItemFromCart(product)}><img src="src/assets/icons/pngwing.com (22).png"></img></button>
                    <button style={{alignSelf: 'end'}}className="trash-button" onClick={()=>removeItemFromCart(product)}><img src="https://i.ibb.co/1ZKfz4X/trash-347.png"></img></button>
                  </div>
                </div>
              </li>
              ))}
            </ul>
            <button style={{alignSelf: 'end', filter: 'invert(100%)'}} onClick={emptyCart}>Vaciar carrito</button>
            <div style={{width:'100%',maxWidth: '600px', paddingTop: '10px', alignSelf: 'end'}}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Subtotal: </p>
                <p>${subtotal}</p>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Envío: </p>
                <p>${shipping}</p>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Total: </p>
                <p>${total}</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: 10, alignSelf: 'end'}}>
            <Link to="/"><button style={{filter: 'invert(100%)'}}>Seguir comprando</button></Link>
              <button onClick={() => alert('wiwawo todavia no se puede comprar chinchongbing')}>Confirmar compra</button>
            </div>
          </div>
        )}
      </div>
      {showNotification && <Notification message={notificationMessage} onClose={() => setShowNotification(false)} />}
      {products && <RecommendedContainer products={products} />}
    </>
  );
}