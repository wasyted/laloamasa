function displayDock(){
  // Create the div element
  const divElement = document.createElement('div');
  divElement.classList.add('bottom-dock');

  // Create the button element
  const buttonElement = document.createElement('button');
  buttonElement.id = 'buy-button';

  // Create the img element
  const imgElement = document.createElement('img');
  imgElement.classList.add('cart');
  imgElement.src = './resources/shopping_bag_FILL1_wght700_GRAD-25_opsz48.svg';
  imgElement.alt = '';
  buttonElement.appendChild(imgElement);

  divElement.appendChild(buttonElement);

  // Insert the div element into the DOM
  document.body.appendChild(divElement);
}

displayDock();
