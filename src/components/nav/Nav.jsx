import { Link } from "react-router-dom";
import './Nav.scss';

function Nav(){
  return(
    <>
      <div className="homeBannerContainer">
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/promo'>Promociones y Ofertas</Link>
          </li>
          <li>
            <Link to='/'>Panadería</Link>
          </li>
          <li>
            <Link to='/sintacc'>Sin TACC</Link>
          </li>
          <li>
            <Link to='/vegana'>Vegano</Link>
          </li>
          <li>
            <Link to='/tortas'>Tortas</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav;