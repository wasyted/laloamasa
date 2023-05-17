
function displayBanner(){

  // Create the div element
  const divElement = document.createElement('div');
  divElement.classList.add('banner-container');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('banner-container');
  const imgElement = document.createElement('img');
  imgElement.classList.add('banner');
  imgElement.src = './resources/280613726_118051304064356_5554971855603901048_n_rotated.jpg';
  imgContainer.appendChild(imgElement);

  divElement.appendChild(imgContainer);

  document.body.appendChild(divElement);
}

displayBanner();
