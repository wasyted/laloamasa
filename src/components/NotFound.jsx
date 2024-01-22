import { Link } from "react-router-dom"
import Header from "./nav/Header"

export default function NotFound() {
  return(
    <>
      <Header />
      <div style={{minHeight: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap:'10px'}}>
        <h1>Ups...</h1>
        <h2>Error 404: Acá no hay nada</h2>
        <h3>Hacé click o tocá acá para volver al inicio.</h3>
        <Link to='/'><button style={{backgroundColor: '#151515', border: 'none' , padding: '10px', color: '#fff', borderRadius: '5px', fontFamily: 'Josefin Sans'}}>Volver al inicio</button></Link>
      </div>
    </>
  )  
}