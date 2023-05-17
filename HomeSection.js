function displayHomeSection(){
  // Create the div element
  const divElement = document.createElement('div');
  divElement.id = 'home';
  divElement.classList.add('home');

  // Create the h1 element for the title
  const h1Element = document.createElement('h1');
  h1Element.classList.add('title', 'bold');
  h1Element.textContent = '@lalo.amasa';
  divElement.appendChild(h1Element);

  // Create the p element for the description
  const pElement = document.createElement('p');
  pElement.textContent = 'Soy Lore, amaso en casa con mucho cariño panes y budines convencionales, sin gluten y veganos! todo es mas rico hecho con amor. Bienvenidos! 👩🏼‍🍳❤️';
  divElement.appendChild(pElement);

  // Insert the div element into the DOM
  document.body.appendChild(divElement);
}
displayHomeSection();