import styles from "./Services.module.css";
import Slider1 from "./Carousel/Slider1";
import Slider2 from "./Carousel/Slider2";
import Slider3 from "./Carousel/Slider3";

export default function Service() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>OUR SERVICES</h1>
      <div className={styles.panels}>
        <div className={styles.panel}>
          <p>Portrait Photography</p>
        </div>
        <div className={styles.panel}>
          <Slider1 />
        </div>
        <div className={styles.panel}>
          <Slider2 />
        </div>
        <div className={[styles.panel]}>
          <p>Event Photography</p>
        </div>
        <div className={styles.panel}>
          <p>Commercial Photography</p>
        </div>
        <div className={styles.panel}>
          <Slider3 />
        </div>
        <div className={styles.panel}>
          <video
            className={styles.video}
            src="set4/video1.mp4"
            autoPlay
            loop
            controls
          ></video>
        </div>
        <div className={styles.panel}>
          <p className={styles.pright}>Filming</p>
        </div>
      </div>
    </div>
  );
}
