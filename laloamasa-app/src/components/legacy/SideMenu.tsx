'use client'

import React from 'react';
import Link from 'next/link';
import './SideMenu.scss';
import { Close } from '@mui/icons-material';

interface SideMenuProps {
  isOpen: boolean,
  onClose: any,
}

	export default function SideMenu({ isOpen, onClose }: SideMenuProps){
		return(
	    <div className={`sideMenu ${isOpen ? 'open' : ''}`}>
  	    <button onClick={onClose} className='closeButton'>
    	    <Close />
      	</button>
				<ul className='menuList'>
					<li>
						<Link href='/'>Inicio</Link>
					</li>
					<li>
						<Link href='/sobre-mi'>Sobre mí</Link>
					</li>
					<li>
						<Link href='/carrito'>Carrito</Link>
					</li>
					<li>
						<Link href='/tienda'>Panadería Convencional</Link>
					</li>
					<li>
						<Link href='/tienda/sintacc'>Panadería sin TACC</Link>
					</li>
					<li>
						<Link href='/tienda/vegana'>Panadería Vegana</Link>
					</li>
				</ul>	
		</div>
  );
};