import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../styles/Header.module.scss';

export default function Header(){
  return(
    <div>
      <Carousel 
        autoPlay={true} 
        infiniteLoop={true} 
        showArrows={false} 
        showStatus={false} 
        showThumbs={false} 
        emulateTouch={true} 
        swipeable={true}
        interval={10000}>

        <div className={styles.header}>
          <div className={styles.carouselOverlay}>
            <p>
              Soy Lore
            </p>
            <h1>Estoy amasando con amor</h1>
          </div>
          <img src="https://i.ibb.co/bmckCYR/pexels-life-of-pix-9095.jpg" />
        </div>
        <div className={styles.header}>
          <div className={styles.carouselOverlay}>
            <h1>¿Ya probaste el budín de chocolate?</h1>
          </div>
          <img src="https://i.ibb.co/C5jp1HH/pexels-lucie-liz-3256809.jpg" />
        </div>
        <div className={styles.header}>
          <div className={styles.carouselOverlay}>
            <h1>Hacemos envíos, ¡Consultá disponibilidad!</h1>
          </div>
          <img src="https://i.ibb.co/PGjf2S2/pexels-j-shoots-230743.jpg" />
        </div>
      </Carousel>
    </div>
  )
}