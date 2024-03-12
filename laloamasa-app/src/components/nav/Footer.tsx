import Link from 'next/link';
import { lora } from "@/app/fonts";

export default function Footer(){
  return(
    <footer className="w-full bg-pink-100/75 pt-5 pb-5">
      <div className="flex items-start justify-between p-4 flex-wrap gap-x-6 max-w-4xl mx-auto">
        <div className="flex-1">
          <p className={`${lora.className} text-lg font-bold mb-3`}>
            Sobre laloamasa
          </p>
          <ul>
            <li className="hover:font-bold mb-2">
              <Link href="/sobre-mi">
                Sobre mí
              </Link>
            </li>
            <li className="hover:font-bold mb-2">
              <Link href="/contacto">
                Contacto
              </Link>
            </li>
            <li className="hover:font-bold mb-2">
              <Link href="/redes">
                Redes
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className={`${lora.className} font-bold text-lg mb-3`}>
            Productos
          </p>
          <ul>
            {/* Assuming these are external links, keep them as is or update with your actual internal paths */}
            <li className="hover:font-bold mb-2">
              <Link href="/">
                Panadería Convencional
              </Link>
            </li>
            <li className="hover:font-bold mb-2"><a href="http://" target="_blank" rel="noopener noreferrer">Panadería Vegana</a></li>
            <li className="hover:font-bold mb-2"><a href="http://" target="_blank" rel="noopener noreferrer">Panadería Sin TACC</a></li>
            <li className="hover:font-bold mb-2"><a href="http://" target="_blank" rel="noopener noreferrer">Tortas</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <p className={`${lora.className} text-lg font-bold mb-3`}>
            Servicios
          </p>
          <ul>
            {/* These links should also be updated to your internal paths or kept as external links */}
            <li className="hover:font-bold mb-2"><a href="http://" target="_blank" rel="noopener noreferrer">Delivery</a></li>
            <li className="hover:font-bold mb-2"><a href="http://" target="_blank" rel="noopener noreferrer">Take away</a></li>
            <li className="hover:font-bold mb-2"><a href="http://" target="_blank" rel="noopener noreferrer">Eventos</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}