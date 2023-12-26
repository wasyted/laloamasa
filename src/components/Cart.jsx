import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Nav from "./nav/Nav";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);

  function updateCart() {
    const cart = JSON.parse(localStorage.getItem("Cart")) || { cartList: [] };
    setCartProducts(cart.cartList);
  }

  function removeItemFromCart(productToDelete) {
    const cart = JSON.parse(localStorage.getItem("Cart"));
    for(let i=0; i < cart.cartList.length ; i++){
      if(cart.cartList[i].id === productToDelete){
        cart.cartList.splice(i,1);
        localStorage.setItem("Cart", JSON.stringify(cart));
        updateCart();
        return;
      }
    }
  }

  function emptyCart() {
    localStorage.setItem("Cart", JSON.stringify({ cartList: [] }));
    updateCart();
  }

  useEffect(() => {
    updateCart();
  }, []);

  return (
    <>
      <Nav />
      <div>
        <h1>Carrito</h1>
        <ul>
          {cartProducts && cartProducts.map((product) => (
            <li key={uuidv4()}>
              <p>
                {product.name} ${product.price}
              </p>
              <button onClick={()=>removeItemFromCart(product.id)}>Eliminar del carrito</button>
            </li>
          ))}
        </ul>
        <button onClick={emptyCart}>Vaciar carrito</button>
      </div>
    </>
  );
}