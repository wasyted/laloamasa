function displayHeader() {
  // Create the header element
  const headerElement = document.createElement('header');
  headerElement.classList.add('dark-background');

  // Create the div element
  const divElement = document.createElement('div');

  // Create the img element for the header logo
  const logoImgElement = document.createElement('img');
  logoImgElement.classList.add('header-logo');
  logoImgElement.src = './resources/logo.png';
  logoImgElement.alt = 'laloamasa';
  divElement.appendChild(logoImgElement);

  // Create the ul element for the navigation menu
  const ulElement = document.createElement('ul');

  // Create the li elements for the menu items
  const menuItems = ['Menu', 'Contacto'];
  menuItems.forEach(item => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.href = '#' + item.toLowerCase();
    aElement.textContent = item;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  divElement.appendChild(ulElement);
  headerElement.appendChild(divElement);

  // Create the button element for the shopping cart
  const cartButtonElement = document.createElement('button');
  const cartImgElement = document.createElement('img');
  cartImgElement.classList.add('cart');
  cartImgElement.id = 'open-cart';
  cartImgElement.src = './resources/shopping_basket_FILL1_wght700_GRAD-25_opsz48.svg';
  cartImgElement.alt = '';
  cartButtonElement.appendChild(cartImgElement);
  headerElement.appendChild(cartButtonElement);

  // Insert the header element into the DOM
  document.body.appendChild(headerElement);
}

displayHeader();