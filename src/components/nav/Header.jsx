import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from './Header.module.scss';
import Nav from './Nav'

export default function Header(){
  return(
    <div>
      <Nav />
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
            <h1>Estoy amasando con amor</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo perspiciatis neque sit, corrupti optio dolorem maiores explicabo totam porro veniam nihil enim consequatur soluta voluptatum officiis omnis ullam? Saepe, nam?
            </p>
          </div>
          <img src="src/assets/pexels-life-of-pix-9095.jpg" />
        </div>
        <div className={styles.header}>
          <div className={styles.carouselOverlay}>
            <h1>¿Ya probaste el budín de chocolate?</h1>
          </div>
          <img src="src/assets/pexels-lucie-liz-3256809.jpg" />
        </div>
        <div className={styles.header}>
          <div className={styles.carouselOverlay}>
            <h1>Hacemos envíos, ¡Consultá disponibilidad!</h1>
          </div>
          <img src="src/assets/pexels-jéshoots-230743.jpg" />
        </div>
      </Carousel>
    </div>
  )
}