import styles from "./Gallery.module.css";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <h1>Gallery</h1>
        <div className={styles.panels}>
          <div className={styles.panel}>
            <Image
              className={styles.img1}
              src="/gallery/calm.png"
              alt="img-calm"
              width={300}
              height={400}
            />
            <p>Calm</p>
          </div>
          <div className={styles.panel}>
            <Image
              className={styles.img1}
              src="/gallery/badminton.png"
              alt="img-badminton"
              width={300}
              height={400}
            />
            <p>Badminton</p>
          </div>
          <div className={styles.panel}>
            <Image
              className={styles.img1}
              src="/gallery/aestetic.png"
              alt="img-aestetic"
              width={300}
              height={400}
            />
            <p>Aestetic</p>
          </div>
          <div className={styles.panel}>
            <Image
              className={styles.img2}
              src="/gallery/landscape.png"
              alt="img-landscape"
              width={970}
              height={500}
            />
            <p>Landscape</p>
          </div>
          <div className={styles.panel}>
            <Image
              className={styles.img1}
              src="/gallery/basketball.png"
              alt="img-basketball"
              width={300}
              height={400}
            />
            <p>Basketball</p>
          </div>
          <div className={styles.panel}>
            <Image
              className={styles.img1}
              src="/gallery/vintage.png"
              alt="img-vintage"
              width={300}
              height={400}
            />
            <p>Vintage</p>
          </div>
          <div className={styles.panel}>
            <Image
              className={styles.img1}
              src="/gallery/dark.png"
              alt="img-dark"
              width={300}
              height={400}
            />
            <p>Dark</p>
          </div>
          <div className={styles.panel}>
            <Image
              className={styles.img2}
              src="/gallery/wedding.png"
              alt="img-wedding"
              width={1000}
              height={600}
            />
            <p>Wedding</p>
          </div>
        </div>
      </div>
    </div>
  );
}
