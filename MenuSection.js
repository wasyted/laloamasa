
function displayMenuSection(){
  // Create the div element
  const divElement = document.createElement('div');
  divElement.id = 'menu';
  divElement.classList.add('menu');

  // Create the h1 element for the title
  const h1Element = document.createElement('h1');
  h1Element.classList.add('title');
  h1Element.textContent = 'Menu';
  divElement.appendChild(h1Element);

  // Create the div element with class "menu-grid"
  const menuGridDiv = document.createElement('div');
  menuGridDiv.classList.add('menu-grid');

  // Array of image URLs
  const imageUrls = [
    './resources/281137036_137566218862675_557806038466263533_n.jfif',
    './resources/281373860_138251955457583_683233482584454994_n.jfif',
    './resources/282349416_1410014636114507_6279935663322789253_n.jfif',
    './resources/283969739_733082501227869_6931114139399595048_n.jfif',
    './resources/280574352_150631197475100_4871643091998554577_n.jpg',
    './resources/280596340_1077297909662003_239596396715096902_n.jfif'
  ];

  // Create the menu items with images
  imageUrls.forEach(url => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item');

    const imgElement = document.createElement('img');
    imgElement.src = url;
    imgElement.alt = '';
    imgElement.srcset = '';
    menuItemDiv.appendChild(imgElement);

    menuGridDiv.appendChild(menuItemDiv);
  });

  divElement.appendChild(menuGridDiv);

  // Insert the div element into the DOM
  document.body.appendChild(divElement);
}

displayMenuSection();