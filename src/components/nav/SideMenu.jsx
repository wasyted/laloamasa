import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.scss';

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`sideMenu ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose} className='closeButton'>
        X
      </button>
      <ul className='menuList'>
				<li>
					<Link to='/'>Inicio</Link>
				</li>
				<li>
					<Link to='/sobre-mi'>Sobre mí</Link>
				</li>
				<li>
					<Link to='/carrito'>Carrito</Link>
				</li>
				<li>
					<Link to='/convencional'>Panadería Convencional</Link>
				</li>
				<li>
					<Link to='/sintacc'>Panadería sin TACC</Link>
				</li>
				<li>
					<Link to='/vegana'>Panadería Vegana</Link>
				</li>
      </ul>
    </div>
  );
};

export default SideMenu;