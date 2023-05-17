function displayInfoSection() {
  // Create the div element
  const divElement = document.createElement('div');
  divElement.classList.add('info', 'brown-background');

  // Create the h2 element for "¿Que preparo?"
  const h2Element = document.createElement('h2');
  h2Element.classList.add('sub-title');
  h2Element.textContent = '¿Que preparo?';
  divElement.appendChild(h2Element);

  // Create the ul element
  const ulElement = document.createElement('ul');

  // Create the list items for "Panaderia"
  const panaderiaItems = [
    'Artesanal',
    'Convencional',
    'Vegana',
    'Sin gluten, apta para diabéticos.'
  ];
  const panaderiaLiElement = document.createElement('li');
  panaderiaLiElement.classList.add('bold', 'margin-top-bottom-10');
  panaderiaLiElement.textContent = 'Panaderia:';
  ulElement.appendChild(panaderiaLiElement);
  panaderiaItems.forEach(item => {
    const liElement = document.createElement('li');
    liElement.classList.add('sub-item');
    liElement.textContent = '• ' + item;
    ulElement.appendChild(liElement);
  });

  // Create the list items for "Tienda liviana/fit"
  const tiendaItems = [
    'Hamburgesas de legumbres',
    'Hamburgesas de vegetales',
    'Apto para veganos y celiacos',
    'Propuestas de menú diario para tener en tu freezer y ahorrar tiempo!'
  ];
  const tiendaLiElement = document.createElement('li');
  tiendaLiElement.classList.add('bold', 'margin-top-bottom-10');
  tiendaLiElement.textContent = 'Tienda liviana/fit:';
  ulElement.appendChild(tiendaLiElement);
  tiendaItems.forEach(item => {
    const liElement = document.createElement('li');
    liElement.classList.add('sub-item');
    liElement.textContent = '• ' + item;
    ulElement.appendChild(liElement);
  });

  divElement.appendChild(ulElement);

  // Create the h2 element for "Todo casero, hecho con 🤍"
  const h2CenteredElement = document.createElement('h2');
  h2CenteredElement.classList.add('sub-title', 'centered');
  h2CenteredElement.textContent = 'Todo casero, hecho con 🤍';
  divElement.appendChild(h2CenteredElement);

  // Insert the div element into the DOM
  document.body.appendChild(divElement);
}

displayInfoSection();