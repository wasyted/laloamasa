const closeCart = document.getElementById('close-cart');
const cartNavContainer = document.querySelector('.cart-nav');
const openCart = document.getElementById('open-cart');
openCart.addEventListener('click', () => {
  cartNavContainer.classList.remove('hidden');
});
closeCart.addEventListener('click', () =>{
  cartNavContainer.classList.add('hidden');
});