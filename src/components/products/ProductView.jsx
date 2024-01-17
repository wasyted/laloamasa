import React, { useState } from 'react';
import '../styles/Notification.scss';
import styles from '../styles/ProductView.module.scss';

export default function ProductView(props) {
  const [selectedFlavor, setSelectedFlavor] = useState(''); // Estado para almacenar el sabor seleccionado

  const handleFlavorChange = (event) => {
    setSelectedFlavor(event.target.value);
  };

  return (
    <>
      <div className={styles.productViewContainer}>
        <div className={styles.sideGallery}>
          <div>
            <img src={props.image} alt="" />
          </div>
          <div>
            <img src={props.image} alt="" />
          </div>
          <div>
            <img src={props.image} alt="" />
          </div>
          <div>
            <img src={props.image} alt="" />
          </div>
          <div>
            <img src={props.image} alt="" />
          </div>
        </div>
        <div className={styles.mainView}>
          <img src={props.image} alt="" />
        </div>
        <div className={styles.productInfoContainer}>
          <div className={styles.productView}>
            <h1>{props.name}</h1>
            <div className={styles.infoContainer}>
              <h2>${props.price}</h2>
              <p>{props.description}</p>
            </div>
            <div className={styles.flavorDropdown}>
            <label htmlFor="flavor">Elegí una variedad:</label>
            <select id="flavor" onChange={handleFlavorChange} value={selectedFlavor}>
              <option value="sabor1">Vainilla</option>
              <option value="sabor2">Naranja</option>
              <option value="sabor3">Manzana</option>
            </select>
          </div>
            <div className={styles.buyContainer}>
              <button onClick={props.handleDecrease}>-</button>
              <div>{props.amount}</div>
              <button onClick={props.handleIncrease}>+</button>
              <button onClick={props.handleClick}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}