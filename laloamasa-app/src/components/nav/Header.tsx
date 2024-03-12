'use client'

import { grand_hotel } from "@/app/fonts"
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useState } from "react";
import SideMenu from '../legacy/SideMenu'

export default function Header(){
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  return(
    <header className="flex items-center justify-center sticky top-0 right-0 left-0 p-2 bg-pink-100 z-50">
      <div className="flex-1 max-w-32 max-h-8">
        <Link href="/" className={`${grand_hotel.className} text-2xl pl-5`}>laloamasa</Link>
      </div>
      <div className="flex-1">
        <ul className="flex items-center justify-end text-xl gap-x-2 pr-2">
          <li className="p-1">
            <Link href="/perfil" target="_self" rel="noopener noreferrer">
              <AccountCircleIcon />
            </Link>
          </li>
          <li className="p-1">
            <Link href="/carrito" target="_self" rel="noopener noreferrer">
              <ShoppingBasketIcon />
            </Link>
          </li>
          <li className="p-1">
            <button onClick={toggleSideMenu}>
              <MenuIcon />
            </button>
          </li>
        </ul>
      </div>
      <SideMenu onClose={toggleSideMenu} isOpen={isSideMenuOpen} />
    </header>
  )
}