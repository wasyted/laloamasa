import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../styles/Header.module.scss';

export default function Banner(){
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
        <div className={styles.banner}>
          <div 
            className={styles.carouselOverlay}>
            <div className={styles.logoContainer}>
              <img src="src/assets/laloamasalogo-round.png" alt="" />
            </div>
          </div>
          <img src="src/assets/lauren-gray-Zqh5l1JWs5M-unsplash.jpg" alt="" />
        </div>
        <div className={styles.banner}>
          <div className={styles.carouselOverlay}>
            <h1>¿Ya probaste el budín de chocolate?</h1>
          </div>
          <img src="https://i.ibb.co/C5jp1HH/pexels-lucie-liz-3256809.jpg" />
        </div>
        <div className={styles.banner}>
          <div className={styles.carouselOverlay}>
            <h1>Hacemos envíos, ¡Consultá disponibilidad!</h1>
          </div>
          <img src="https://i.ibb.co/PGjf2S2/pexels-j-shoots-230743.jpg" />
        </div>
      </Carousel>
    </div>
  )
}