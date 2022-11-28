import styles from "./Services.module.css";
import Image from "next/image";

export default function Service() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>OUR SERVICES</h1>
      <div className={styles.panels}>
        <div className={styles.panel}>
          <p className={styles.pleft}>Portrait Photography</p>
        </div>
        <div className={styles.panel}>
          <Image
            src="/set1/img1.png"
            width={460}
            height={460}
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className={styles.panel}>
          <Image
            src="/set2/img1.png"
            width={460}
            height={460}
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className={styles.panel}>
          <p className={styles.pright}>Event Photography</p>
        </div>
        <div className={styles.panel}>
          <p className={styles.pleft}>Commercial Photography</p>
        </div>
        <div className={styles.panel}>
          <Image
            src="/set3/img1.png"
            width={460}
            height={460}
            objectFit="cover"
          />
        </div>
        <div className={styles.panel}>
          <video
            src="set4/video1.mp4"
            width={600}
            autoPlay
            loop
            controls
          ></video>
          {/* <Image
            src="/set4/img.gif"
            alt=""
            width={460}
            height={460}
            layout="responsive"
            objectFit="cover"
            priority
            loop
          /> */}
        </div>
        <div className={styles.panel}>
          <p className={styles.pright}>Filming</p>
        </div>
      </div>
    </div>
  );
}
